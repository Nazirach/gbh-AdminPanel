# WEB ADMIN STORES EDIT MAIN VENDOR UPDATE BLOCK

Generated: 07/01/2026 02:18:21
Mode: READ ONLY. No patch. No Firebase write.

Target file: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php

## Update Block Locations
```text
FOUND_UPDATE_BLOCK_AT_LINE: 1695
FOUND_UPDATE_BLOCK_AT_LINE: 1751
FOUND_UPDATE_BLOCK_AT_LINE: 1769
FOUND_UPDATE_BLOCK_AT_LINE: 2254
FOUND_UPDATE_BLOCK_AT_LINE: 2624
```

## Context Blocks
```text

===== BLOCK AROUND LINE 1695 =====
1660:                     $(".error_top").html("");
1661:                     $(".error_top").append("<p>{{ trans('lang.vendor_longitude_error') }}</p>");
1662:                     window.scrollTo(0, 0);                                        
1663:                     jQuery("#data-table_processing").hide();
1664:                 } else if (longitude < -180 || longitude > 180) {
1665:                     $(".error_top").show();
1666:                     $(".error_top").html("");
1667:                     $(".error_top").append("<p>{{ trans('lang.vendor_longitude_limit_error') }}</p>");
1668:                     window.scrollTo(0, 0);                                        
1669:                     jQuery("#data-table_processing").hide();
1670: 
1671:                 } else if (isInZone == false) {
1672:                     $(".error_top").show();
1673:                     $(".error_top").html("");
1674:                     $(".error_top").append("<p>{{ trans('lang.invalid_location_zone') }}</p>");
1675:                     window.scrollTo(0, 0);
1676:                     jQuery("#data-table_processing").hide();
1677:                 }else if (description == '') {
1678:                     $(".error_top").show();
1679:                     $(".error_top").html("");
1680:                     $(".error_top").append("<p>{{ trans('lang.vendor_description_error') }}</p>");
1681:                     window.scrollTo(0, 0);
1682:                     jQuery("#data-table_processing").hide();
1683:                 } else if (packagingChargeEnable && packagingCharge < 0) {
1684:                     $(".error_top").show();
1685:                     $(".error_top").html("");
1686:                     $(".error_top").append("<p>{{ trans('lang.packagingCharge_error') }}</p>");
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
1719:                                     'zoneId': zoneId,
1720:                                     'packagingCharge': packagingCharge ? packagingCharge : '0'
1721:                                 }).then(function(result) {
1722:                                     if (story_vedios.length > 0 || story_thumbnail != '') {
1723:                                         if (story_vedios.length > 0 && story_thumbnail == '') {
1724: 
1725:                                             $(".error_top").show();
1726:                                             $(".error_top").html("");
1727:                                             $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
1728:                                             window.scrollTo(0, 0);
1729:                                             jQuery("#data-table_processing").hide();
1730:                                             return false;
1731:                                         } else if (story_thumbnail && story_vedios.length == 0) {
1732: 
1733:                                             $(".error_top").show();
1734:                                             $(".error_top").html("");
1735:                                             $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
1736:                                             window.scrollTo(0, 0);
1737:                                             jQuery("#data-table_processing").hide();
1738:                                             return false;
1739:                                         } else {
1740:                                             database.collection('story').doc(id).set({
1741:                                                     'createdAt': new Date(),
1742:                                                     'sectionID': section_id,
1743:                                                     'vendorID': id,
1744:                                                     'videoThumbnail': IMG.storyThumbnailImage,
1745:                                                     'videoUrl': story_vedios,
1746:                                                 })
1747:                                                 .then(function(result) {
1748:                                                     jQuery("#data-table_processing").hide();
1749:                                                     if (deliveryChargeFlag) {
1750: 
1751:                                                         geoFirestore.collection('vendors').doc(id).update({
1752:                                                             'deliveryCharge': deliveryCharge
1753:                                                         }).then(function(result) {
1754: 
1755:                                                             window.location.href = '{{ route('stores') }}';
1756:                                                         });
1757:                                                     } else {
1758: 
1759:                                                         window.location.href = '{{ route('stores') }}';
1760:                                                     }
1761: 
1762:                                                 });
1763:                                         }
1764: 
1765:                                     } else {
1766:                                         jQuery("#data-table_processing").hide();
1767:                                         if (deliveryChargeFlag) {
1768: 
1769:                                             geoFirestore.collection('vendors').doc(id).update({
1770:                                                 'deliveryCharge': deliveryCharge
1771:                                             }).then(function(result) {
1772: 
1773:                                                 window.location.href = '{{ route('stores') }}';
1774:                                             });
1775:                                         } else {
1776: 
1777:                                             window.location.href = '{{ route('stores') }}';
1778:                                         }
1779:                                     }
1780: 
1781: 
1782: 
1783:                                 });
1784:                             }).catch(err => {
1785:                                 jQuery("#data-table_processing").hide();
1786:                                 $(".error_top").show();
1787:                                 $(".error_top").html("");
1788:                                 $(".error_top").append("<p>" + err + "</p>");
1789:                                 window.scrollTo(0, 0);
1790:                             });

===== BLOCK AROUND LINE 1751 =====
1716:                                     'workingHours': workingHours,
1717:                                     'adminCommission': adminCommission,
1718:                                     'isSelfDelivery': enable_self_delivery,
1719:                                     'zoneId': zoneId,
1720:                                     'packagingCharge': packagingCharge ? packagingCharge : '0'
1721:                                 }).then(function(result) {
1722:                                     if (story_vedios.length > 0 || story_thumbnail != '') {
1723:                                         if (story_vedios.length > 0 && story_thumbnail == '') {
1724: 
1725:                                             $(".error_top").show();
1726:                                             $(".error_top").html("");
1727:                                             $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
1728:                                             window.scrollTo(0, 0);
1729:                                             jQuery("#data-table_processing").hide();
1730:                                             return false;
1731:                                         } else if (story_thumbnail && story_vedios.length == 0) {
1732: 
1733:                                             $(".error_top").show();
1734:                                             $(".error_top").html("");
1735:                                             $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
1736:                                             window.scrollTo(0, 0);
1737:                                             jQuery("#data-table_processing").hide();
1738:                                             return false;
1739:                                         } else {
1740:                                             database.collection('story').doc(id).set({
1741:                                                     'createdAt': new Date(),
1742:                                                     'sectionID': section_id,
1743:                                                     'vendorID': id,
1744:                                                     'videoThumbnail': IMG.storyThumbnailImage,
1745:                                                     'videoUrl': story_vedios,
1746:                                                 })
1747:                                                 .then(function(result) {
1748:                                                     jQuery("#data-table_processing").hide();
1749:                                                     if (deliveryChargeFlag) {
1750: 
1751:                                                         geoFirestore.collection('vendors').doc(id).update({
1752:                                                             'deliveryCharge': deliveryCharge
1753:                                                         }).then(function(result) {
1754: 
1755:                                                             window.location.href = '{{ route('stores') }}';
1756:                                                         });
1757:                                                     } else {
1758: 
1759:                                                         window.location.href = '{{ route('stores') }}';
1760:                                                     }
1761: 
1762:                                                 });
1763:                                         }
1764: 
1765:                                     } else {
1766:                                         jQuery("#data-table_processing").hide();
1767:                                         if (deliveryChargeFlag) {
1768: 
1769:                                             geoFirestore.collection('vendors').doc(id).update({
1770:                                                 'deliveryCharge': deliveryCharge
1771:                                             }).then(function(result) {
1772: 
1773:                                                 window.location.href = '{{ route('stores') }}';
1774:                                             });
1775:                                         } else {
1776: 
1777:                                             window.location.href = '{{ route('stores') }}';
1778:                                         }
1779:                                     }
1780: 
1781: 
1782: 
1783:                                 });
1784:                             }).catch(err => {
1785:                                 jQuery("#data-table_processing").hide();
1786:                                 $(".error_top").show();
1787:                                 $(".error_top").html("");
1788:                                 $(".error_top").append("<p>" + err + "</p>");
1789:                                 window.scrollTo(0, 0);
1790:                             });
1791:                         }).catch(err => {
1792:                             jQuery("#data-table_processing").hide();
1793:                             $(".error_top").show();
1794:                             $(".error_top").html("");
1795:                             $(".error_top").append("<p>" + err + "</p>");
1796:                             window.scrollTo(0, 0);
1797:                         });
1798:                     }).catch(err => {
1799:                         jQuery("#data-table_processing").hide();
1800:                         $(".error_top").show();
1801:                         $(".error_top").html("");
1802:                         $(".error_top").append("<p>" + err + "</p>");
1803:                         window.scrollTo(0, 0);
1804:                     });
1805:                 }
1806:             })
1807:         })
1808: 
1809:         function replaceText(i, j, type) {
1810: 
1811:             $('.' + type + '_' + i + '_' + j).text("Save");
1812: 
1813:         }
1814: 
1815:         function replaceTextEdit(i, j, type) {
1816: 
1817:             $('.' + type + '_' + j + '_' + i).text("Edit");
1818: 
1819:         }
1820: 
1821:         $(document).on("click", ".remove-btn", function() {
1822:             var id = $(this).attr('data-id');
1823:             var photo_remove = $(this).attr('data-img');
1824:             $("#photo_" + id).remove();
1825:             var status = $(this).attr('data-status');
1826:             if (status == "old") {
1827:                 galleryImageToDelete.push(firebase.storage().refFromURL(photo_remove));
1828:             }
1829:             index = vendor_photos.indexOf(photo_remove);
1830:             if (index > -1) {
1831:                 vendor_photos.splice(index, 1);
1832:             }
1833:             index = new_added_vendor_photos.indexOf(photo_remove);
1834:             if (index > -1) {
1835:                 new_added_vendor_photos.splice(index, 1); // 2nd parameter means remove one item only
1836:                 new_added_vendor_photos_filename.splice(index, 1);
1837:             }
1838: 
1839:         });
1840: 
1841:         $(document).on("click", ".remove-menu-btn", function() {
1842:             var id = $(this).attr('data-id');
1843:             var photo_remove = $(this).attr('data-img');
1844:             var status = $(this).attr('data-status');
1845:             if (status == "old") {
1846:                 menuImageToDelete.push(firebase.storage().refFromURL(photo_remove));

===== BLOCK AROUND LINE 1769 =====
1734:                                             $(".error_top").html("");
1735:                                             $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
1736:                                             window.scrollTo(0, 0);
1737:                                             jQuery("#data-table_processing").hide();
1738:                                             return false;
1739:                                         } else {
1740:                                             database.collection('story').doc(id).set({
1741:                                                     'createdAt': new Date(),
1742:                                                     'sectionID': section_id,
1743:                                                     'vendorID': id,
1744:                                                     'videoThumbnail': IMG.storyThumbnailImage,
1745:                                                     'videoUrl': story_vedios,
1746:                                                 })
1747:                                                 .then(function(result) {
1748:                                                     jQuery("#data-table_processing").hide();
1749:                                                     if (deliveryChargeFlag) {
1750: 
1751:                                                         geoFirestore.collection('vendors').doc(id).update({
1752:                                                             'deliveryCharge': deliveryCharge
1753:                                                         }).then(function(result) {
1754: 
1755:                                                             window.location.href = '{{ route('stores') }}';
1756:                                                         });
1757:                                                     } else {
1758: 
1759:                                                         window.location.href = '{{ route('stores') }}';
1760:                                                     }
1761: 
1762:                                                 });
1763:                                         }
1764: 
1765:                                     } else {
1766:                                         jQuery("#data-table_processing").hide();
1767:                                         if (deliveryChargeFlag) {
1768: 
1769:                                             geoFirestore.collection('vendors').doc(id).update({
1770:                                                 'deliveryCharge': deliveryCharge
1771:                                             }).then(function(result) {
1772: 
1773:                                                 window.location.href = '{{ route('stores') }}';
1774:                                             });
1775:                                         } else {
1776: 
1777:                                             window.location.href = '{{ route('stores') }}';
1778:                                         }
1779:                                     }
1780: 
1781: 
1782: 
1783:                                 });
1784:                             }).catch(err => {
1785:                                 jQuery("#data-table_processing").hide();
1786:                                 $(".error_top").show();
1787:                                 $(".error_top").html("");
1788:                                 $(".error_top").append("<p>" + err + "</p>");
1789:                                 window.scrollTo(0, 0);
1790:                             });
1791:                         }).catch(err => {
1792:                             jQuery("#data-table_processing").hide();
1793:                             $(".error_top").show();
1794:                             $(".error_top").html("");
1795:                             $(".error_top").append("<p>" + err + "</p>");
1796:                             window.scrollTo(0, 0);
1797:                         });
1798:                     }).catch(err => {
1799:                         jQuery("#data-table_processing").hide();
1800:                         $(".error_top").show();
1801:                         $(".error_top").html("");
1802:                         $(".error_top").append("<p>" + err + "</p>");
1803:                         window.scrollTo(0, 0);
1804:                     });
1805:                 }
1806:             })
1807:         })
1808: 
1809:         function replaceText(i, j, type) {
1810: 
1811:             $('.' + type + '_' + i + '_' + j).text("Save");
1812: 
1813:         }
1814: 
1815:         function replaceTextEdit(i, j, type) {
1816: 
1817:             $('.' + type + '_' + j + '_' + i).text("Edit");
1818: 
1819:         }
1820: 
1821:         $(document).on("click", ".remove-btn", function() {
1822:             var id = $(this).attr('data-id');
1823:             var photo_remove = $(this).attr('data-img');
1824:             $("#photo_" + id).remove();
1825:             var status = $(this).attr('data-status');
1826:             if (status == "old") {
1827:                 galleryImageToDelete.push(firebase.storage().refFromURL(photo_remove));
1828:             }
1829:             index = vendor_photos.indexOf(photo_remove);
1830:             if (index > -1) {
1831:                 vendor_photos.splice(index, 1);
1832:             }
1833:             index = new_added_vendor_photos.indexOf(photo_remove);
1834:             if (index > -1) {
1835:                 new_added_vendor_photos.splice(index, 1); // 2nd parameter means remove one item only
1836:                 new_added_vendor_photos_filename.splice(index, 1);
1837:             }
1838: 
1839:         });
1840: 
1841:         $(document).on("click", ".remove-menu-btn", function() {
1842:             var id = $(this).attr('data-id');
1843:             var photo_remove = $(this).attr('data-img');
1844:             var status = $(this).attr('data-status');
1845:             if (status == "old") {
1846:                 menuImageToDelete.push(firebase.storage().refFromURL(photo_remove));
1847:             }
1848:             $("#photo_menu_" + id).remove();
1849:             index = vendor_menu_photos.indexOf(photo_remove);
1850:             if (index > -1) {
1851:                 vendor_menu_photos.splice(index, 1); // 2nd parameter means remove one item only
1852:             }
1853:             index = new_added_vendor_menu.indexOf(photo_remove);
1854:             if (index > -1) {
1855:                 new_added_vendor_menu.splice(index, 1); // 2nd parameter means remove one item only
1856:                 new_added_vendor_menu_filename.splice(index, 1);
1857:             }
1858: 
1859:         });
1860: 
1861:         function handleStoryFileSelect(evt) {
1862: 
1863:             var rests = ["0CwIcsoYhSxYba9DlwuE", "NjYpnm5IhQi0GeeVKXiX", "NjYpnm5IhQi0GeeVKXiX", "XrDAfl3rOWZS11lEIPkI", "a4rYm0HQHskPDGXAlWEt", "wkSUMpzIxl6KmDIKuDVQ"];
1864:             if (jQuery.inArray(id, rests) != -1) {

===== BLOCK AROUND LINE 2254 =====
2219:             };
2220:             var monday = {
2221:                 'day': 'Monday',
2222:                 'timeslot': timeslotMonday
2223:             };
2224:             var tuesday = {
2225:                 'day': 'Tuesday',
2226:                 'timeslot': timeslotTuesday
2227:             };
2228:             var wednesday = {
2229:                 'day': 'Wednesday',
2230:                 'timeslot': timeslotWednesday
2231:             };
2232:             var thursday = {
2233:                 'day': 'Thursday',
2234:                 'timeslot': timeslotThursday
2235:             };
2236:             var friday = {
2237:                 'day': 'Friday',
2238:                 'timeslot': timeslotFriday
2239:             };
2240:             var Saturday = {
2241:                 'day': 'Saturday',
2242:                 'timeslot': timeslotSaturday
2243:             };
2244: 
2245:             specialDiscount.push(monday);
2246:             specialDiscount.push(tuesday);
2247:             specialDiscount.push(wednesday);
2248:             specialDiscount.push(thursday);
2249:             specialDiscount.push(friday);
2250:             specialDiscount.push(Saturday);
2251:             specialDiscount.push(sunday);
2252: 
2253: 
2254:             database.collection('vendors').doc(id).update({
2255:                 'specialDiscount': specialDiscount
2256:             }).then(function(result) {
2257: 
2258:             });
2259:         }
2260: 
2261:         function addMoreFunctionButton(day1, day2, count) {
2262:             var discount = $("#discount" + day2 + count).val();
2263:             var discount_type = $('#discount_type' + day2 + count).val();
2264:             var type = $('#type' + day2 + count).val();
2265:             var closeTime = $("#closeTime" + day2 + count).val();
2266:             var openTime = $("#openTime" + day2 + count).val();
2267:             if (openTime == '') {
2268:                 $(".error_top").show();
2269:                 $(".error_top").html("");
2270:                 $(".error_top").append("<p>Please enter special offer start time</p>");
2271:                 window.scrollTo(0, 0);
2272:             } else if (closeTime == '') {
2273:                 $(".error_top").show();
2274:                 $(".error_top").html("");
2275:                 $(".error_top").append("<p>Please enter special offer close time</p>");
2276:                 window.scrollTo(0, 0);
2277:             } else if (openTime > closeTime) {
2278:                 $(".error_top").show();
2279:                 $(".error_top").html("");
2280:                 $(".error_top").append("<p>Close time can not be less than Open time</p>");
2281:                 window.scrollTo(0, 0);
2282:             } else if (discount == "") {
2283:                 $(".error_top").show();
2284:                 $(".error_top").html("");
2285:                 $(".error_top").append("<p>Please Enter discount</p>");
2286:                 window.scrollTo(0, 0);
2287:             } else if (discount > 100 || discount == 0) {
2288:                 $(".error_top").show();
2289:                 $(".error_top").html("");
2290:                 $(".error_top").append("<p>Please Enter valid discount</p>");
2291:                 window.scrollTo(0, 0);
2292:             } else {
2293: 
2294:                 if (typeof timeslotSunday === 'undefined') timeslotSunday = [];
2295:                 if (typeof timeslotMonday === 'undefined') timeslotMonday = [];
2296:                 if (typeof timeslotTuesday === 'undefined') timeslotTuesday = [];
2297:                 if (typeof timeslotWednesday === 'undefined') timeslotWednesday = [];
2298:                 if (typeof timeslotThursday === 'undefined') timeslotThursday = [];
2299:                 if (typeof timeslotFriday === 'undefined') timeslotFriday = [];
2300:                 if (typeof timeslotSaturday === 'undefined') timeslotSaturday = [];
2301: 
2302:                 var isDuplicate = false;
2303:                 var existingTimeslots = [];
2304: 
2305:                 if (day1 == 'sunday') {
2306:                     existingTimeslots = timeslotSunday;
2307:                 } else if (day1 == 'monday') {
2308:                     existingTimeslots = timeslotMonday;
2309:                 } else if (day1 == 'tuesday') {
2310:                     existingTimeslots = timeslotTuesday;
2311:                 } else if (day1 == 'wednesday') {
2312:                     existingTimeslots = timeslotWednesday;
2313:                 } else if (day1 == 'thursday') {
2314:                     existingTimeslots = timeslotThursday;
2315:                 } else if (day1 == 'friday') {
2316:                     existingTimeslots = timeslotFriday;
2317:                 } else if (day1 == 'Saturday') {
2318:                     existingTimeslots = timeslotSaturday;
2319:                 }
2320: 
2321:                 function timeToDate(time) {
2322:                     var [hours, minutes] = time.split(':');
2323:                     return new Date(0, 0, 0, hours, minutes); // Using "0" date and month for comparison
2324:                 }
2325: 
2326:                 var newOpenTime = timeToDate(openTime);
2327:                 var newCloseTime = timeToDate(closeTime);
2328: 
2329:                 existingTimeslots.forEach(function(slot) {
2330:                     var existingStart = timeToDate(slot.from);
2331:                     var existingEnd = timeToDate(slot.to);
2332: 
2333:                     // Check if the new slot is inside the existing slot
2334:                     if ((newOpenTime < existingEnd && newCloseTime > existingStart)) {
2335:                         if (slot.discount_type !== type) {
2336:                             isDuplicate = false; // Allow the new slot with a different type
2337:                         } else {
2338:                             isDuplicate = true; // Same time range and type -> duplicate
2339:                         }
2340:                     }
2341:                 });
2342: 
2343:                 if (isDuplicate) {
2344:                     $(".error_top").show();
2345:                     $(".error_top").html("");
2346:                     $(".error_top").append("<p>This time slot for " + type + " already exists. Please select a different time slot.</p>");
2347:                     window.scrollTo(0, 0);
2348:                 } else {
2349: 

===== BLOCK AROUND LINE 2624 =====
2589:             };
2590:             var monday = {
2591:                 'day': 'Monday',
2592:                 'timeslot': timeslotworkMonday
2593:             };
2594:             var tuesday = {
2595:                 'day': 'Tuesday',
2596:                 'timeslot': timeslotworkTuesday
2597:             };
2598:             var wednesday = {
2599:                 'day': 'Wednesday',
2600:                 'timeslot': timeslotworkWednesday
2601:             };
2602:             var thursday = {
2603:                 'day': 'Thursday',
2604:                 'timeslot': timeslotworkThursday
2605:             };
2606:             var friday = {
2607:                 'day': 'Friday',
2608:                 'timeslot': timeslotworkFriday
2609:             };
2610:             var Saturday = {
2611:                 'day': 'Saturday',
2612:                 'timeslot': timeslotworkSaturday
2613:             };
2614: 
2615:             workingHours.push(monday);
2616:             workingHours.push(tuesday);
2617:             workingHours.push(wednesday);
2618:             workingHours.push(thursday);
2619:             workingHours.push(friday);
2620:             workingHours.push(Saturday);
2621:             workingHours.push(sunday);
2622: 
2623: 
2624:             database.collection('vendors').doc(id).update({
2625:                 'workingHours': workingHours
2626:             }).then(function(result) {
2627: 
2628:             });
2629:         }
2630: 
2631:         function updatehoursFunctionButton(day, rowCount, dayCount, buttonElement) {
2632: 
2633:             const buttonText = buttonElement.textContent.trim();
2634: 
2635: 
2636:             var to = $("#to" + day + rowCount + dayCount + "").val();
2637:             var from = $("#from" + day + rowCount + dayCount + "").val();
2638: 
2639: 
2640:             if (buttonText == "Edit" || buttonText == "") {
2641:                 $("#to" + day + rowCount + dayCount).removeAttr('disabled');
2642:                 $("#from" + day + rowCount + dayCount).removeAttr('disabled');
2643:                 buttonElement.textContent = "Save";
2644: 
2645: 
2646:             } else {
2647:                 $("#to" + day + rowCount + dayCount).attr('disabled', "true");
2648:                 $("#from" + day + rowCount + dayCount).attr('disabled', "true");
2649:                 buttonElement.textContent = "Edit";
2650: 
2651:             }
2652: 
2653:             if (to == '' && from == '') {
2654:                 $(".error_top").show();
2655:                 $(".error_top").html("");
2656:                 $(".error_top").append("<p>Please Enter valid time </p>");
2657:                 window.scrollTo(0, 0);
2658: 
2659:             } else if (from > to) {
2660:                 $(".error_top").show();
2661:                 $(".error_top").html("");
2662:                 $(".error_top").append("<p>To time can not be less than From time</p>");
2663:                 window.scrollTo(0, 0);
2664: 
2665:             } else {
2666: 
2667:                 var timeslotworkVar = {
2668:                     'from': from,
2669:                     'to': to
2670:                 };
2671:                 if (day == 'Sunday') {
2672:                     timeslotworkSunday[rowCount] = timeslotworkVar;
2673:                 } else if (day == 'Monday') {
2674:                     timeslotworkMonday[rowCount] = timeslotworkVar;
2675:                 } else if (day == 'Tuesday') {
2676:                     timeslotworkTuesday[rowCount] = timeslotworkVar;
2677:                 } else if (day == 'Wednesday') {
2678:                     timeslotworkWednesday[rowCount] = timeslotworkVar;
2679:                 } else if (day == 'Thursday') {
2680:                     timeslotworkThursday[rowCount] = timeslotworkVar;
2681:                 } else if (day == 'Friday') {
2682:                     timeslotworkFriday[rowCount] = timeslotworkVar;
2683:                 } else if (day == 'Saturday') {
2684:                     timeslotworkSaturday[rowCount] = timeslotworkVar;
2685:                 }
2686:             }
2687: 
2688:         }
2689: 
2690:         function chkAlphabets(event, msg) {
2691:             if (!(event.which >= 97 && event.which <= 122) && !(event.which >= 65 && event.which <= 90)) {
2692:                 document.getElementById(msg).innerHTML = "Accept only Alphabets";
2693:                 return false;
2694:             } else {
2695:                 document.getElementById(msg).innerHTML = "";
2696:                 return true;
2697:             }
2698:         }
2699: 
2700:         function chkAlphabets2(event, msg) {
2701:             if (!(event.which >= 48 && event.which <= 57)) {
2702:                 document.getElementById(msg).innerHTML = "Accept only Number";
2703:                 return false;
2704:             } else {
2705:                 document.getElementById(msg).innerHTML = "";
2706:                 return true;
2707:             }
2708:         }
2709: 
2710:         function chkAlphabets3(event, msg) {
2711:             if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
2712:                 document.getElementById(msg).innerHTML = "Accept only Number and Dot(.)";
2713:                 return false;
2714:             } else {
2715:                 document.getElementById(msg).innerHTML = "";
2716:                 return true;
2717:             }
2718:         }
2719:         async function storeImageData() {
```

## Field Presence Counters Whole File
```text
HAS_section_id: True
HAS_sectionId: False
HAS_zoneId: True
HAS_categoryID: True
HAS_enabledDiveInFuture: True
HAS_coordinates: True
HAS_latitude: True
HAS_longitude: True
HAS_photo: True
HAS_title: True
```

## Final Status
STATUS: WEB_ADMIN_STORES_EDIT_MAIN_VENDOR_UPDATE_BLOCK_CREATED