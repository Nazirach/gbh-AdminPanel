# WEB ADMIN SECTION ACTIVE ISACTIVE SYNC PATCH FIX

Generated: 07/01/2026 01:56:31
Mode: local patch only.

Goal: keep Firestore section fields active and isActive synchronized.


## File
```text
File: C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php
Backup: C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php.bak_STEP43D_FIX_20260701_015631
Changed: True
```

## File
```text
File: C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php
Backup: C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php.bak_STEP43D_FIX_20260701_015631
Changed: True
```

## File
```text
File: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
Backup: C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php.bak_STEP43D_FIX_20260701_015631
Changed: True
```

## Verification
```text

### C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:430:                    'color': color,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:431:                    'sectionImage': IMG,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:432:                    'isActive': active,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:433:                    'active': active,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:434:                    'dine_in_active': section_dine_in_active,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:435:                    'is_product_details': is_product_details,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:436:                    'rideType': rideType,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\create.blade.php:437:                    'serviceType': service_type,

### C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:508:                        'color': color,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:509:                        'sectionImage': IMG,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:510:                        'isActive': active,
> C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:511:                        'active': active,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:512:                        'dine_in_active': section_dine_in_active,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:513:                        'is_product_details': is_product_details,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:514:                        'rideType': rideType,
  C:\deploy\adminpanel\Admin Panel\resources\views\section\edit.blade.php:515:                        'serviceType': service_type,

### C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:161:                var id = $(this).attr('data-id');
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:162:                promises.push(
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:163:                    database.collection('sections').doc(id).update({ order: order })
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:164:                );
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:165:                order++;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:166:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:167:            Promise.all(promises).then(() => {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:220:            var id = this.id;
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:221:            if (ischeck) {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:222:                database.collection('sections').doc(id).update({'isActive': true, 'active': true}).then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:223:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:224:            } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:225:                database.collection('sections').doc(id).update({'isActive': false, 'active': false}).then(function (result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:226:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:227:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:228:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\section\index.blade.php:229:
```

## Final Status
STATUS: WEB_ADMIN_SECTION_ACTIVE_ISACTIVE_SYNC_PATCHED_FIX