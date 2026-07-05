# SERVICE 43B PATCH RESTAURANT VENDOR_PRODUCTS CREATEDAT

Generated: 2026-07-01T17:36:42.421Z
Mode: FIRESTORE DATA PATCH ONLY.


## Vendor: aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh
FOUND_PUBLISH_TRUE_COUNT: 4
PATCHED | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_646ec79605f08 | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | name=asdfasdf | publish=true | takeawayOption=false | section_id=6285ddbfd9598
PATCHED | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_646ed3e6ab55f | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | name=Combo 5 | publish=true | takeawayOption=false | section_id=6285ddbfd9598
PATCHED | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_YTePbEnm5AxAa8SlGy0d | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | name=Pollo A La Leña | publish=true | takeawayOption=false | section_id=6285ddbfd9598
PATCHED | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_xM1iyTGJqM1WuDmAiPJ1 | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | name=POLLO PIZZA | publish=true | takeawayOption=false | section_id=6285ddbfd9598

## Vendor: aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF
FOUND_PUBLISH_TRUE_COUNT: 1
PATCHED | id=aceh_product_aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF_GhX9nYN5XYRY9LQYceBO | vendorID=aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF | name=Durum | publish=true | takeawayOption=false | section_id=6285ddbfd9598

## Vendor: aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1
FOUND_PUBLISH_TRUE_COUNT: 2
PATCHED | id=aceh_product_aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1_FOrI1vYtiK9BeUYyH9rL | vendorID=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 | name=Pasta  | publish=true | takeawayOption=false | section_id=6285ddbfd9598
PATCHED | id=aceh_product_aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1_WEmcSAN6PKzvHnU87bbj | vendorID=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 | name=Burgers Test | publish=true | takeawayOption=true | section_id=6285ddbfd9598

## Verify after patch
VERIFY_ORDERBY_CREATEDAT_COUNT vendor=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh: 4
VERIFY_DOC | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_646ec79605f08 | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | name=asdfasdf | publish=true | createdAtExists=true
VERIFY_DOC | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_646ed3e6ab55f | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | name=Combo 5 | publish=true | createdAtExists=true
VERIFY_DOC | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_YTePbEnm5AxAa8SlGy0d | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | name=Pollo A La Leña | publish=true | createdAtExists=true
VERIFY_DOC | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_xM1iyTGJqM1WuDmAiPJ1 | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | name=POLLO PIZZA | publish=true | createdAtExists=true
VERIFY_ORDERBY_CREATEDAT_COUNT vendor=aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF: 1
VERIFY_DOC | id=aceh_product_aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF_GhX9nYN5XYRY9LQYceBO | vendorID=aceh_clone_6285ddbfd9598_1ZrcQ4ysrrheSVguUkFF | name=Durum | publish=true | createdAtExists=true
VERIFY_ORDERBY_CREATEDAT_COUNT vendor=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1: 2
VERIFY_DOC | id=aceh_product_aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1_FOrI1vYtiK9BeUYyH9rL | vendorID=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 | name=Pasta  | publish=true | createdAtExists=true
VERIFY_DOC | id=aceh_product_aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1_WEmcSAN6PKzvHnU87bbj | vendorID=aceh_clone_6285ddbfd9598_1vMlKPiniUrzybKkWiS1 | name=Burgers Test | publish=true | createdAtExists=true

## Totals
FOUND_TOTAL: 7
PATCHED_TOTAL: 7
ALREADY_HAD_CREATEDAT_TOTAL: 0
VERIFY_ORDERBY_CREATEDAT_TOTAL: 7

## Final Status
STATUS: SERVICE_43B_RESTAURANT_VENDOR_PRODUCTS_CREATEDAT_PATCH_PASS