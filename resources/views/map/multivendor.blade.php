@extends('layouts.app')

@section('content')

<div class="page-wrapper">

    <div class="row page-titles">

        <div class="col-md-5 align-self-center">
            <h3 class="text-themecolor">{{trans('lang.live_tracking_multivendor')}}</h3>
        </div>

        <div class="col-md-7 align-self-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="{{ route('dashboard') }}">{{trans('lang.dashboard')}}</a>
                </li>
                <li class="breadcrumb-item active">
                    {{trans('lang.god_eye')}}
                </li>
            </ol>
        </div>
    </div>

    <div class="container-fluid">

        <!-- start row -->
        <div class="card mb-3">

            <div class="card-body">

                <div class="row">

                    <div class="col-lg-4">

                        <div class="table-responsive ride-list">

                            <div class="form-group" id="search-box">
                                <input type="text" name="search" id="search" class="form-control" style="width:90%" placeholder="{{trans('lang.search_driver')}}">
                            </div>

                            <div class="live-tracking-list">

                            </div>

                        </div>

                    </div>

                    <div class="col-lg-8">

                        <div id="map" style="height:450px"></div>

                        <div id="legend">
                            <h3>{{trans('lang.legend')}}</h3>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>

    <style>
        #append_list12 tr {
            cursor: pointer;
        }

        #legend {
            font-family: Arial, sans-serif;
            background: #fff;
            padding: 10px;
            margin: 11px;
            border: 1px solid #000;
        }

        #legend h3 {
            margin-top: 0;
        }

        #legend img {
            vertical-align: middle;
        }
    </style>

    @endsection

    @section('scripts')

    <script type="text/javascript">

        var database = firebase.firestore();

        var map;
        var marker;
        var markers = [];
        var vendorMarkers = [];

        function toGoogleLatLngLiteral(lat, lng) {
            lat = parseFloat(lat);
            lng = parseFloat(lng);
            if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
                return null;
            }
            return { lat: lat, lng: lng };
        }

        function safeMapPanTo(target) {
            if (!map || typeof map.panTo !== 'function' || !target) {
                console.warn('Map panTo skipped because map is not ready.');
                return;
            }
            map.panTo(target);
        }


        function createSafeInfoWindow(options) {
            var InfoWindowCtor = window.google && google.maps ? google.maps['InfoWindow'] : null;
            if (typeof InfoWindowCtor === 'function') {
                try {
                    return new InfoWindowCtor(options || {});
                } catch (error) {
                    console.warn('InfoWindow unavailable; popup disabled.', error);
                }
            } else {
                console.warn('InfoWindow unavailable; popup disabled.');
            }

            return {
                setContent: function () {},
                open: function () {},
                close: function () {}
            };
        }
        var map_data = [];
        var base_url = '{!! asset('/images/') !!}';
        var mapType = 'ONLINE';
        $(document).ready(async function () {
            // InitializeGodsEyeMap();
            await database.collection('settings').doc('DriverNearBy').get().then(async function (snapshots) {
                var data = snapshots.data();
                if (data && data.selectedMapType && data.selectedMapType == "osm") {
                    mapType = "OFFLINE"
                    InitializeGodsEyeMap();
                }
            });
            var orders = [];
            var orders_drivers = [];
            await database.collection('vendor_orders').where('status', '==', 'In Transit').get().then(async function (snapshots) {
                if (snapshots.docs.length > 0) {
                    snapshots.docs.forEach((doc) => {
                        var data = doc.data();
                        data.flag = 'in_transit';
                        orders.push(data);
                        if(data.hasOwnProperty('driver')){
                            orders_drivers.push(data.driver.id);
                        }
                    });
                }
                // fetchDrivers(orders_drivers, orders);
            });

            var drivers = [];
            database.collection('users').where('role', '==', 'driver').where('serviceType', '==', 'delivery-service').where('location', '!=', null).get().then(async function (snapshots) {
                if (snapshots.docs.length > 0) {
                    snapshots.docs.forEach((doc) => {
                        var data = doc.data();
                        data.flag = 'available';
                        if(isNaN(data.location.latitude)!=true && isNaN(data.location.longitude)!=true && data.location.latitude!=null && data.location.latitude!=null){
                            if ($.inArray(data.id, orders_drivers) === -1) {
                                drivers.push(data);
                            }
                        }
                    });
                }

                let mapdata = $.merge(orders, drivers)
                loadData(mapdata);
                renderVendorMarkers();
            });

            setTimeout(function () {
                $(".sidebartoggler").click();
            }, 500);

            $(document).on("click", ".ride-list .track-from", function () {
                var lat = $(this).data('lat');
                var lng = $(this).data('lng');
                var index = $(this).data('index');
                if (mapType == "OFFLINE" ){
                    map.setView([lat, lng], map.getZoom());
                    if(markers[index]){
                       markers[index].openPopup();
                    } else {
                       console.log("Marker at index " + index + " is undefined.");
                    }
                } else{
                    var panTarget = toGoogleLatLngLiteral(lat, lng);
                    safeMapPanTo(panTarget);
                    google.maps.event.trigger(markers[index], 'click');
                }
            });

            $("#search").keyup(function() {
                var filter = $(this).val(),
                count = 0;
                $('.live-tracking-list div').each(function() {
                    if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                        $(this).hide();
                    } else {
                        $(this).show();
                        count++;
                    }
                });
            });
        });

        function InitializeGodsEyeMap() {

            var default_lat = getCookie('default_latitude');
            var default_lng = getCookie('default_longitude');
            var legend = document.getElementById('legend');
            if (mapType == "OFFLINE" ){
              
                if (map && map.remove) {
                    map.remove(); // properly remove the map instance and listeners
                }
                if (L.DomUtil.get('map') != null) {
                    L.DomUtil.get('map')._leaflet_id = null; // reset internal Leaflet id
                }

                map = L.map('map').setView([default_lat, default_lng], 10);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 19,
                    attribution: '© OpenStreetMap'
                }).addTo(map);
            } else{
                var myLatlng = toGoogleLatLngLiteral(default_lat, default_lng) || { lat: 0, lng: 0 };
                var infowindow = createSafeInfoWindow();
                var mapOptions = {
                    zoom: 10,
                    center: myLatlng,
                    streetViewControl: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                map = new google.maps.Map(document.getElementById("map"), mapOptions);
            }

            var fliter_icons = {
                available: {
                    name: 'Available',
                    icon: base_url + '/available.png'
                },
                ontrip: {
                    name: 'In Transit',
                    icon: base_url + '/ontrip.png'
                }
            };
            
            legend.innerHTML = "<h3>Legend</h3>";
            for (var key in fliter_icons) {
                var type = fliter_icons[key];
                var name = type.name;
                var icon = type.icon;

                var div = document.createElement('div');
                div.innerHTML = '<img src="' + icon + '" style="width:14px; margin-right:5px;"> ' + name;
                legend.appendChild(div);
            }

            if (mapType == "OFFLINE" ){
                var lmaplegend  = L.control({ position: 'bottomleft' });
                lmaplegend.onAdd = function (map) {
                    var div = L.DomUtil.create('div', 'legend');
                    div.innerHTML = "<h4>{{trans('lang.map_legend')}}/h4>";
                    div.appendChild(legend);
                    return div;
                };
                lmaplegend.addTo(map);
            } else{
                map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(legend);
            }
        }

        async function loadData(data) {

            for (let i = 0; i < data.length; i++) {

                val = data[i];

                var html = '';
                var driverId='';
                var userId='';
                if (val.flag == "in_transit") {
                     if(val.hasOwnProperty('driver')){
                         driverId = val.driver.id;
                     }

                } else {
                     driverId = val.id;
                }

                let driver = await getDriverDetail(driverId);
                if(driver!='' && driver != undefined){
                   
                    if (driver && driver.location && 
                        typeof driver.location.latitude !== 'undefined' && 
                        typeof driver.location.longitude !== 'undefined') {

                        if (mapType == "OFFLINE") {
                            html += '<div class="live-tracking-box track-from" data-index="' + i + '" data-lat="' + driver.location.latitude + '" data-lng="' + driver.location.longitude + '">';
                        }

                    } else {
                        continue; 
                    }

                    if (val.flag == "in_transit") {
                        if(val.hasOwnProperty('author')){
                            userId=val.author.id;
                        }

                        let user = await getUserDetail(val.author.id);

                        if (user != undefined && user!='') {
                            if (mapType != "OFFLINE" ){
                                html += '<div class="live-tracking-box track-from" data-index="' + i + '" data-lat="' + driver.location.latitude + '" data-lng="' + driver.location.longitude + '">';
                            }
                            html += '<div class="live-tracking-inner">';
                            html += '<span class="listicon"></span>';
                            html += '<h3 class="drier-name">{{trans("lang.driver_name")}} : ' + driver.firstName + ' ' + driver.lastName + '</h3>';
                            if (user.firstName || user.lastName) {
                                html += '<h4 class="user-name">{{trans("lang.user_name")}} : ' + user.firstName + ' ' + user.lastName + '</h4>';
                            }
                            if (val.author.shippingAddress && val.vendor.location) {
                                html += '<div class="location-ride">';
                                html += '<div class="from-ride"><span>' + val.vendor.location + '</span></div>';
                                destination = '';
                                if (val.address.hasOwnProperty('address')) {
                                    destination = val.address.address;
                                    if (val.address.hasOwnProperty('locality')) {
                                        destination = destination + val.address.locality;
                                    }
                                }
                             
                                html += '<div class="to-ride"><span>' + destination + '</span></div>';
                                html += '</div>';
                            }
                            html += '<span class="badge badge-danger">In Tranist</span>';

                            var orderEditUrl = "{{ route('orders.edit', ['id' => ':id']) }}";
                                orderEditUrl = orderEditUrl.replace(':id', val.id.trim());
                                
                            html += '&nbsp;&nbsp;<a href="' + orderEditUrl + '" class="badge badge-info" target="_blank">{{trans("lang.order_id")}} : ' + val.id.substring(0, 7) + '</a>';
                            html += '</div>';
                            html += '</div>';

                        }

                    } else {
                        if (driver.firstName || driver.lastName) {
                            if (mapType != "OFFLINE" ){
                               html += '<div class="live-tracking-box track-from" data-lat="' + driver.location.latitude + '" data-lng="' + driver.location.longitude + '">';
                           }
                        html += '<div class="live-tracking-inner">';
                        html += '<span class="listicon"></span>';
                        html += '<h3 class="drier-name">{{trans("lang.driver_name")}} : ' + driver.firstName + ' ' + driver.lastName + '</h3>';
                        html += '<span class="badge badge-success">Available<span>';
                        html += '</div>';
                        html += '</div>';
                        }
                    }
                }

                $(".live-tracking-list").append(html);

                if(driver!=undefined && driver!=''){

                    if (typeof driver.location.latitude != 'undefined' && typeof driver.location.longitude != 'undefined') {

                        let iconImg = '';
                        let position = '';

                        if (val.flag == "available") {
                            iconImg = base_url + '/car_available.png';
                        } else {
                            iconImg = base_url + '/car_on_trip.png';
                        }
                        //let iconImg = val.flag === 'available' ? '/car_available.png' : '/car_on_trip.png';
                        var content = `
                        <div class="p-2">
                            <h6>{{trans('lang.driver_name')}} : ${driver.firstName + " " + driver.lastName ?? '-'} </h6>
                            <h6>{{trans('lang.phone')}} : ${driver.phoneNumber ?? '-'} </h6>                           
                        </div>`;
                        if (mapType == "OFFLINE" ){
                            var customIcon = L.icon({
                                iconUrl: iconImg,
                                iconSize: [25, 25],
                            });
                            let marker = L.marker([driver.location.latitude, driver.location.longitude], { icon: customIcon }).addTo(map);

                            marker.bindPopup(content);
                            markers[i] = marker;
                            marker.on('click', function () {
                                marker.openPopup();
                            });
                            setInterval(function () {
                                locationUpdate(marker, driver);
                            }, 10000);
                        } else{
                            let marker = new google.maps.Marker({
                                position: toGoogleLatLngLiteral(driver.location.latitude, driver.location.longitude),
                                icon: {
                                    url: iconImg,
                                    scaledSize: new google.maps.Size(25, 25)
                                },
                                map: map
                            });
                            let infowindow = createSafeInfoWindow({
                                content: content
                            });
                            marker.addListener('click', function () {
                                infowindow.open(map, marker);
                            });
                            markers[i] = marker;
                            marker.setMap(map);
                            setInterval(function () {
                                locationUpdate(marker, driver);
                            }, 10000);
                        }
                    }
                }
            }

            async function locationUpdate(marker, driver) {
                database.collection("users").doc(driver.id).get().then((doc) => {
                    let data = doc.data();
                    if(data && data.location && data.location.latitude && data.location.longitude ){
                        if (mapType == "OFFLINE" ){
                            marker.setLatLng([data.location.latitude, data.location.longitude]);
                        } else{
                            var updatedMarkerPosition = toGoogleLatLngLiteral(data.location.latitude, data.location.longitude);
                            if (updatedMarkerPosition && marker && typeof marker.setPosition === 'function') {
                                marker.setPosition(updatedMarkerPosition);
                            }
                        }
                    }
                });
            }

        }

        function getNestedValue(obj, path) {
            return path.reduce(function(current, key) {
                return current && typeof current === 'object' ? current[key] : undefined;
            }, obj);
        }

        function normalizeVendorCoordinates(vendor) {
            var candidates = [
                { lat: getNestedValue(vendor, ['location', 'latitude']), lng: getNestedValue(vendor, ['location', 'longitude']) },
                { lat: vendor ? vendor.latitude : undefined, lng: vendor ? vendor.longitude : undefined },
                { lat: getNestedValue(vendor, ['coordinates', 'latitude']), lng: getNestedValue(vendor, ['coordinates', 'longitude']) },
                { lat: vendor ? vendor.lat : undefined, lng: vendor ? vendor.lng : undefined }
            ];

            for (var i = 0; i < candidates.length; i++) {
                var lat = parseFloat(candidates[i].lat);
                var lng = parseFloat(candidates[i].lng);

                if (Number.isFinite(lat) && Number.isFinite(lng)) {
                    return { lat: lat, lng: lng };
                }
            }

            return null;
        }

        function getVendorMarkerContent(vendor) {
            var vendorName = vendor && (vendor.title || vendor.name || vendor.storeName) ? (vendor.title || vendor.name || vendor.storeName) : '{{ trans('lang.vendor') }}';
            return '<div class="p-2"><h6>{{ trans('lang.vendor') }} : ' + vendorName + '</h6></div>';
        }

        async function renderVendorMarkers() {
            if (!map) {
                console.warn('Vendor markers skipped because map is not ready.');
                return;
            }

            var vendorMarkersRendered = 0;
            var vendorMarkersSkipped = 0;

            try {
                const vendorSnapshot = await database.collection('vendors').get();
                if (!vendorSnapshot || vendorSnapshot.empty) {
                    console.info('Vendor markers rendered:', vendorMarkersRendered, 'Vendor markers skipped:', vendorMarkersSkipped);
                    return;
                }

                vendorSnapshot.forEach(function(doc) {
                    var vendor = doc.data() || {};
                    var coordinates = normalizeVendorCoordinates(vendor);

                    if (!coordinates) {
                        vendorMarkersSkipped++;
                        return;
                    }

                    var popupContent = getVendorMarkerContent(vendor);

                    if (mapType == "OFFLINE") {
                        var vendorIcon = L.divIcon({
                            className: 'vendor-map-marker',
                            html: '<div style="width:16px;height:16px;border-radius:50%;background:#29b6f6;border:2px solid #ffffff;box-shadow:0 0 10px rgba(41,182,246,.45);"></div>',
                            iconSize: [16, 16],
                            iconAnchor: [8, 8]
                        });
                        var vendorMarker = L.marker([coordinates.lat, coordinates.lng], { icon: vendorIcon }).addTo(map);
                        vendorMarker.bindPopup(popupContent);
                        vendorMarkers.push(vendorMarker);
                    } else if (window.google && google.maps && google.maps.Marker) {
                        var vendorMarker = new google.maps.Marker({
                            position: toGoogleLatLngLiteral(coordinates.lat, coordinates.lng),
                            map: map,
                            label: {
                                text: 'V',
                                color: '#ffffff',
                                fontWeight: '700'
                            },
                            icon: {
                                path: google.maps.SymbolPath.CIRCLE,
                                scale: 9,
                                fillColor: '#29B6F6',
                                fillOpacity: 1,
                                strokeColor: '#FFFFFF',
                                strokeWeight: 2
                            }
                        });
                        var vendorInfoWindow = createSafeInfoWindow({
                            content: popupContent
                        });
                        vendorMarker.addListener('click', function() {
                            vendorInfoWindow.open(map, vendorMarker);
                        });
                        vendorMarkers.push(vendorMarker);
                    } else {
                        vendorMarkersSkipped++;
                        return;
                    }

                    vendorMarkersRendered++;
                });

                console.info('Vendor markers rendered:', vendorMarkersRendered, 'Vendor markers skipped:', vendorMarkersSkipped);
            } catch (error) {
                console.warn('Vendor markers could not be loaded.', error);
            }
        }

        async function getUserDetail(userId) {
            if(userId!=''){
                 return database.collection("users").doc(userId).get().then((doc) => {
                 return doc.data();
            });
            }

        }

        async function getDriverDetail(driverId) {
            if(driverId!=''){
                return database.collection("users").doc(driverId).get().then((doc) => {
                    return doc.data();
                });
            }
        }

    </script>

    @endsection
