# WEB ADMIN STORES EDIT SECTION_ID UPDATE PATCH

Generated: 07/01/2026 02:20:46
Mode: LOCAL PATCH ONLY. No Firebase write.

Target file: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php


## Patch Result
```text
Backup: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php.bak_STEP44E_20260701_022047
Changed: True
```

## Verification Snippet
```text
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1687:                    window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1688:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1689:                    jQuery("#data-table_processing").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1690:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1691:                    coordinates = new firebase.firestore.GeoPoint(latitude, longitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1692:                    await storeImageData().then(async (IMG) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1693:                        await storeGalleryImageData().then(async (GalleryIMG) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1694:                            await storeMenuImageData().then(async (MenuIMG) => {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1695:                                geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1696:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1697:                                    'title': vendorname,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1698:                                    'description': description,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1699:                                    'latitude': latitude,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1700:                                    'longitude': longitude,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1701:                                    'location': address,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1702:                                    'photo': (Array.isArray(GalleryIMG) && GalleryIMG.length > 0) ? GalleryIMG[0] : null,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1703:                                    'photos': GalleryIMG,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1704:                                    'categoryID': cuisines,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1705:                                    'phonenumber': phonenumber,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1706:                                    'categoryTitle': categoryTitle,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1707:                                    'coordinates': coordinates,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1708:                                    'filters': filters_new,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1709:                                    'enabledDiveInFuture': enabledDiveInFuture,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1710:                                    'specialDiscountEnable': enabledSpecialOffer,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1711:                                    'restaurantMenuPhotos': MenuIMG,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1712:                                    'restaurantCost': restaurantCost,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1713:                                    'openDineTime': openDineTime,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1714:                                    'closeDineTime': closeDineTime,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1715:                                    'specialDiscount': specialDiscount,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1716:                                    'workingHours': workingHours,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1717:                                    'adminCommission': adminCommission,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1718:                                    'isSelfDelivery': enable_self_delivery,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1719:                                    'section_id': section_id,
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1720:                                    'zoneId': zoneId,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1721:                                    'packagingCharge': packagingCharge ? packagingCharge : '0'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1722:                                }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1723:                                    if (story_vedios.length > 0 || story_thumbnail != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1724:                                        if (story_vedios.length > 0 && story_thumbnail == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1725:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1726:                                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1727:                                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1728:                                            $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1729:                                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1730:                                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1731:                                            return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1732:                                        } else if (story_thumbnail && story_vedios.length == 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1733:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1734:                                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1735:                                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1736:                                            $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1737:                                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1738:                                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1744:                                                    'vendorID': id,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1745:                                                    'videoThumbnail': IMG.storyThumbnailImage,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1746:                                                    'videoUrl': story_vedios,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1747:                                                })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1748:                                                .then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1749:                                                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1750:                                                    if (deliveryChargeFlag) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1751:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1752:                                                        geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1753:                                                            'deliveryCharge': deliveryCharge
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1754:                                                        }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1755:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1756:                                                            window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1757:                                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1758:                                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1759:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1760:                                                        window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1761:                                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1762:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1763:                                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1764:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1765:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1766:                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1767:                                        jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1768:                                        if (deliveryChargeFlag) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1769:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1770:                                            geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1771:                                                'deliveryCharge': deliveryCharge
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1772:                                            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1773:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1774:                                                window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1775:                                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1776:                                        } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1777:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1778:                                            window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1779:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1780:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1781:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1782:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1783:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1784:                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1785:                            }).catch(err => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1786:                                jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1787:                                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1788:                                $(".error_top").html("");
```

## Counters
```text
HAS_VENDOR_UPDATE_SECTION_ID_LITERAL: True
HAS_VENDOR_UPDATE_ZONEID_LITERAL: True
```

## Final Status
STATUS: WEB_ADMIN_STORES_EDIT_SECTION_ID_UPDATE_PATCHED