const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const fs = require("fs");

const credPath = process.argv[2];
const outPath = process.argv[3];

const serviceAccount = require(credPath);

initializeApp({
  credential: cert(serviceAccount),
  projectId: serviceAccount.project_id,
});

const db = getFirestore();

const newSections = [
  {
    id: "custom_laundry_service",
    name: "Laundry Service",
    order: 10,
    serviceTypeFlag: "delivery-service",
    color: "#E6F4FF",
    image: ""
  },
  {
    id: "custom_document_service",
    name: "Document Service",
    order: 11,
    serviceTypeFlag: "parcel_delivery",
    color: "#F4F0FF",
    image: ""
  },
  {
    id: "custom_hotel_homestay",
    name: "Hotel / Homestay",
    order: 12,
    serviceTypeFlag: "rental-service",
    color: "#FFF4E6",
    image: ""
  },
  {
    id: "custom_akap_ticket",
    name: "AKAP Ticket",
    order: 13,
    serviceTypeFlag: "ecommerce-service",
    color: "#EFFFF1",
    image: ""
  },
  {
    id: "custom_technician_service",
    name: "Technician Service",
    order: 14,
    serviceTypeFlag: "ondemand-service",
    color: "#EAF7FF",
    image: ""
  },
  {
    id: "custom_housemaid_art",
    name: "Housemaid / ART",
    order: 15,
    serviceTypeFlag: "ondemand-service",
    color: "#FFF0F6",
    image: ""
  },
  {
    id: "custom_motor_delivery",
    name: "Motor Delivery",
    order: 16,
    serviceTypeFlag: "parcel_delivery",
    color: "#F1FFF7",
    image: ""
  },
  {
    id: "custom_emergency_help",
    name: "Emergency Help",
    order: 17,
    serviceTypeFlag: "ondemand-service",
    color: "#FFECEC",
    image: ""
  }
];

function sectionPayload(s) {
  return {
    id: s.id,
    name: s.name,
    title: s.name,
    order: s.order,
    serviceTypeFlag: s.serviceTypeFlag,

    active: true,
    isActive: true,
    enable: true,

    dine_in_active: false,
    tax_active: true,

    rideType: "",
    ride_type: "",

    color: s.color,
    image: s.image,
    sectionImage: s.image,
    photo: s.image,

    updatedAt: FieldValue.serverTimestamp(),
    createdAt: FieldValue.serverTimestamp()
  };
}

async function main() {
  const report = [];
  const batch = db.batch();

  for (const s of newSections) {
    const ref = db.collection("sections").doc(s.id);
    const snap = await ref.get();

    if (snap.exists) {
      batch.set(ref, {
        name: s.name,
        title: s.name,
        order: s.order,
        serviceTypeFlag: s.serviceTypeFlag,
        active: true,
        isActive: true,
        enable: true,
        updatedAt: FieldValue.serverTimestamp()
      }, { merge: true });

      report.push({
        id: s.id,
        name: s.name,
        order: s.order,
        serviceTypeFlag: s.serviceTypeFlag,
        action: "UPDATED_EXISTING"
      });
    } else {
      batch.set(ref, sectionPayload(s), { merge: true });

      report.push({
        id: s.id,
        name: s.name,
        order: s.order,
        serviceTypeFlag: s.serviceTypeFlag,
        action: "CREATED_NEW"
      });
    }
  }

  await batch.commit();

  const afterSnap = await db.collection("sections").orderBy("order", "asc").get();
  const after = [];
  afterSnap.forEach(doc => {
    const d = doc.data() || {};
    after.push({
      id: doc.id,
      name: d.name || d.title || null,
      order: d.order ?? null,
      serviceTypeFlag: d.serviceTypeFlag ?? null,
      active: d.active ?? d.isActive ?? null
    });
  });

  const md = [];
  md.push("# ADD NEW HOME MENU SECTIONS");
  md.push("");
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push("");
  md.push("Mode: controlled Firebase write. Add/update new custom sections only. No delete.");
  md.push("");
  md.push(`Project: ${serviceAccount.project_id}`);
  md.push("");
  md.push("## Created / Updated");
  md.push("```json");
  md.push(JSON.stringify(report, null, 2));
  md.push("```");
  md.push("");
  md.push("## Sections After Patch");
  md.push("```json");
  md.push(JSON.stringify(after, null, 2));
  md.push("```");
  md.push("");
  md.push("## Final Status");
  md.push("STATUS: NEW_HOME_MENU_SECTIONS_ADDED");

  fs.writeFileSync(outPath, md.join("\n"), "utf8");

  console.log("STATUS: NEW_HOME_MENU_SECTIONS_ADDED");
  for (const r of report) {
    console.log(`${r.action} | ${r.order} | ${r.id} | ${r.name} | ${r.serviceTypeFlag}`);
  }
  console.log("OUT:", outPath);
}

main().catch(e => {
  console.log("STATUS: NEW_HOME_MENU_SECTIONS_ADD_ERROR");
  console.log("ERROR_NAME:", e.name);
  console.log("ERROR_MESSAGE:", e.message);
  process.exitCode = 1;
});