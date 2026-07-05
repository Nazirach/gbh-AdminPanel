# WEB ADMIN STORES EDIT SECTION_ID UPDATE CONTRACT

Generated: 07/01/2026 02:19:28
Mode: READ ONLY. No patch. No Firebase write.

Target file: C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php

## Section Related Matches
```text
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:811:    </div>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:812:@endsection
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:813:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:814:@section('scripts')
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:815:    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.26.0/moment.min.js"></script>
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:816:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:817:    <script type="text/javascript">
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:818:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:819:        var section_id = getCookie('section_id') || null;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:820:        var id = "<?php echo $id; ?>";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:821:        var database = firebase.firestore();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:822:        var ref = database.collection('vendors').where("id", "==", id);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:823:        var ref_sections = database.collection('sections').where('isActive', '==', true).orderBy('order');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:824:        var photo = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:825:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:826:        var vendorOwnerId = "";
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:827:        var vendorOwnerOnline = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:828:        var photocount = 0;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:829:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:830:        var ownerOldImageFile = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:831:        var ownerId = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:832:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:833:        var vendor_photos = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:834:        var new_added_vendor_photos_filename = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:835:        var new_added_vendor_photos = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:836:        var galleryImageToDelete = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:837:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:887:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:888:        refCurrency.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:889:            var currencyData = snapshots.docs[0].data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:890:            currentCurrency = currencyData.symbol;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:891:            currencyAtRight = currencyData.symbolAtRight;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:892:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:893:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:894:        var packagingChargeEnable = false;
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:895:        var sectionRef = database.collection('sections').doc(section_id);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:896:        sectionRef.get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:897:            var sectionData = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:898:            if (sectionData.packagingChargeEnable) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:899:                packagingChargeEnable = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:900:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:901:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:902:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:903:        placeholder.get().then(async function(snapshotsimage) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:904:            var placeholderImageData = snapshotsimage.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:905:            placeholderImage = placeholderImageData.image;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:906:        })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:907:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:908:        database.collection('settings').doc("story").get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:909:            var story_data = snapshots.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:910:            if (story_data.isEnabled) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:911:                story_isEnabled = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:912:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:913:            storevideoDuration = story_data.videoDuration;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:940:                    $("#delivery_charges_per_km").val(deliveryChargeSettings.delivery_charges_per_km);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:941:                    $("#minimum_delivery_charges").val(deliveryChargeSettings.minimum_delivery_charges);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:942:                    $("#minimum_delivery_charges_within_km").val(deliveryChargeSettings.minimum_delivery_charges_within_km);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:943:                } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:944:                    deliveryChargeFlag = false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:945:                    $("#delivery_charges_per_km").val(deliveryChargeSettings.delivery_charges_per_km);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:946:                    $("#minimum_delivery_charges").val(deliveryChargeSettings.minimum_delivery_charges);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:947:                    $("#minimum_delivery_charges_within_km").val(deliveryChargeSettings.minimum_delivery_charges_within_km);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:948:                    $("#delivery_charges_per_km").prop('disabled', true);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:949:                    $("#minimum_delivery_charges").prop('disabled', true);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:950:                    $("#minimum_delivery_charges_within_km").prop('disabled', true);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:951:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:952:            } catch (error) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:953:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:954:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:955:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:956:        database.collection('zone').where('publish', '==', true).orderBy('name', 'asc').get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:957:            snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:958:                var data = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:959:                var area = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:960:                data.area.forEach((location) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:961:                    area.push({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:962:                        'latitude': location.latitude,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:963:                        'longitude': location.longitude
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:964:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:965:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:966:                $('#zone').append($("<option></option>")
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:967:                    .attr("value", data.id)
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:968:                    .attr("data-area", JSON.stringify(area))
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:996:                $(".vendor_address").val(vendor.location);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:997:                if (vendor.adminCommission) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:998:                    $("#commission_type").val(vendor.adminCommission.type);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:999:                    $(".commission_fix").val(vendor.adminCommission.commission);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1000:                }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1001:                $(".vendor_latitude").val(vendor.latitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1002:                $(".vendor_longitude").val(vendor.longitude);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1003:                $(".vendor_description").val(vendor.description);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1004:                if (vendor.section_id != undefined) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1005:                    $("#section_id").val(vendor.section_id);
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1006:                    var selected_section = vendor.section_id;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1007:                    sections_list.forEach((section) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1008:                        if (section.id == selected_section) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1009:                            if (section.dine_in_active == true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1010:                                $("#is_dine_in_feature").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1011:                                $("#services_feature").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1012:                                dine_in_active = true;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1013:                            }else{
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1014:                                $("#services_feature").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1015:                            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1016:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1017:                        if (section.id == selected_section && section.serviceTypeFlag == "ecommerce-service") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1018:                            $(".delivery_charges_div").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1019:                            $(".ecommerce_div").addClass('d-none');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1020:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1021:                        if (section.id == selected_section && section.serviceTypeFlag == "delivery-service" && story_isEnabled == true) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1022:                            $("#story_upload_div").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1023:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1024:                        if (section.id == selected_section && section.serviceTypeFlag == "delivery-service" && isSelfDelivery) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1317:                var selected_category = [];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1318:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1319:                if (vendor.hasOwnProperty('categoryID') && vendor.categoryID != null && vendor.categoryID !== '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1320:                    let categoryIDs = Array.isArray(vendor.categoryID) ? vendor.categoryID : [vendor.categoryID];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1321:                    $.each(categoryIDs, function(index, catId) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1322:                        selected_category.push(catId);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1323:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1324:                }
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1325:                await database.collection('vendor_categories').where('publish', '==', true).where('section_id', '==', vendor.section_id).get().then(async function(snapshots) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1326:                    if ($("#vendor_cuisines").data('chosen')) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1327:                        $('#vendor_cuisines').chosen('destroy');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1328:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1329:                    snapshots.docs.forEach((listval) => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1330:                        var data = listval.data();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1331:                        var selected = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1332:                        if ($.inArray(data.id, selected_category) !== -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1333:                            var selected = 'selected="selected"';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1334:                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1335:                        var option = '<option value="' + data.id + '" ' + selected + '>' + data.title + '</option>';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1336:                        $('#vendor_cuisines').append(option);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1337:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1338:                    })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1339:                    $("#vendor_cuisines").show().chosen({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1340:                        "placeholder_text": "{{ trans('lang.select_cuisines') }}"
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1341:                    });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1342:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1343:                if (vendor.hasOwnProperty('phonenumber')) {
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
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1719:                                    'zoneId': zoneId,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1720:                                    'packagingCharge': packagingCharge ? packagingCharge : '0'
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1721:                                }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1722:                                    if (story_vedios.length > 0 || story_thumbnail != '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1723:                                        if (story_vedios.length > 0 && story_thumbnail == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1724:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1725:                                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1726:                                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1727:                                            $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1728:                                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1729:                                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1730:                                            return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1731:                                        } else if (story_thumbnail && story_vedios.length == 0) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1732:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1733:                                            $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1734:                                            $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1735:                                            $(".error_top").append("<p>{{ trans('lang.story_error') }}</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1736:                                            window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1737:                                            jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1738:                                            return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1739:                                        } else {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1740:                                            database.collection('story').doc(id).set({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1741:                                                    'createdAt': new Date(),
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1742:                                                    'sectionID': section_id,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1743:                                                    'vendorID': id,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1744:                                                    'videoThumbnail': IMG.storyThumbnailImage,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1745:                                                    'videoUrl': story_vedios,
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1746:                                                })
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1747:                                                .then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1748:                                                    jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1749:                                                    if (deliveryChargeFlag) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1750:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1751:                                                        geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1752:                                                            'deliveryCharge': deliveryCharge
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1753:                                                        }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1754:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1755:                                                            window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1756:                                                        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1757:                                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1758:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1759:                                                        window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1760:                                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1761:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1762:                                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1763:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1764:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1765:                                    } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1766:                                        jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1767:                                        if (deliveryChargeFlag) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1768:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1769:                                            geoFirestore.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1770:                                                'deliveryCharge': deliveryCharge
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1771:                                            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1772:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1773:                                                window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1774:                                            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1775:                                        } else {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1776:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1777:                                            window.location.href = '{{ route('stores') }}';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1778:                                        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1779:                                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1780:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1781:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1782:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1783:                                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1784:                            }).catch(err => {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1785:                                jQuery("#data-table_processing").hide();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1786:                                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1787:                                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1997:            story_thumbnail = '';
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1998:            deleteStoryfromCollection();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:1999:        });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2000:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2001:        function deleteStoryfromCollection() {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2002:            if (story_vedios.length == 0 && story_thumbnail == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2003:                database.collection('story').where('vendorID', '==', id).get().then(async function(snapshot) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2004:                    if (snapshot.docs.length > 0) {
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2005:                        database.collection('story').doc(id).delete();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2006:                    }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2007:                });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2008:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2009:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2010:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2011:        function handleStoryThumbnailFileSelect(evt) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2012:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2013:            var rests = ["0CwIcsoYhSxYba9DlwuE", "NjYpnm5IhQi0GeeVKXiX", "NjYpnm5IhQi0GeeVKXiX", "XrDAfl3rOWZS11lEIPkI", "a4rYm0HQHskPDGXAlWEt", "wkSUMpzIxl6KmDIKuDVQ"];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2014:            if (jQuery.inArray(id, rests) != -1) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2015:                alert(doNotUpdateAlert);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2016:                return false;
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2017:            }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2018:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2019:            var f = evt.target.files[0];
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2020:            var reader = new FileReader();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2021:            var fileInput =
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2022:                document.getElementById('file');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2023:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2246:            specialDiscount.push(tuesday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2247:            specialDiscount.push(wednesday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2248:            specialDiscount.push(thursday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2249:            specialDiscount.push(friday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2250:            specialDiscount.push(Saturday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2251:            specialDiscount.push(sunday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2252:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2253:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2254:            database.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2255:                'specialDiscount': specialDiscount
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2256:            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2257:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2258:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2259:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2260:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2261:        function addMoreFunctionButton(day1, day2, count) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2262:            var discount = $("#discount" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2263:            var discount_type = $('#discount_type' + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2264:            var type = $('#type' + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2265:            var closeTime = $("#closeTime" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2266:            var openTime = $("#openTime" + day2 + count).val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2267:            if (openTime == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2268:                $(".error_top").show();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2269:                $(".error_top").html("");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2270:                $(".error_top").append("<p>Please enter special offer start time</p>");
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2271:                window.scrollTo(0, 0);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2272:            } else if (closeTime == '') {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2616:            workingHours.push(tuesday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2617:            workingHours.push(wednesday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2618:            workingHours.push(thursday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2619:            workingHours.push(friday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2620:            workingHours.push(Saturday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2621:            workingHours.push(sunday);
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2622:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2623:
> C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2624:            database.collection('vendors').doc(id).update({
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2625:                'workingHours': workingHours
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2626:            }).then(function(result) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2627:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2628:            });
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2629:        }
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2630:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2631:        function updatehoursFunctionButton(day, rowCount, dayCount, buttonElement) {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2632:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2633:            const buttonText = buttonElement.textContent.trim();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2634:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2635:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2636:            var to = $("#to" + day + rowCount + dayCount + "").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2637:            var from = $("#from" + day + rowCount + dayCount + "").val();
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2638:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2639:
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2640:            if (buttonText == "Edit" || buttonText == "") {
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2641:                $("#to" + day + rowCount + dayCount).removeAttr('disabled');
  C:\deploy\adminpanel\Admin Panel\resources\views\stores\edit.blade.php:2642:                $("#from" + day + rowCount + dayCount).removeAttr('disabled');
```

## Main Vendor Update Block Field Check
```text
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

MAIN_UPDATE_BLOCK_FOUND: True
MAIN_UPDATE_HAS_section_id: False
MAIN_UPDATE_HAS_sectionID: False
MAIN_UPDATE_HAS_zoneId: True
MAIN_UPDATE_HAS_categoryID: True
```

## Whole File Counters
```text
WHOLE_FILE_HAS_section_id: True
WHOLE_FILE_HAS_VENDOR_UPDATE_section_id_LITERAL: False
WHOLE_FILE_HAS_zoneId_UPDATE_LITERAL: True
WHOLE_FILE_HAS_SECTION_SELECT_DISABLED: True / inspect matches above
```

## Decision
```text
If edit page cannot change section: no source patch required; section_id is preserved by update().
If edit page can change section but main vendor update lacks section_id: patch required to include 'section_id': section_id.
```

## Final Status
STATUS: WEB_ADMIN_STORES_EDIT_SECTION_ID_UPDATE_CONTRACT_CREATED