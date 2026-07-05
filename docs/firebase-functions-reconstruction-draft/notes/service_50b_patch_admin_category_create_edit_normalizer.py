from pathlib import Path
from datetime import datetime
import shutil

admin = Path(r"C:\deploy\adminpanel")
create_file = admin / r"resources\views\categories\create.blade.php"
edit_file = admin / r"resources\views\categories\edit.blade.php"
out = Path(r"C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\SERVICE_50B_ADMIN_CATEGORY_CREATE_EDIT_NORMALIZER_PATCH_20260702.md")

lines = []
lines.append("# SERVICE 50B ADMIN CATEGORY CREATE EDIT NORMALIZER PATCH")
lines.append("")
lines.append(f"Generated: {datetime.now()}")
lines.append("Mode: PATCH.")
lines.append("")
lines.append("Goal: strengthen Admin Web category writes for shared Firebase contract.")
lines.append("")

def backup(path: Path):
    b = path.with_suffix(path.suffix + ".service50b.bak")
    shutil.copy2(path, b)
    return b

def patch_file(path: Path, replacements):
    result = {
        "file": str(path),
        "exists": path.exists(),
        "changed": False,
        "details": []
    }

    if not path.exists():
        return result

    text = path.read_text(encoding="utf-8", errors="ignore")
    original = text
    result["backup"] = str(backup(path))

    for label, old, new in replacements:
        if new in text:
            result["details"].append(f"SKIP_ALREADY_PATCHED: {label}")
            continue

        if old in text:
            text = text.replace(old, new, 1)
            result["changed"] = True
            result["details"].append(f"PATCHED: {label}")
        else:
            result["details"].append(f"MARKER_NOT_FOUND: {label}")

    if text != original:
        path.write_text(text, encoding="utf-8")

    return result

create_replacements = [
    (
        "CREATE_CATEGORY_ADD_CREATEDAT_UPDATEDAT",
        """                            'publish': itemPublish,
                            'show_in_homepage': show_in_homepage
                        }).then(function (result) {""",
        """                            'publish': itemPublish,
                            'show_in_homepage': show_in_homepage,
                            'createdAt': firebase.firestore.FieldValue.serverTimestamp(),
                            'updatedAt': firebase.firestore.FieldValue.serverTimestamp()
                        }).then(function (result) {"""
    )
]

edit_replacements = [
    (
        "EDIT_CATEGORY_ADD_UPDATEDAT",
        """                            'publish': itemPublish,
                            'show_in_homepage': show_in_homepage,
                            'order': parseInt(order),
                        }).then(function (result) {""",
        """                            'publish': itemPublish,
                            'show_in_homepage': show_in_homepage,
                            'order': parseInt(order),
                            'updatedAt': firebase.firestore.FieldValue.serverTimestamp(),
                        }).then(function (result) {"""
    )
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
    for d in r["details"]:
        lines.append(d)

lines.append("TEXT_END")
lines.append("")

lines.append("## Verification")
lines.append("TEXT_START")

for path in [create_file, edit_file]:
    lines.append("")
    lines.append(f"FILE: {path}")
    if path.exists():
        text = path.read_text(encoding="utf-8", errors="ignore")
        lines.append(f"HAS_VENDOR_CATEGORIES: {'vendor_categories' in text}")
        lines.append(f"HAS_CREATEDAT_SERVER_TIMESTAMP: {'createdAt' in text and 'serverTimestamp' in text}")
        lines.append(f"HAS_UPDATEDAT_SERVER_TIMESTAMP: {'updatedAt' in text and 'serverTimestamp' in text}")
        lines.append(f"HAS_SECTION_ID: {'section_id' in text}")
        lines.append(f"HAS_PUBLISH: {'publish' in text}")
        lines.append(f"HAS_PHOTO: {'photo' in text}")
    else:
        lines.append("FILE_MISSING")

lines.append("TEXT_END")
lines.append("")

if any(r["changed"] for r in results):
    lines.append("STATUS: SERVICE_50B_ADMIN_CATEGORY_CREATE_EDIT_NORMALIZER_PATCH_DONE")
elif all(r["exists"] for r in results):
    lines.append("STATUS: SERVICE_50B_ADMIN_CATEGORY_CREATE_EDIT_NORMALIZER_ALREADY_PATCHED_OR_MARKER_RISK")
else:
    lines.append("STATUS: SERVICE_50B_ADMIN_CATEGORY_CREATE_EDIT_NORMALIZER_FILE_MISSING")

out.write_text("\r\n".join(lines), encoding="utf-8")
print("\n".join(lines[-100:]))