from pathlib import Path
from datetime import datetime
import shutil

admin = Path(r"C:\deploy\adminpanel")
create_file = admin / r"resources\views\vendors\create.blade.php"
edit_file = admin / r"resources\views\vendors\edit.blade.php"
out = Path(r"C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\SERVICE_48E_ADMIN_VENDOR_CREATE_EDIT_SYNC_NORMALIZER_PATCH_20260702.md")

lines = []
lines.append("# SERVICE 48E ADMIN VENDOR CREATE EDIT SYNC NORMALIZER PATCH")
lines.append("")
lines.append(f"Generated: {datetime.now()}")
lines.append("Mode: PATCH.")
lines.append("")
lines.append("Goal: Web Admin becomes control center by normalizing vendor owner create/edit writes.")
lines.append("")

def patch_file(path: Path, replacements):
    result = {
        "file": str(path),
        "exists": path.exists(),
        "changed": False,
        "replacements": []
    }

    if not path.exists():
        return result

    text = path.read_text(encoding="utf-8", errors="ignore")
    original = text

    backup = path.with_suffix(path.suffix + ".service48e.bak")
    shutil.copy2(path, backup)
    result["backup"] = str(backup)

    for label, old, new in replacements:
        if new in text:
            result["replacements"].append(f"SKIP_ALREADY_PATCHED: {label}")
            continue

        if old in text:
            text = text.replace(old, new, 1)
            result["changed"] = True
            result["replacements"].append(f"PATCHED: {label}")
        else:
            result["replacements"].append(f"MARKER_NOT_FOUND: {label}")

    if text != original:
        path.write_text(text, encoding="utf-8")

    return result

create_replacements = [
    (
        "CREATE_USERS_SET_ADD_SECTION_ID_UPDATEDAT_ISACTIVE",
        """                            'active': vendor_active,
                            'vendorID': null,
                            'createdAt': createdAt,
                            'userBankDetails': userBankDetails,
                            'isDocumentVerify': false,
                            'isAutoVerify':isAutoVerify,
                            'sectionId' : section_id,
""",
        """                            'active': vendor_active,
                            'isActive': vendor_active,
                            'vendorID': null,
                            'createdAt': createdAt,
                            'updatedAt': firebase.firestore.FieldValue.serverTimestamp(),
                            'userBankDetails': userBankDetails,
                            'isDocumentVerify': false,
                            'isAutoVerify':isAutoVerify,
                            'sectionId' : section_id,
                            'section_id' : section_id,
"""
    ),
]

edit_replacements = [
    (
        "EDIT_USERS_UPDATE_ADD_UPDATEDAT_ISACTIVE",
        """                            'profilePictureURL': IMG.ownerImage,
                            'active': vendor_active,
                            'userBankDetails': userBankDetails
""",
        """                            'profilePictureURL': IMG.ownerImage,
                            'active': vendor_active,
                            'isActive': vendor_active,
                            'updatedAt': firebase.firestore.FieldValue.serverTimestamp(),
                            'userBankDetails': userBankDetails
"""
    ),
    (
        "EDIT_VENDOR_STORE_UPDATE_ADD_UPDATEDAT",
        """                                    'authorProfilePic': IMG.ownerImage,
                                    'subscriptionExpiryDate': subscriptionPlanExpiryDate,
                                });
""",
        """                                    'authorProfilePic': IMG.ownerImage,
                                    'subscriptionExpiryDate': subscriptionPlanExpiryDate,
                                    'updatedAt': firebase.firestore.FieldValue.serverTimestamp(),
                                });
"""
    ),
]

results = []
results.append(patch_file(create_file, create_replacements))
results.append(patch_file(edit_file, edit_replacements))

lines.append("## Patch Results")
lines.append("TEXT_START")

for r in results:
    lines.append("")
    lines.append(f"FILE: {r['file']}")
    lines.append(f"EXISTS: {r['exists']}")
    lines.append(f"CHANGED: {r['changed']}")
    if "backup" in r:
        lines.append(f"BACKUP: {r['backup']}")
    for rep in r["replacements"]:
        lines.append(rep)

lines.append("TEXT_END")
lines.append("")

lines.append("## Verification")
lines.append("TEXT_START")

for path in [create_file, edit_file]:
    lines.append("")
    lines.append(f"FILE: {path}")
    if path.exists():
        text = path.read_text(encoding="utf-8", errors="ignore")
        checks = {
            "HAS_SERVICE48E_CREATE_SECTION_ID": "'section_id' : section_id" in text or "'section_id': section_id" in text,
            "HAS_UPDATEDAT_SERVER_TIMESTAMP": "updatedAt': firebase.firestore.FieldValue.serverTimestamp()" in text or "'updatedAt': firebase.firestore.FieldValue.serverTimestamp()" in text,
            "HAS_ISACTIVE_MIRROR": "'isActive': vendor_active" in text,
            "HAS_VENDOR_STORE_UPDATEDAT": "'subscriptionExpiryDate': subscriptionPlanExpiryDate,\n                                    'updatedAt': firebase.firestore.FieldValue.serverTimestamp()" in text,
        }
        for k, v in checks.items():
            lines.append(f"{k}: {v}")
    else:
        lines.append("FILE_MISSING")

lines.append("TEXT_END")
lines.append("")

if all(r["exists"] for r in results) and any(r["changed"] for r in results):
    lines.append("STATUS: SERVICE_48E_ADMIN_VENDOR_CREATE_EDIT_SYNC_NORMALIZER_PATCH_DONE")
elif all(r["exists"] for r in results):
    lines.append("STATUS: SERVICE_48E_ADMIN_VENDOR_CREATE_EDIT_SYNC_NORMALIZER_ALREADY_PATCHED_OR_MARKER_RISK")
else:
    lines.append("STATUS: SERVICE_48E_ADMIN_VENDOR_CREATE_EDIT_SYNC_NORMALIZER_FILE_MISSING")

out.write_text("\r\n".join(lines), encoding="utf-8")
print("\n".join(lines[-80:]))