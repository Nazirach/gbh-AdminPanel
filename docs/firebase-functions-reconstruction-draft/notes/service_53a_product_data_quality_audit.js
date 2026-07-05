const fs = require("fs");
const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccountPath = process.argv[2];
const outPath = process.argv[3];

function isEmpty(v) {
  return v === undefined || v === null || v === "";
}

function typeOf(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  if (v && v.constructor && v.constructor.name) return v.constructor.name;
  return typeof v;
}

function safe(v) {
  if (v === undefined) return "undefined";
  if (v === null) return "null";
  if (Array.isArray(v)) return JSON.stringify(v);
  if (typeof v === "object") {
    try { return JSON.stringify(v); } catch (_) { return String(v); }
  }
  return String(v);
}

function inc(obj, key) {
  obj[key] = (obj[key] || 0) + 1;
}

function isValidPrice(v) {
  if (typeof v === "number") return !Number.isNaN(v);
  if (typeof v === "string" && v.trim() !== "") return !Number.isNaN(Number(v));
  return false;
}

function firstPhoto(d) {
  if (Array.isArray(d.photos) && d.photos.length > 0 && d.photos[0]) return d.photos[0];
  if (Array.isArray(d.photo) && d.photo.length > 0 && d.photo[0]) return d.photo[0];
  if (typeof d.photo === "string" && d.photo.trim() !== "") return d.photo;
  if (typeof d.image === "string" && d.image.trim() !== "") return d.image;
  return "";
}

async function run() {
  const lines = [];
  lines.push("# SERVICE 53A PRODUCT DATA QUALITY AUDIT");
  lines.push("");
  lines.push("Generated: " + new Date().toISOString());
  lines.push("Mode: READ ONLY.");
  lines.push("");
  lines.push("Purpose:");
  lines.push("- Detect published product data that may trigger customer app red screen.");
  lines.push("- Prepare human-safe fallback and Admin Web correction workflow.");
  lines.push("");

  if (!fs.existsSync(serviceAccountPath)) {
    lines.push("STATUS: SERVICE_53A_SERVICE_ACCOUNT_NOT_FOUND");
    fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
    process.exitCode = 1;
    return;
  }

  const serviceAccount = require(serviceAccountPath);
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const snap = await db.collection("vendor_products").get();

  let total = 0;
  let published = 0;
  let riskTotal = 0;
  let restaurantRisk = 0;
  let fashionRisk = 0;

  const riskTypes = {};
  const examples = [];

  for (const doc of snap.docs) {
    const d = doc.data();
    total++;

    if (d.publish !== true) continue;
    published++;

    const risks = [];

    if (isEmpty(d.vendorID)) risks.push("vendorID_missing");
    if (isEmpty(d.categoryID)) risks.push("categoryID_missing");
    if (isEmpty(d.name)) risks.push("name_missing");

    if (!isValidPrice(d.price)) risks.push("price_missing_or_invalid");

    const photo = firstPhoto(d);
    if (isEmpty(photo)) risks.push("photo_missing");

    if (!d.createdAt) risks.push("createdAt_missing");
    if (!d.updatedAt) risks.push("updatedAt_missing");

    if (typeof d.takeawayOption !== "boolean") risks.push("takeawayOption_not_boolean");

    if (d.item_attribute !== undefined && d.item_attribute !== null && !Array.isArray(d.item_attribute) && typeof d.item_attribute !== "object") {
      risks.push("item_attribute_invalid_type_" + typeOf(d.item_attribute));
    }

    if (d.itemAttribute !== undefined && d.itemAttribute !== null && !Array.isArray(d.itemAttribute) && typeof d.itemAttribute !== "object") {
      risks.push("itemAttribute_invalid_type_" + typeOf(d.itemAttribute));
    }

    if (d.photos !== undefined && d.photos !== null && !Array.isArray(d.photos)) {
      risks.push("photos_not_array_" + typeOf(d.photos));
    }

    if (d.photo !== undefined && d.photo !== null && typeof d.photo !== "string" && !Array.isArray(d.photo)) {
      risks.push("photo_invalid_type_" + typeOf(d.photo));
    }

    // High-risk for UI: variant/addon fields sometimes become null/string/object inconsistent.
    ["variant_info", "variantInfo", "attributes", "addOnsTitle", "addOnsPrice"].forEach((k) => {
      if (d[k] === null) risks.push(k + "_null");
    });

    if (risks.length > 0) {
      riskTotal++;
      risks.forEach((r) => inc(riskTypes, r));

      const section = safe(d.section_id);
      if (section === "6285ddbfd9598") restaurantRisk++;
      if (section === "6285dd3281531") fashionRisk++;

      if (examples.length < 120) {
        examples.push([
          "RISK_PRODUCT",
          "id=" + doc.id,
          "name=" + safe(d.name),
          "vendorID=" + safe(d.vendorID),
          "section_id=" + safe(d.section_id),
          "categoryID=" + safe(d.categoryID),
          "price=" + safe(d.price),
          "photoType=" + typeOf(d.photo),
          "photosType=" + typeOf(d.photos),
          "item_attributeType=" + typeOf(d.item_attribute),
          "itemAttributeType=" + typeOf(d.itemAttribute),
          "risks=" + risks.join("|")
        ].join(" | "));
      }
    }
  }

  lines.push("## Summary");
  lines.push("TEXT_START");
  lines.push("PRODUCTS_TOTAL: " + total);
  lines.push("PRODUCTS_PUBLISH_TRUE_TOTAL: " + published);
  lines.push("PRODUCTS_DATA_QUALITY_RISK_TOTAL: " + riskTotal);
  lines.push("RESTAURANT_PRODUCT_RISK_TOTAL: " + restaurantRisk);
  lines.push("FASHION_PRODUCT_RISK_TOTAL: " + fashionRisk);
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Risk Types");
  lines.push("TEXT_START");
  lines.push("PRODUCT_RISK_TYPES: " + JSON.stringify(riskTypes));
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Limited Examples");
  lines.push("TEXT_START");
  if (examples.length === 0) {
    lines.push("NO_PRODUCT_DATA_QUALITY_RISK");
  } else {
    lines.push(...examples);
  }
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Recommended Human-Safe Fallback");
  lines.push("TEXT_START");
  lines.push("CUSTOMER_APP_FALLBACK_PHOTO: show placeholder image when photo/photos is missing.");
  lines.push("CUSTOMER_APP_FALLBACK_PRICE: show 'Harga belum diatur' and disable add-to-cart when price invalid.");
  lines.push("CUSTOMER_APP_FALLBACK_NAME: show 'Produk belum lengkap' when name missing.");
  lines.push("CUSTOMER_APP_FALLBACK_ATTRIBUTE: treat null/invalid item_attribute/variant fields as empty list.");
  lines.push("ADMIN_WEB_WARNING: show product completeness status so operator/vendor can fix missing input.");
  lines.push("TEXT_END");

  lines.push("");
  lines.push("## Final Status");
  if (riskTotal > 0) {
    lines.push("STATUS: SERVICE_53A_PRODUCT_DATA_QUALITY_RISK_FOUND");
  } else {
    lines.push("STATUS: SERVICE_53A_PRODUCT_DATA_QUALITY_PASS");
  }

  fs.writeFileSync(outPath, lines.join("\r\n"), "utf8");
  console.log(lines.join("\n"));
}

run().catch((e) => {
  fs.writeFileSync(outPath, "STATUS: SERVICE_53A_ERROR\r\n" + e.stack, "utf8");
  console.error(e);
  process.exitCode = 1;
});