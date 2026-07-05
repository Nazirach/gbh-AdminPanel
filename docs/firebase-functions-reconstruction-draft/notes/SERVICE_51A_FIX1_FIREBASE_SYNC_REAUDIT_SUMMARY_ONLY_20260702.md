# SERVICE 51A-FIX1 FIREBASE SYNC REAUDIT SUMMARY ONLY

Generated: 2026-07-02T06:04:26.185Z
Mode: READ ONLY.

Admin normalizers applied:
- 48E vendor create/edit
- 49B product create/edit
- 50B category create/edit

## Summary Counts
TEXT_START
VENDORS_TOTAL: 292
VENDORS_RISK_TOTAL: 283
PRODUCTS_TOTAL: 695
PRODUCTS_PUBLISH_TRUE_TOTAL: 668
PRODUCTS_RISK_TOTAL: 408
CATEGORIES_TOTAL: 56
CATEGORIES_PUBLISH_TRUE_TOTAL: 42
CATEGORIES_RISK_TOTAL: 54
TEXT_END

## Risk Type Counts
TEXT_START
VENDOR_RISK_TYPES: {"updatedAt_missing":263,"zoneId_missing":212,"publish_not_true":206,"isActive_not_true":220,"section_id_missing":13,"latitude_not_number":12,"longitude_not_number":12,"coordinates_missing":13}
PRODUCT_RISK_TYPES: {"publish_true_createdAt_missing":408,"publish_true_updatedAt_missing":393}
CATEGORY_RISK_TYPES: {"publish_not_true":14,"publish_true_createdAt_missing":40,"publish_true_updatedAt_missing":40,"section_id_missing":7}
TEXT_END

