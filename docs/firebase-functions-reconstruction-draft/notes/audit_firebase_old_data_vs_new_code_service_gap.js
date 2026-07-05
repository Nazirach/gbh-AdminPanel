const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const expectedFlagsFromNewCustomerCode = [
  {
    serviceTypeFlag: "ecommerce-service",
    meaning: "Multi vendor / ecommerce style service",
    examples: ["Cosmetic", "Fashion", "Flowers"]
  },
  {
    serviceTypeFlag: "delivery-service",
    meaning: "Restaurant / food / grocery delivery style service",
    examples: ["Restaurants", "Food Grocery"]
  },
  {
    serviceTypeFlag: "cab-service",
    meaning: "Ride / taxi / cab booking service",
    examples: ["Cab Service"]
  },
  {
    serviceTypeFlag: "rental-service",
    meaning: "Vehicle rental service",
    examples: ["Rental Service"]
  },
  {
    serviceTypeFlag: "parcel_delivery",
    meaning: "Parcel delivery service",
    examples: ["Parcel Service"]
  },
  {
    serviceTypeFlag: "ondemand-service",
    meaning: "On-demand service / jasa panggilan / teknisi / service booking",
    examples: ["On Demand Service", "Service", "Technician Service"]
  }
];

function safeType(v) {
  if (v === undefined) return "missing";
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  return typeof v;
}

async function main() {
  const credPath = process.argv[2];
  const serviceAccount = require(credPath);

  initializeApp({
    credential: cert(serviceAccount),
    projectId: serviceAccount.project_id,
  });

  const db = getFirestore();

  console.log("STATUS: FIREBASE_ADMIN_INITIALIZED_READ_ONLY");
  console.log("project_id:", serviceAccount.project_id);
  console.log("");

  const snap = await db.collection("sections").get();

  const rows = snap.docs.map((doc) => {
    const d = doc.data() || {};
    return {
      id: doc.id,
      name: d.name ?? null,
      isActive: d.isActive ?? null,
      order: d.order ?? null,
      serviceType: d.serviceType ?? null,
      serviceTypeFlag: d.serviceTypeFlag ?? null,
      theme: d.theme ?? null,
      sectionImage_present: !!d.sectionImage,
      markerIcon_present: !!d.markerIcon,
      platformFee_type: safeType(d.platformFee),
      adminCommision_type: safeType(d.adminCommision),
      nearByRadius: d.nearByRadius ?? null,
    };
  });

  rows.sort((a, b) => {
    const ao = typeof a.order === "number" ? a.order : 999999;
    const bo = typeof b.order === "number" ? b.order : 999999;
    return ao - bo || String(a.name || "").localeCompare(String(b.name || ""));
  });

  console.log("## CURRENT FIREBASE SECTIONS");
  console.log("sections_total_count:", rows.length);
  rows.forEach((r) => console.log(JSON.stringify(r)));

  console.log("");
  console.log("## CURRENT ACTIVE ORDERED SECTIONS");
  rows
    .filter((r) => r.isActive === true && typeof r.order === "number")
    .forEach((r) => console.log(JSON.stringify(r)));

  console.log("");
  console.log("## NEW CODE EXPECTED FLAGS VS FIREBASE");
  expectedFlagsFromNewCustomerCode.forEach((expected) => {
    const found = rows.filter((r) => r.serviceTypeFlag === expected.serviceTypeFlag);
    console.log(JSON.stringify({
      expectedFlag: expected.serviceTypeFlag,
      meaning: expected.meaning,
      examples: expected.examples,
      foundCount: found.length,
      foundNames: found.map((r) => r.name),
      status: found.length > 0 ? "PRESENT_IN_FIREBASE" : "MISSING_IN_FIREBASE"
    }));
  });

  console.log("");
  console.log("## MISSING SERVICE DRAFTS - NO WRITE");
  expectedFlagsFromNewCustomerCode.forEach((expected) => {
    const found = rows.filter((r) => r.serviceTypeFlag === expected.serviceTypeFlag);
    if (found.length === 0) {
      const nextOrder = rows
        .map((r) => r.order)
        .filter((v) => typeof v === "number")
        .reduce((a, b) => Math.max(a, b), 0) + 1;

      console.log(JSON.stringify({
        action: "DRAFT_ONLY_DO_NOT_WRITE",
        collection: "sections",
        serviceTypeFlag: expected.serviceTypeFlag,
        suggestedName: expected.examples[0],
        suggestedOrder: nextOrder,
        suggestedDoc: {
          name: expected.examples[0],
          isActive: false,
          order: nextOrder,
          serviceType: expected.serviceTypeFlag === "ondemand-service" ? "On Demand Service" : "",
          serviceTypeFlag: expected.serviceTypeFlag,
          theme: "theme_2",
          sectionImage: "",
          markerIcon: "",
          platformFee: { fee: "0.0", enable: false },
          adminCommision: { commission: "0", enable: false, type: "fix" },
          nearByRadius: 5000
        }
      }));
    }
  });

  console.log("");
  console.log("STATUS: FIREBASE_OLD_DATA_VS_NEW_CODE_SERVICE_GAP_AUDIT_FINISHED");
}

main().catch((e) => {
  console.log("STATUS: AUDIT_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});