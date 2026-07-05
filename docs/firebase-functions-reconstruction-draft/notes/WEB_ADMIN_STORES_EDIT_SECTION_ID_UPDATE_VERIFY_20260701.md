# WEB ADMIN STORES EDIT SECTION_ID UPDATE VERIFY

Generated: 07/01/2026 02:21:48
Mode: READ ONLY. No patch. No Firebase write.

Target file: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php

## Main Vendor Update Block
```text
1687:                     window.scrollTo(0, 0);
1688:                 } else {
1689:                     jQuery("#data-table_processing").show();
1690: 
1691:                     coordinates = new firebase.firestore.GeoPoint(latitude, longitude);
1692:                     await storeImageData().then(async (IMG) => {
1693:                         await storeGalleryImageData().then(async (GalleryIMG) => {
1694:                             await storeMenuImageData().then(async (MenuIMG) => {
1695:                                 geoFirestore.collection('vendors').doc(id).update({
1696: 
1697:                                     'title': vendorname,
1698:                                     'description': description,
1699:                                     'latitude': latitude,
1700:                                     'longitude': longitude,
1701:                                     'location': address,
1702:                                     'photo': (Array.isArray(GalleryIMG) && GalleryIMG.length > 0) ? GalleryIMG[0] : null,
1703:                                     'photos': GalleryIMG,
1704:                                     'categoryID': cuisines,
1705:                                     'phonenumber': phonenumber,
1706:                                     'categoryTitle': categoryTitle,
1707:                                     'coordinates': coordinates,
1708:                                     'filters': filters_new,
1709:                                     'enabledDiveInFuture': enabledDiveInFuture,
1710:                                     'specialDiscountEnable': enabledSpecialOffer,
1711:                                     'restaurantMenuPhotos': MenuIMG,
1712:                                     'restaurantCost': restaurantCost,
1713:                                     'openDineTime': openDineTime,
1714:                                     'closeDineTime': closeDineTime,
1715:                                     'specialDiscount': specialDiscount,
1716:                                     'workingHours': workingHours,
1717:                                     'adminCommission': adminCommission,
1718:                                     'isSelfDelivery': enable_self_delivery,
1719:                                     'section_id': section_id,
1720:                                     'zoneId': zoneId,
1721:                                     'packagingCharge': packagingCharge ? packagingCharge : '0'
1722:                                 }).then(function(result) {
1723:                                     if (story_vedios.length > 0 || story_thumbnail != '') {
1724:                                         if (story_vedios.length > 0 && story_thumbnail == '') {
1725: 
1726:                                             $(".error_top").show();
1727:                                             $(".error_top").html("");
1728:                                             $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
1729:                                             window.scrollTo(0, 0);
1730:                                             jQuery("#data-table_processing").hide();
1731:                                             return false;
1732:                                         } else if (story_thumbnail && story_vedios.length == 0) {
1733: 
1734:                                             $(".error_top").show();
1735:                                             $(".error_top").html("");
1736:                                             $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
1737:                                             window.scrollTo(0, 0);
1738:                                             jQuery("#data-table_processing").hide();
1739:                                             return false;
1740:                                         } else {

MAIN_UPDATE_BLOCK_FOUND: True
MAIN_UPDATE_HAS_section_id: True
MAIN_UPDATE_HAS_zoneId: True
MAIN_UPDATE_HAS_categoryID: True
MAIN_UPDATE_HAS_coordinates: True
MAIN_UPDATE_HAS_enabledDiveInFuture: True
```

## Final Status
STATUS: WEB_ADMIN_STORES_EDIT_SECTION_ID_UPDATE_VERIFY_PASS