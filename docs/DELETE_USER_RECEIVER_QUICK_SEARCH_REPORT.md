# DELETE_USER_RECEIVER_QUICK_SEARCH_REPORT

## 1. Tujuan
Mencari receiver endpoint /api/delete-user secara cepat di project lokal, dengan exclude vendor/node_modules/build/dist/.git.

## 2. Mode
Read-only. Tidak patch, tidak install, tidak migration, tidak commit/push, tidak ubah env.

## 3. Files scanned
772

## 4. CSV output
- docs/DELETE_USER_RECEIVER_QUICK_SEARCH_HITS.csv
- docs/DELETE_USER_RECEIVER_QUICK_SEARCH_IMPORTANT_HITS.csv

Total hits: 30
Important hits: 16

## 5. Receiver route candidates
Tidak ada receiver route yang terkonfirmasi di scan lokal ini.

## 6. Caller candidates
- C:\deploy\adminpanel\Admin Panel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";
- C:\deploy\adminpanel\Admin Panel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";
- C:\deploy\adminpanel\Admin Panel\resources\views\stores\index.blade.php:670 => var siteurl = settingData.storeUrl + "/api/delete-user";
- C:\deploy\adminpanel\Admin Panel\resources\views\users\index.blade.php:495 => var siteurl = settingData.websiteUrl + "/api/delete-user";
- C:\deploy\adminpanel\Admin Panel\resources\views\vendors\index.blade.php:758 => var siteurl=settingData.storeUrl+"/api/delete-user";
- C:\deploy\adminpanel\resources\views\employee\index.blade.php:644 => var siteurl = settingData.storeUrl + "/api/delete-user";
- C:\deploy\adminpanel\resources\views\providers\index.blade.php:596 => var siteurl=settingData.providerUrl+"/api/delete-user";
- C:\deploy\adminpanel\resources\views\stores\index.blade.php:699 => var siteurl = settingData.storeUrl + "/api/delete-user";
- C:\deploy\adminpanel\resources\views\users\index.blade.php:481 => var siteurl = settingData.websiteUrl + "/api/delete-user";
- C:\deploy\adminpanel\resources\views\vendors\index.blade.php:774 => var siteurl=settingData.storeUrl+"/api/delete-user";


## 7. Kesimpulan awal
Jika receiver route candidates kosong, maka di project lokal ini belum ditemukan definisi route penerima /api/delete-user. Yang ditemukan kemungkinan hanya caller.

