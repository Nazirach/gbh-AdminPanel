# FIREBASE OLD DATA VS NEW CODE SERVICE GAP AUDIT

Generated: 06/29/2026 00:10:22

Mode: read-only. No Firebase write. No patch. No order creation.

## Result
```text
STATUS: FIREBASE_ADMIN_INITIALIZED_READ_ONLY
project_id: erbete-putra

## CURRENT FIREBASE SECTIONS
sections_total_count: 8
{"id":"6285dcf511651","name":"Cosmetic","isActive":true,"order":1,"serviceType":"Multivendor Delivery Service","serviceTypeFlag":"delivery-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"6285dd3281531","name":"Fashion","isActive":true,"order":2,"serviceType":"Ecommerce Service","serviceTypeFlag":"ecommerce-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"6285dd7b50f32","name":"Flowers","isActive":true,"order":3,"serviceType":"Multivendor Delivery Service","serviceTypeFlag":"delivery-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"6285ddbfd9598","name":"Restaurants","isActive":true,"order":4,"serviceType":"Multivendor Delivery Service","serviceTypeFlag":"delivery-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"631852d1bc978","name":"Cab Service","isActive":true,"order":5,"serviceType":"Cab Service","serviceTypeFlag":"cab-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"6319dc53314ee","name":"Food Grocery","isActive":true,"order":6,"serviceType":"Multivendor Delivery Service","serviceTypeFlag":"delivery-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"632309c9d549e","name":"Parcel Service","isActive":true,"order":7,"serviceType":"Parcel Delivery Service","serviceTypeFlag":"parcel_delivery","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"63368fb2beabb","name":"Rental Service","isActive":true,"order":8,"serviceType":"Rental Service","serviceTypeFlag":"rental-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}

## CURRENT ACTIVE ORDERED SECTIONS
{"id":"6285dcf511651","name":"Cosmetic","isActive":true,"order":1,"serviceType":"Multivendor Delivery Service","serviceTypeFlag":"delivery-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"6285dd3281531","name":"Fashion","isActive":true,"order":2,"serviceType":"Ecommerce Service","serviceTypeFlag":"ecommerce-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"6285dd7b50f32","name":"Flowers","isActive":true,"order":3,"serviceType":"Multivendor Delivery Service","serviceTypeFlag":"delivery-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"6285ddbfd9598","name":"Restaurants","isActive":true,"order":4,"serviceType":"Multivendor Delivery Service","serviceTypeFlag":"delivery-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"631852d1bc978","name":"Cab Service","isActive":true,"order":5,"serviceType":"Cab Service","serviceTypeFlag":"cab-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"6319dc53314ee","name":"Food Grocery","isActive":true,"order":6,"serviceType":"Multivendor Delivery Service","serviceTypeFlag":"delivery-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"632309c9d549e","name":"Parcel Service","isActive":true,"order":7,"serviceType":"Parcel Delivery Service","serviceTypeFlag":"parcel_delivery","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}
{"id":"63368fb2beabb","name":"Rental Service","isActive":true,"order":8,"serviceType":"Rental Service","serviceTypeFlag":"rental-service","theme":null,"sectionImage_present":true,"markerIcon_present":false,"platformFee_type":"object","adminCommision_type":"missing","nearByRadius":null}

## NEW CODE EXPECTED FLAGS VS FIREBASE
{"expectedFlag":"ecommerce-service","meaning":"Multi vendor / ecommerce style service","examples":["Cosmetic","Fashion","Flowers"],"foundCount":1,"foundNames":["Fashion"],"status":"PRESENT_IN_FIREBASE"}
{"expectedFlag":"delivery-service","meaning":"Restaurant / food / grocery delivery style service","examples":["Restaurants","Food Grocery"],"foundCount":4,"foundNames":["Cosmetic","Flowers","Restaurants","Food Grocery"],"status":"PRESENT_IN_FIREBASE"}
{"expectedFlag":"cab-service","meaning":"Ride / taxi / cab booking service","examples":["Cab Service"],"foundCount":1,"foundNames":["Cab Service"],"status":"PRESENT_IN_FIREBASE"}
{"expectedFlag":"rental-service","meaning":"Vehicle rental service","examples":["Rental Service"],"foundCount":1,"foundNames":["Rental Service"],"status":"PRESENT_IN_FIREBASE"}
{"expectedFlag":"parcel_delivery","meaning":"Parcel delivery service","examples":["Parcel Service"],"foundCount":1,"foundNames":["Parcel Service"],"status":"PRESENT_IN_FIREBASE"}
{"expectedFlag":"ondemand-service","meaning":"On-demand service / jasa panggilan / teknisi / service booking","examples":["On Demand Service","Service","Technician Service"],"foundCount":0,"foundNames":[],"status":"MISSING_IN_FIREBASE"}

## MISSING SERVICE DRAFTS - NO WRITE
{"action":"DRAFT_ONLY_DO_NOT_WRITE","collection":"sections","serviceTypeFlag":"ondemand-service","suggestedName":"On Demand Service","suggestedOrder":9,"suggestedDoc":{"name":"On Demand Service","isActive":false,"order":9,"serviceType":"On Demand Service","serviceTypeFlag":"ondemand-service","theme":"theme_2","sectionImage":"","markerIcon":"","platformFee":{"fee":"0.0","enable":false},"adminCommision":{"commission":"0","enable":false,"type":"fix"},"nearByRadius":5000}}

STATUS: FIREBASE_OLD_DATA_VS_NEW_CODE_SERVICE_GAP_AUDIT_FINISHED

```

## Final Status
STATUS: FIREBASE_OLD_DATA_VS_NEW_CODE_SERVICE_GAP_AUDIT_REPORT_CREATED