## Limited Examples
TEXT_START
RISK_VENDOR_EXAMPLE | id=05vPfo6g0mVhZZVlz6mB | title=eFashion | section_id=6285dd3281531 | risks=updatedAt_missing
RISK_VENDOR_EXAMPLE | id=07RFZCxogqVjkbVTt9HE | title=Food Grocery store | section_id=6319dc53314ee | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=0GU3JWeAcNatUktBt94j | title=Unais  | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=0hB8mx1z1DeNR9CAzXfh | title=LA Parrilla | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=0mkKJ5MWOLiGIGrMnV4c | title=Rumah Mode Syar"i | section_id=6285dd3281531 | risks=updatedAt_missing
RISK_VENDOR_EXAMPLE | id=0pEI9Y7pV5lLoW7fmiBS | title=ben's store | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=0urLW8W7TVh1huI55egm | title=modelo Teste | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=10KPhdPgfOUpkHtzT3oS | title=Simo Market | section_id=6319dc53314ee | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=1BlB62hfbg7mX0MTIUeo | title=D-Mart | section_id=6319dc53314ee | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=1ZrcQ4ysrrheSVguUkFF | title=Koobilo Eats | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=1vMlKPiniUrzybKkWiS1 | title=ahmed store | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=21MCCA6V0HwY57Q6JZkK | title=Jay Restaurant | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=22IVF6moR0lkuE076H2i | title=bawarchi | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=2eo51PsBz8HvNlki6yFL | title=Flower Basket store | section_id=6285dd7b50f32 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=2gklzqCbIFOPJm3EwEvt | title=soulking | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=2jnVAu4xy28EdPy9E3z8 | title=testflower | section_id=6285dd7b50f32 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=2q54LGrRoKv43pS3rj85 | title=test123 | section_id=6319dc53314ee | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=3HoJiFJNRQsTyBchMdxH | title=Demo | section_id=6285dd3281531 | risks=updatedAt_missing
RISK_VENDOR_EXAMPLE | id=4OND69A1zWWLiuzQVSXU | title=testing | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_VENDOR_EXAMPLE | id=4PGUc3sU4uH1DcfDto0I | title=teststore | section_id=6285ddbfd9598 | risks=zoneId_missing|updatedAt_missing|publish_not_true|isActive_not_true
RISK_PRODUCT_EXAMPLE | id=0BmzLzaFPW7NDSWJqAFo | name=Sugar | vendorID=tmeZ8QSImUZrFdnzHuWW | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=0ElydaSumH3J1DrM0uXR | name=Coffee Body Scrub | vendorID=O7mMEnwPLz1UCQ4PFrRy | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=0r2NbgqbIicPintj00NB | name=Pizza | vendorID=Ax8TpS20tFe2YHiSA9r1 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=1Lp01DrsCCMd4eMLWItA | name=redbucket | vendorID=jh6HrTtddBEuMxRXpCEA | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=27liouMiOOi8b8koMt18 | name=PULLA | vendorID=FeSc5HZvVSxMDrOEl6tH | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=2iaQ11YtC3DbAs1dHFcC | name=Ai | vendorID=5y18JEaVzjJS3V94RBvX | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=2vJN86Cb20sQHmwdwD3s | name=Orange | vendorID=neWKjutfE6MrAUZuZfk0 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=3jFPwSSeJd7yVBJAN0lb | name=Sandwich | vendorID=Ax8TpS20tFe2YHiSA9r1 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=45mQMRd3whkDDL5ueZSP | name=Balkan 176 Vodka | vendorID=aHwy8rtqBELtcQW6J8ik | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=47VwCqkCx343GR75Or0v | name=Double Cheese Pizza | vendorID=f2ETd3IjUMgpkb7l5gRl | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=4EweJFqHtD5AqlATLbwt | name=Face mask | vendorID=WQXBlMMDZ1roF7jxB02u | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=4QDVmkt1JsEgMM8m0LwW | name=ال | vendorID=O7mMEnwPLz1UCQ4PFrRy | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=4kZpNSd9BmvVyMHd43RQ | name=Hamburger | vendorID=fhPY2pEMHLg0aXjzR0pR | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=53i1yX0x8KZ8FqIa8MAm | name=Regular Cheese Sandwich | vendorID=9TDTZJ8wxXAyLdwUNiua | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=56u25aI2JUzgBmLwPIeh | name=Chicken 🍗 Masala | vendorID=w7venRoQGoxxTYVFMGOp | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=626fd5a4b2402 | name=Hair band accessories  | vendorID=PJyyUSY22QInqbkVpZtD | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=6270c6dc5da16 | name=Lemon | vendorID=ONAUbW54GX77ljBTpawV | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=6270c79e51261 | name=Potato chips | vendorID=cekNGnRkgUpGvenDjM09 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=62d15b9d2300b | name=Pineapple Mojito | vendorID=tAGGjKSyEdurakb0h7KU | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_PRODUCT_EXAMPLE | id=62d79e30290ca | name=Bacardi 151 | vendorID=zhaCB4t2kPurGjkaEDpK | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=628c79e14b7e4 | title=Watches | section_id=6285dd3281531 | risks=publish_not_true
RISK_CATEGORY_EXAMPLE | id=62cd5926d5186 | title=Burger | section_id=6285ddbfd9598 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62dc0673d235b | title=Beer | section_id=null | risks=section_id_missing|publish_not_true
RISK_CATEGORY_EXAMPLE | id=62e3735c7df56 | title=Sushi | section_id=6285ddbfd9598 | risks=publish_not_true
RISK_CATEGORY_EXAMPLE | id=62ecedf41a7fe | title=Ramen | section_id=6285ddbfd9598 | risks=publish_not_true
RISK_CATEGORY_EXAMPLE | id=62eceea3c1cd9 | title=Bar Food | section_id=6285ddbfd9598 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecef0780589 | title=Yemen | section_id=6285ddbfd9598 | risks=publish_not_true
RISK_CATEGORY_EXAMPLE | id=62ecef57887cb | title=New Mexican | section_id=6285ddbfd9598 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecf0f1c144b | title=Sandwich | section_id=6285ddbfd9598 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecf18f51a76 | title=Mediterranean | section_id=6285ddbfd9598 | risks=publish_not_true
RISK_CATEGORY_EXAMPLE | id=62ecf35007e34 | title=Hair care | section_id=6285dcf511651 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecf81cedfd9 | title=Sparkling | section_id=6285dcf511651 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecf81d6e41b | title=Wine | section_id=null | risks=section_id_missing|publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecf81dcd06f | title=Cocktail | section_id=null | risks=section_id_missing|publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecf81e23675 | title=Liquor | section_id=null | risks=section_id_missing|publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecf8cb6aeae | title=Vodka | section_id=null | risks=section_id_missing|publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecf8cba3ad3 | title=Extra | section_id=null | risks=section_id_missing|publish_true_createdAt_missing|publish_true_updatedAt_missing
RISK_CATEGORY_EXAMPLE | id=62ecfa2591016 | title=Hair extensions | section_id=6285dcf511651 | risks=publish_not_true
RISK_CATEGORY_EXAMPLE | id=62ecfa25d2ced | title=Wigs | section_id=6285dcf511651 | risks=publish_not_true
RISK_CATEGORY_EXAMPLE | id=62ecfa2615a59 | title=Skin care | section_id=6285dcf511651 | risks=publish_true_createdAt_missing|publish_true_updatedAt_missing
TEXT_END

## Interpretation
TEXT_START
Admin Web input path is now patched for new vendor/product/category writes.
Remaining risks are legacy Firebase data or data created outside the patched Admin Web path.
Do not globally publish inactive legacy vendors without business decision.
Safe next step: normalize only records that are already publish=true/isActive=true or Aceh clone/demo target records.
TEXT_END

## Final Status
STATUS: SERVICE_51A_FIX1_FIREBASE_LEGACY_DATA_STILL_NEEDS_TARGETED_NORMALIZATION