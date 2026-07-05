from pathlib import Path
from datetime import datetime
import shutil
import re

admin = Path(r"C:\deploy\adminpanel")
create_file = admin / r"resources\views\items\create.blade.php"
edit_file = admin / r"resources\views\items\edit.blade.php"
out = Path(r"C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\SERVICE_49B_ADMIN_PRODUCT_CREATE_EDIT_NORMALIZER_PATCH_20260702.md")

lines = []
lines.append("# SERVICE 49B ADMIN PRODUCT CREATE EDIT NORMALIZER PATCH")
lines.append("")
lines.append(f"Generated: {datetime.now()}")
lines.append("Mode: PATCH.")
lines.append("")
lines.append("Goal: strengthen Admin Web product writes for shared Firebase contract.")
lines.append("")

def backup(path: Path):
    b = path.with_suffix(path.suffix + ".service49b.bak")
    shutil.copy2(path, b)
    return b

def patch_create(path: Path):
    result = {"file": str(path), "exists": path.exists(), "changed": False, "details": []}
    if not path.exists():
        return result

    text = path.read_text(encoding="utf-8", errors="ignore")
    original = text
    result["backup"] = str(backup(path))

    if "'updatedAt': firebase.firestore.FieldValue.serverTimestamp()" in text or '"updatedAt": firebase.firestore.FieldValue.serverTimestamp()' in text:
        result["details"].append("SKIP_ALREADY_HAS_UPDATEDAT")
    else:
        marker = """                                'createdAt': firebase.firestore.FieldValue.serverTimestamp(),
                                'taxSetting': selectedTaxes,"""
        replacement = """                                'createdAt': firebase.firestore.FieldValue.serverTimestamp(),
                                'updatedAt': firebase.firestore.FieldValue.serverTimestamp(),
                                'taxSetting': selectedTaxes,"""
        if marker in text:
            text = text.replace(marker, replacement, 1)
            result["changed"] = True
            result["details"].append("PATCHED_CREATE_PRODUCT_UPDATEDAT_AFTER_CREATEDAT")
        else:
            result["details"].append("MARKER_NOT_FOUND_CREATE_CREATEDAT_TAXSETTING")

    if text != original:
        path.write_text(text, encoding="utf-8")

    return result

def patch_edit(path: Path):
    result = {"file": str(path), "exists": path.exists(), "changed": False, "details": []}
    if not path.exists():
        return result

    text = path.read_text(encoding="utf-8", errors="ignore")
    original = text
    result["backup"] = str(backup(path))

    if "SERVICE49B_PRODUCT_EDIT_UPDATEDAT_NORMALIZER" in text:
        result["details"].append("SKIP_ALREADY_PATCHED_SERVICE49B")
    else:
        # Safest edit patch: add updatedAt inside product object before common update/set call.
        candidates = [
            (
                """                                'taxSetting': selectedTaxes,
                            };""",
                """                                'taxSetting': selectedTaxes,
                                // SERVICE49B_PRODUCT_EDIT_UPDATEDAT_NORMALIZER
                                'updatedAt': firebase.firestore.FieldValue.serverTimestamp(),
                            };"""
            ),
            (
                """                                'taxSetting': selectedTaxes
                            };""",
                """                                'taxSetting': selectedTaxes,
                                // SERVICE49B_PRODUCT_EDIT_UPDATEDAT_NORMALIZER
                                'updatedAt': firebase.firestore.FieldValue.serverTimestamp()
                            };"""
            ),
            (
                """                                'item_attribute': item_attribute,
                                'photos': IMG,""",
                """                                'item_attribute': item_attribute,
                                'photos': IMG,
                                // SERVICE49B_PRODUCT_EDIT_UPDATEDAT_NORMALIZER
                                'updatedAt': firebase.firestore.FieldValue.serverTimestamp(),"""
            ),
        ]

        patched = False
        for old, new in candidates:
            if old in text:
                text = text.replace(old, new, 1)
                result["changed"] = True
                result["details"].append("PATCHED_EDIT_PRODUCT_UPDATEDAT")
                patched = True
                break

        if not patched:
            result["details"].append("MARKER_NOT_FOUND_EDIT_PRODUCT_OBJECT")

    if text != original:
        path.write_text(text, encoding="utf-8")

    return result

results = [patch_create(create_file), patch_edit(edit_file)]

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
        lines.append(f"HAS_VENDOR_PRODUCTS: {'vendor_products' in text}")
        lines.append(f"HAS_CREATEDAT_SERVER_TIMESTAMP: {'createdAt' in text and 'serverTimestamp' in text}")
        lines.append(f"HAS_UPDATEDAT_SERVER_TIMESTAMP: {'updatedAt' in text and 'serverTimestamp' in text}")
        lines.append(f"HAS_SERVICE49B_EDIT_MARKER: {'SERVICE49B_PRODUCT_EDIT_UPDATEDAT_NORMALIZER' in text}")
        lines.append(f"HAS_TAKEAWAY_OPTION: {'takeawayOption' in text}")
        lines.append(f"HAS_VENDOR_ID: {'vendorID' in text}")
        lines.append(f"HAS_CATEGORY_ID: {'categoryID' in text}")
    else:
        lines.append("FILE_MISSING")
lines.append("TEXT_END")
lines.append("")

if any(r["changed"] for r in results):
    lines.append("STATUS: SERVICE_49B_ADMIN_PRODUCT_CREATE_EDIT_NORMALIZER_PATCH_DONE")
elif all(r["exists"] for r in results):
    lines.append("STATUS: SERVICE_49B_ADMIN_PRODUCT_CREATE_EDIT_NORMALIZER_ALREADY_PATCHED_OR_MARKER_RISK")
else:
    lines.append("STATUS: SERVICE_49B_ADMIN_PRODUCT_CREATE_EDIT_NORMALIZER_FILE_MISSING")

out.write_text("\r\n".join(lines), encoding="utf-8")
print("\n".join(lines[-100:]))