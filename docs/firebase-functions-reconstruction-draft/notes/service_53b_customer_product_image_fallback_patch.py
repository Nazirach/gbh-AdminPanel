from pathlib import Path
from datetime import datetime
import shutil
import re

repo = Path(r"C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation")
customer_git = repo / r"apps\customer_v6_7"
runtime_customer = Path(r"C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer")
out = Path(r"C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\SERVICE_53B_CUSTOMER_PRODUCT_IMAGE_FALLBACK_PATCH_20260702.md")

lines = []
lines.append("# SERVICE 53B CUSTOMER PRODUCT IMAGE FALLBACK PATCH")
lines.append("")
lines.append(f"Generated: {datetime.now()}")
lines.append("Mode: PATCH.")
lines.append("")
lines.append("Goal: Customer APK must show human-safe placeholder when product photo/photos is missing.")
lines.append("")

roots = []
if customer_git.exists():
    roots.append(("customer_git", customer_git))
if runtime_customer.exists():
    roots.append(("runtime_customer", runtime_customer))

def backup(path: Path):
    b = path.with_suffix(path.suffix + ".service53b.bak")
    shutil.copy2(path, b)
    return b

def find_candidate_files(root: Path):
    lib = root / "lib"
    if not lib.exists():
        return []
    files = list(lib.rglob("*.dart"))
    candidates = []
    keywords = [
        "CachedNetworkImage",
        "NetworkImage",
        "Image.network",
        "productModel",
        "ProductModel",
        ".photo!",
        ".photos!",
        "photo!",
        "photos!",
        "restaurant_details_screen"
    ]
    for f in files:
        try:
            text = f.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        score = sum(1 for k in keywords if k in text)
        if score >= 3 or "restaurant_details_screen" in str(f).lower():
            candidates.append((f, score))
    return sorted(candidates, key=lambda x: x[1], reverse=True)

def patch_text(text: str):
    changed = False
    details = []

    # Add helper once near imports/end of imports.
    helper = r'''
// SERVICE53B_PRODUCT_IMAGE_FALLBACK_HELPERS
String service53bSafeProductImage(dynamic product) {
  try {
    final dynamic photos = product.photos;
    if (photos is List && photos.isNotEmpty) {
      final first = photos.first;
      if (first != null && first.toString().trim().isNotEmpty) {
        return first.toString();
      }
    }
  } catch (_) {}

  try {
    final dynamic photo = product.photo;
    if (photo is List && photo.isNotEmpty) {
      final first = photo.first;
      if (first != null && first.toString().trim().isNotEmpty) {
        return first.toString();
      }
    }
    if (photo != null && photo.toString().trim().isNotEmpty) {
      return photo.toString();
    }
  } catch (_) {}

  return "";
}

Widget service53bProductImageFallback({double? width, double? height, BoxFit fit = BoxFit.cover}) {
  return Container(
    width: width,
    height: height,
    alignment: Alignment.center,
    color: Colors.black12,
    child: const Icon(Icons.image_not_supported_outlined, size: 28),
  );
}
// END_SERVICE53B_PRODUCT_IMAGE_FALLBACK_HELPERS

'''
    if "SERVICE53B_PRODUCT_IMAGE_FALLBACK_HELPERS" not in text:
        # Insert after last import.
        imports = list(re.finditer(r"^import .+;\s*$", text, flags=re.M))
        if imports:
            pos = imports[-1].end()
            text = text[:pos] + "\n" + helper + text[pos:]
            changed = True
            details.append("PATCHED_ADD_SERVICE53B_HELPERS")
        else:
            details.append("MARKER_NOT_FOUND_IMPORTS_FOR_HELPER")
    else:
        details.append("SKIP_HELPERS_ALREADY_EXIST")

    # Common hard null patterns.
    replacements = [
        (".photos!.first", ".photos != null && .photos!.isNotEmpty ? .photos!.first : \"\""),
    ]

    # Targeted safer replacements using product variable names.
    patterns = [
        (r"(\w+)\.photos!\.first", r"service53bSafeProductImage(\1)"),
        (r"(\w+)\.photo!", r"service53bSafeProductImage(\1)"),
    ]

    for pat, rep in patterns:
        new_text, count = re.subn(pat, rep, text)
        if count > 0:
            text = new_text
            changed = True
            details.append(f"PATCHED_REGEX_{pat}_COUNT_{count}")

    # Wrap Image.network(service53bSafeProductImage(x)) risk with errorBuilder if simple form.
    # If this does not match, later audit will identify remaining location.
    return text, changed, details

results = []

for label, root in roots:
    lines.append("")
    lines.append(f"## ROOT: {label}")
    lines.append(str(root))
    lines.append("TEXT_START")

    candidates = find_candidate_files(root)
    lines.append(f"CANDIDATE_COUNT: {len(candidates)}")

    patched_files = 0
    for f, score in candidates[:20]:
        rel = str(f.relative_to(root))
        text = f.read_text(encoding="utf-8", errors="ignore")
        if "photo!" not in text and "photos!" not in text and ".photos!.first" not in text:
            lines.append(f"SCAN_ONLY_FILE: {rel} | score={score} | no direct photo!/photos! marker")
            continue

        b = backup(f)
        new_text, changed, details = patch_text(text)

        if changed and new_text != text:
            f.write_text(new_text, encoding="utf-8")
            patched_files += 1
            lines.append(f"PATCHED_FILE: {rel} | score={score}")
            lines.append(f"BACKUP: {b}")
            for d in details:
                lines.append(d)
        else:
            lines.append(f"NO_CHANGE_FILE: {rel} | score={score}")
            for d in details:
                lines.append(d)

    lines.append(f"PATCHED_FILES_IN_ROOT: {patched_files}")
    lines.append("TEXT_END")

lines.append("")
lines.append("## Verification")
lines.append("TEXT_START")
for label, root in roots:
    lib = root / "lib"
    if lib.exists():
        helper_count = 0
        null_photo_count = 0
        null_photos_count = 0
        for f in lib.rglob("*.dart"):
            text = f.read_text(encoding="utf-8", errors="ignore")
            if "SERVICE53B_PRODUCT_IMAGE_FALLBACK_HELPERS" in text:
                helper_count += 1
            null_photo_count += text.count("photo!")
            null_photos_count += text.count("photos!")
        lines.append(f"{label}_HELPER_FILE_COUNT: {helper_count}")
        lines.append(f"{label}_REMAINING_photo_bang_COUNT: {null_photo_count}")
        lines.append(f"{label}_REMAINING_photos_bang_COUNT: {null_photos_count}")
lines.append("TEXT_END")
lines.append("")

if any("PATCHED_FILE:" in l for l in lines):
    lines.append("STATUS: SERVICE_53B_CUSTOMER_PRODUCT_IMAGE_FALLBACK_PATCH_DONE")
else:
    lines.append("STATUS: SERVICE_53B_NO_DIRECT_PHOTO_BANG_PATCH_APPLIED_NEEDS_TARGETED_STACK")

out.write_text("\r\n".join(lines), encoding="utf-8")
print("\n".join(lines[-120:]))