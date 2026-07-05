from pathlib import Path
from datetime import datetime
import shutil

repo = Path(r"C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation")
customer_git = repo / r"apps\customer_v6_7"
runtime_customer = Path(r"C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer")
out = Path(r"C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\SERVICE_53F_FINAL_PATCH_REMAINING_PHOTOS_BANG_20260702.md")

lines = []
lines.append("# SERVICE 53F FINAL PATCH REMAINING PHOTOS BANG")
lines.append("")
lines.append(f"Generated: {datetime.now()}")
lines.append("Mode: PATCH.")
lines.append("")

roots = []
if customer_git.exists():
    roots.append(("customer_git", customer_git))
if runtime_customer.exists():
    roots.append(("runtime_customer", runtime_customer))

target_files = [
    r"lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart",
    r"lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart",
    r"lib\widget\restaurant_image_view.dart",
]

replacements = [
    (
        "controller.vendorModel.value.photos!.isEmpty",
        "(controller.vendorModel.value.photos ?? []).isEmpty",
        "SCREEN_VENDOR_PHOTOS_ISEMPTY"
    ),
    (
        "controller.vendorModel.value.photos!.isNotEmpty",
        "(controller.vendorModel.value.photos ?? []).isNotEmpty",
        "SCREEN_VENDOR_PHOTOS_ISNOTEMPTY"
    ),
    (
        "controller.vendorModel.value.restaurantMenuPhotos!.isEmpty",
        "(controller.vendorModel.value.restaurantMenuPhotos ?? []).isEmpty",
        "SCREEN_MENU_PHOTOS_ISEMPTY"
    ),
    (
        "controller.vendorModel.value.restaurantMenuPhotos!.isNotEmpty",
        "(controller.vendorModel.value.restaurantMenuPhotos ?? []).isNotEmpty",
        "SCREEN_MENU_PHOTOS_ISNOTEMPTY"
    ),
    (
        "widget.vendorModel.photos!.isNotEmpty",
        "(widget.vendorModel.photos ?? []).isNotEmpty",
        "WIDGET_VENDOR_PHOTOS_ISNOTEMPTY"
    ),
    (
        "widget.vendorModel.photos!.isEmpty",
        "(widget.vendorModel.photos ?? []).isEmpty",
        "WIDGET_VENDOR_PHOTOS_ISEMPTY"
    ),
    (
        "widget.vendorModel.photos!.length - 1",
        "(widget.vendorModel.photos ?? []).length - 1",
        "WIDGET_VENDOR_PHOTOS_LENGTH_MINUS_ONE"
    ),
    (
        "widget.vendorModel.photos!.length",
        "(widget.vendorModel.photos ?? []).length",
        "WIDGET_VENDOR_PHOTOS_LENGTH"
    ),
    (
        "widget.vendorModel.photos![index]",
        "(widget.vendorModel.photos ?? [])[index]",
        "WIDGET_VENDOR_PHOTOS_INDEX"
    ),
]

def backup(path: Path):
    b = path.with_suffix(path.suffix + ".service53f.bak")
    shutil.copy2(path, b)
    return b

for root_label, root in roots:
    lines.append("")
    lines.append(f"## ROOT: {root_label}")
    lines.append(str(root))
    lines.append("TEXT_START")

    patched_count = 0

    for rel in target_files:
        path = root / rel
        lines.append("")
        lines.append(f"FILE: {rel}")

        if not path.exists():
            lines.append("FILE_NOT_FOUND")
            continue

        text = path.read_text(encoding="utf-8", errors="ignore")
        original = text
        b = backup(path)

        details = []
        for old, new, label in replacements:
            if old in text:
                text = text.replace(old, new)
                details.append(f"PATCHED: {label}")

        if text != original:
            path.write_text(text, encoding="utf-8")
            patched_count += 1
            lines.append("CHANGED: True")
            lines.append(f"BACKUP: {b}")
            for d in details:
                lines.append(d)
        else:
            lines.append("CHANGED: False")
            lines.append(f"BACKUP: {b}")
            lines.append("NO_TARGET_MARKER_FOUND")

    lines.append("")
    lines.append(f"PATCHED_FILES_IN_ROOT: {patched_count}")
    lines.append("TEXT_END")

lines.append("")
lines.append("## Verification")
lines.append("TEXT_START")
for root_label, root in roots:
    lib = root / "lib"
    photos_bang = 0
    menu_bang = 0
    if lib.exists():
        for f in lib.rglob("*.dart"):
            text = f.read_text(encoding="utf-8", errors="ignore")
            photos_bang += text.count("photos!")
            menu_bang += text.count("restaurantMenuPhotos!")
    lines.append(f"{root_label}_REMAINING_photos_bang_COUNT: {photos_bang}")
    lines.append(f"{root_label}_REMAINING_restaurantMenuPhotos_bang_COUNT: {menu_bang}")
lines.append("TEXT_END")
lines.append("")

if any("CHANGED: True" in l for l in lines):
    lines.append("STATUS: SERVICE_53F_FINAL_PHOTOS_BANG_PATCH_DONE")
else:
    lines.append("STATUS: SERVICE_53F_NO_FINAL_PHOTOS_BANG_PATCH_APPLIED")

out.write_text("\r\n".join(lines), encoding="utf-8")
print("\n".join(lines[-140:]))