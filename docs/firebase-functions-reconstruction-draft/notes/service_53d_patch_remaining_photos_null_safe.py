from pathlib import Path
from datetime import datetime
import shutil

repo = Path(r"C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation")
customer_git = repo / r"apps\customer_v6_7"
runtime_customer = Path(r"C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer")
out = Path(r"C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\SERVICE_53D_PATCH_REMAINING_PHOTOS_NULL_SAFE_20260702.md")

lines = []
lines.append("# SERVICE 53D PATCH REMAINING PHOTOS NULL SAFE")
lines.append("")
lines.append(f"Generated: {datetime.now()}")
lines.append("Mode: PATCH.")
lines.append("")
lines.append("Goal: remove remaining photos!/restaurantMenuPhotos! red-screen risks using safe list fallback.")
lines.append("")

roots = []
if customer_git.exists():
    roots.append(("customer_git", customer_git))
if runtime_customer.exists():
    roots.append(("runtime_customer", runtime_customer))

target_files = [
    r"lib\controllers\restaurant_details_controller.dart",
    r"lib\controllers\dine_in_restaurant_details_controller.dart",
    r"lib\screen_ui\multi_vendor_service\restaurant_details_screen\restaurant_details_screen.dart",
    r"lib\screen_ui\multi_vendor_service\dine_in_screeen\dine_in_details_screen.dart",
]

def backup(path: Path):
    b = path.with_suffix(path.suffix + ".service53d.bak")
    shutil.copy2(path, b)
    return b

def patch_common(text: str):
    changed = False
    details = []

    replacements = [
        (
            "vendorModel.value.photos!.length - 1",
            "(vendorModel.value.photos ?? []).length - 1",
            "CONTROLLER_VENDOR_PHOTOS_LENGTH_MINUS_ONE"
        ),
        (
            "vendorModel.value.photos!.length",
            "(vendorModel.value.photos ?? []).length",
            "CONTROLLER_VENDOR_PHOTOS_LENGTH"
        ),
        (
            "controller.vendorModel.value.photos!.length",
            "(controller.vendorModel.value.photos ?? []).length",
            "SCREEN_VENDOR_PHOTOS_LENGTH"
        ),
        (
            "controller.vendorModel.value.photos![index]",
            "(controller.vendorModel.value.photos ?? [])[index]",
            "SCREEN_VENDOR_PHOTOS_INDEX"
        ),
        (
            "controller.vendorModel.value.restaurantMenuPhotos!.length",
            "(controller.vendorModel.value.restaurantMenuPhotos ?? []).length",
            "SCREEN_MENU_PHOTOS_LENGTH"
        ),
        (
            "controller.vendorModel.value.restaurantMenuPhotos![index]",
            "(controller.vendorModel.value.restaurantMenuPhotos ?? [])[index]",
            "SCREEN_MENU_PHOTOS_INDEX"
        ),
        (
            "vendorModel.value.restaurantMenuPhotos!.length",
            "(vendorModel.value.restaurantMenuPhotos ?? []).length",
            "CONTROLLER_MENU_PHOTOS_LENGTH"
        ),
        (
            "vendorModel.value.restaurantMenuPhotos![index]",
            "(vendorModel.value.restaurantMenuPhotos ?? [])[index]",
            "CONTROLLER_MENU_PHOTOS_INDEX"
        ),
    ]

    for old, new, label in replacements:
        if old in text:
            text = text.replace(old, new)
            changed = True
            details.append(f"PATCHED: {label}")

    # Make common condition more stable if present.
    old_cond = "controller.vendorModel.value.photos == null || controller.vendorModel.value.photos!.isEmpty"
    new_cond = "(controller.vendorModel.value.photos ?? []).isEmpty"
    if old_cond in text:
        text = text.replace(old_cond, new_cond)
        changed = True
        details.append("PATCHED: SCREEN_VENDOR_PHOTOS_EMPTY_CONDITION")

    old_cond2 = "vendorModel.value.photos != null &&\n        vendorModel.value.photos!.isNotEmpty"
    new_cond2 = "(vendorModel.value.photos ?? []).isNotEmpty"
    if old_cond2 in text:
        text = text.replace(old_cond2, new_cond2)
        changed = True
        details.append("PATCHED: CONTROLLER_VENDOR_PHOTOS_NOT_EMPTY_CONDITION")

    old_cond3 = "controller.vendorModel.value.restaurantMenuPhotos != null && controller.vendorModel.value.restaurantMenuPhotos!.isNotEmpty"
    new_cond3 = "(controller.vendorModel.value.restaurantMenuPhotos ?? []).isNotEmpty"
    if old_cond3 in text:
        text = text.replace(old_cond3, new_cond3)
        changed = True
        details.append("PATCHED: SCREEN_MENU_PHOTOS_NOT_EMPTY_CONDITION")

    return text, changed, details

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
        new_text, changed, details = patch_common(text)

        if changed and new_text != original:
            path.write_text(new_text, encoding="utf-8")
            patched_count += 1
            lines.append("CHANGED: True")
            lines.append(f"BACKUP: {b}")
            for d in details:
                lines.append(d)
        else:
            lines.append("CHANGED: False")
            lines.append(f"BACKUP: {b}")
            if not details:
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
    lines.append("STATUS: SERVICE_53D_REMAINING_PHOTOS_NULL_SAFE_PATCH_DONE")
else:
    lines.append("STATUS: SERVICE_53D_NO_PHOTOS_NULL_SAFE_PATCH_APPLIED_MARKER_RISK")

out.write_text("\r\n".join(lines), encoding="utf-8")
print("\n".join(lines[-140:]))