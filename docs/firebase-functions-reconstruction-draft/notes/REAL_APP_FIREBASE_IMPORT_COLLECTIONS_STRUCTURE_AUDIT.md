# FIREBASE IMPORT COLLECTIONS STRUCTURE AUDIT

Generated: 06/29/2026 00:57:09

Mode: read-only. Temporary local extract only for inspection. No Firebase write. No patch.

ZIP:
```text
C:\project\eMart_V6.7_Source_Code\Firebase Import Export Collections.zip
```

## README.md
```text

# To perform Firebase Collection Import Export, follow these straightforward steps:
-----------------------------------------------------------------------------------

1. To set up NPM on your computer, download Node.js from the following link: https://nodejs.org/en/download/ Node.js Download Page.

2. Unzip the source code file named "Firebase Import Export Collections.zip"

3. If you haven't already created a Firebase project, set it up now.

4. Configure the credentials.json file, which you can obtain from your Firebase Project settings. Then navigate to the Service account, then select Node.js. Generate a new private key and wait until the key is created. It will automatically download and replace the current credentials.json file.

5. Navigate to the extracted Firebase Import Export Collections zip file path and then press and hold the Ctrl+Shift buttons. While holding them, right-click the mouse button, and select "Open PowerShell window here" from the context menu. This will open a PowerShell window where you can run the import/export command.

6. Execute the following commands to perform import/export operations for collections:


# To import all collections, execute the following command:
-----------------------------------------------------------

npx -p node-firestore-import-export firestore-import -a credentials.json -b collections.json


# To export all collections, execute the following command:
-----------------------------------------------------------

npx -p node-firestore-import-export firestore-export -a credentials.json -b collections.json

Once the export command is executed, the collections.json file will be downloaded.

#Refer to this video for assistance: https://youtu.be/HgRgWNJiFhw
```

## collections.json File Info
```text
Path: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\_tmp_firebase_import_readonly\collections.json
Length: 9432875
LastWriteTime: 04/22/2026 17:32:46
```

## collections.json Raw First 80 Lines
```text
{
  "__collections__": {
    "cms_pages": {
      "6388ac8b01d81": {
        "slug": "about-us",
        "name": "About us",
        "description": "<p><b>Since 2011, Siddhi Infosoft has been a leading Web and Mobile app development company in the USA, UK and, Canada for providing IT solutions to every industry sector out there. Our web and mobile app developers assist to deliver a memorable experience and services, that outsells and outshines your competitors online.</b></p>\n\n<p>We understand the challenges across business functions and recognize company values. With our razor-sharp strategy, we deliver customized and measurable solutions that perform. We aim to bring your ideas to life through our full-spectrum web and mobile app development services combined with our extensive industry experience that covers a wide array of industries with an international client base.</p>\n\n<p>During the initial stages of our journey, we started, working with small-scale companies. However, in due course, we have been successful in spreading our reputation and fame to get a chance to provide software solutions for bigger organizations. Our developers in the past have solved extreme challenges faced during developing stages and have been successful in achieving the target and pleasing the clients. We continue to put in our efforts until we get feedback of 100% fulfillment from our clients.</p>",
        "id": "6388ac8b01d81",
        "publish": true,
        "__collections__": {}
      }
    },
    "heartbeat": {
      "Ha0mYn6v3RgY6hBFsQCg": {
        "timestamp": {
          "__datatype__": "timestamp",
          "value": {
            "_seconds": 1739877524,
            "_nanoseconds": 978000000
          }
        },
        "__collections__": {}
      }
    },
    "order_transactions": {
      "WocrHd1zxVIy2ZjjW1et": {
        "driverAmount": -6467.23,
        "driverId": "0SNQ4bM8KbOUPsC6njpaNkR6Zr52",
        "date": {
          "__datatype__": "timestamp",
          "value": {
            "_seconds": 1701236199,
            "_nanoseconds": 253000000
          }
        },
        "id": "WocrHd1zxVIy2ZjjW1et",
        "vendorAmount": "",
        "vendorId": "",
        "order_id": "Ww9rIPtUZAzL3uwVtmc6",
        "__collections__": {}
      }
    },
    "SOS": {
      "oUKWFl0fPWv2hZWdxKGd": {
        "latLong": {
          "longitude": 69.7008689,
          "latitude": 23.2404587
        },
        "status": "Initiated",
        "id": "oUKWFl0fPWv2hZWdxKGd",
        "orderId": "uYICbPHvsMw8uGAdH0eW",
        "__collections__": {}
      },
      "4cKvXEOzKNFr2S5CTTQs": {
        "orderId": "I9cNnvG59bXJNLqwVj9U",
        "status": "Initiated",
        "id": "4cKvXEOzKNFr2S5CTTQs",
        "latLong": {
          "longitude": 65.3221577,
          "latitude": 55.4309908
        },
        "__collections__": {}
      },
      "3ZiaqqM7j2tchjjbWezl": {
        "id": "3ZiaqqM7j2tchjjbWezl",
        "latLong": {
          "longitude": 69.7009163,
          "latitude": 23.2402218
        },
        "orderId": "3fb16237-796d-48c9-9857-6d89846b03bc",
        "status": "Initiated",
        "__collections__": {}
      },
      "AqJETkfxQhLhHmEm2KGL": {
        "orderId": "MGGvc37t5SZihMeRvBkV",
        "latLong": {
          "latitude": 23.0008793,
          "longitude": 72.5411163
        },
        "status": "Completed",
```

## Important Keyword Scan
```text
1156: "sectionId": "63368fb2beabb",
1170: "sectionId": "63368fb2beabb",
1199: "sectionId": "\n63368fb2beabb",
1214: "sectionId": "63368fb2beabb",
1236: "sectionId": "690b29c6e1fcd",
1243: "sectionId": "63368fb2beabb",
1318: "sectionId": "6285dd3281531",
1327: "sectionId": "6285dd3281531",
1336: "sectionId": "6285dd3281531",
1343: "sectionId": "6285dd3281531",
1350: "sectionId": "6285dd3281531",
1360: "sectionId": "6285dd3281531",
1366: "sectionId": "6285dd3281531",
1375: "sectionId": "6285dd3281531",
1382: "sectionId": "6285dd3281531",
1390: "section_id": "65d5821e8faca",
1396: "section_id": "65d5821e8faca",
1404: "section_id": "yJTddzJUxP3cOU5DpJ10",
1410: "section_id": "65d5821e8faca",
1414: "section_id": "65d5821e8faca",
1422: "section_id": "65d5821e8faca",
1428: "section_id": "65d5821e8faca",
1434: "section_id": "65d5821e8faca",
1440: "section_id": "65d5821e8faca",
1444: "section_id": "65d5821e8faca",
1450: "section_id": "65d5821e8faca",
1458: "section_id": "yJTddzJUxP3cOU5DpJ10",
1465: "section_id": "65d5821e8faca",
1472: "section_id": "yJTddzJUxP3cOU5DpJ10",
1477: "section_id": "yJTddzJUxP3cOU5DpJ10",
1920: "sectionId": "690b297cebe92",
1929: "sectionId": "690b297cebe92",
1944: "sectionId": "690b297cebe92",
1954: "sectionId": "631852d1bc978",
1962: "sectionId": "631852d1bc978",
1974: "sectionId": "631852d1bc978",
1986: "sectionId": "63368fb2beabb",
1995: "sectionId": "690b29c6e1fcd",
2009: "sectionId": "63368fb2beabb",
2019: "sectionId": "63368fb2beabb",
2036: "sectionId": "690b29c6e1fcd",
2045: "sectionId": "690b29c6e1fcd",
2053: "sectionId": "690b29c6e1fcd",
2083: "sectionId": "690b29c6e1fcd",
2090: "sectionId": "63368fb2beabb",
2122: "sectionId": "690b29c6e1fcd",
2133: "sectionId": "63368fb2beabb",
2172: "sectionId": "690b29c6e1fcd",
2190: "sectionId": "690b29c6e1fcd",
2198: "sectionId": "63368fb2beabb",
2228: "sectionId": "63368fb2beabb",
2260: "sectionId": "63368fb2beabb",
2282: "sectionId": "690b29c6e1fcd",
2289: "sectionId": "63368fb2beabb",
2325: "sectionId": "63368fb2beabb",
2335: "sectionId": "632309c9d549e",
2358: "sectionId": "632309c9d549e",
2375: "sectionId": "690b277434c75",
2536: "sectionId": "632309c9d549e",
2543: "sectionId": "690b277434c75",
2564: "sectionId": "632309c9d549e",
2624: "section_id": "6285ddbfd9598",
2640: "section_id": "6285dd3281531",
2648: "section_id": "6285dd3281531",
2661: "section_id": "6285dd7b50f32",
2680: "section_id": "6285dcf511651",
2685: "section_id": "6285dd3281531",
2708: "section_id": "6285dd7b50f32",
2717: "section_id": "6285dcf511651",
2727: "section_id": "6285dd3281531",
2742: "section_id": "6319dc53314ee",
2751: "section_id": "6285dd7b50f32",
2768: "section_id": "6319dc53314ee",
2779: "section_id": "6285dd3281531",
2789: "section_id": "6285dcf511651",
2802: "section_id": "6285ddbfd9598",
2814: "section_id": "6319dc53314ee",
2826: "section_id": "6285dcf511651",
2843: "section_id": "6319dc53314ee",
2851: "section_id": "6319dc53314ee",
2866: "section_id": "6285dcf511651",
2874: "section_id": "6319dc53314ee",
2887: "section_id": "6285ddbfd9598",
2896: "section_id": "6285ddbfd9598",
2920: "section_id": "6285ddbfd9598",
3838: "provider_categories": {
3842: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3855: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3861: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3873: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3886: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3892: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3904: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3910: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3924: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3930: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3944: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3956: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3962: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3972: "sectionId": "yJTddzJUxP3cOU5DpJ10",
3986: "sectionId": "yJTddzJUxP3cOU5DpJ10",
4006: "sectionId": "yJTddzJUxP3cOU5DpJ10",
4023: "sectionId": "yJTddzJUxP3cOU5DpJ10",
4043: "sectionId": "yJTddzJUxP3cOU5DpJ10",
4071: "sectionId": "yJTddzJUxP3cOU5DpJ10",
4083: "sectionId": "yJTddzJUxP3cOU5DpJ10",
4102: "services": {
4110: "name": "On Demand Service",
4112: "flag": "ondemand-service",
4144: "sectionId": "632309c9d549e",
4155: "sectionId": "690b277434c75",
4163: "sectionId": "632309c9d549e",
4170: "sectionId": "632309c9d549e",
4180: "sectionId": "690b277434c75",
4192: "sectionId": "632309c9d549e",
4201: "sectionId": "632309c9d549e",
4205: "sectionId": "690b277434c75",
4214: "sectionId": "690b277434c75",
4228: "sectionId": "632309c9d549e",
4233: "sectionId": "690b277434c75",
4254: "sectionId": "631852d1bc978",
4258: "sectionId": "690b297cebe92",
4274: "sectionId": "690b297cebe92",
4292: "sectionId": "631852d1bc978",
4306: "sectionId": "69cf9582f0fff",
4319: "sectionId": "631852d1bc978",
4338: "sectionId": "631852d1bc978",
4353: "sectionId": "690b297cebe92",
4369: "sectionId": "631852d1bc978",
4382: "sectionId": "690b297cebe92",
4394: "sectionId": "690b297cebe92",
4418: "sectionId": "631852d1bc978",
4460: "sectionId": "631852d1bc978",
4489: "sectionId": "63368fb2beabb",
4547: "sectionId": "631852d1bc978",
4566: "sectionId": "631852d1bc978",
4608: "sectionId": "631852d1bc978",
4647: "sectionId": "63368fb2beabb",
4659: "sectionId": "690b297cebe92",
4701: "sectionId": "690b297cebe92",
4707: "sectionId": "631852d1bc978",
4740: "sections": {
4743: "serviceTypeFlag": "delivery-service",
4781: "serviceTypeFlag": "rental-service",
4811: "serviceTypeFlag": "ondemand-service",
4823: "serviceType": "On Demand Service",
4846: "serviceTypeFlag": "ecommerce-service",
4868: "serviceTypeFlag": "delivery-service",
4896: "serviceTypeFlag": "cab-service",
4939: "serviceTypeFlag": "parcel_delivery",
4957: "serviceTypeFlag": "delivery-service",
4986: "providers_workers": {
5339: "section_id": "6285dcf511651",
5347: "section_id": "6285dcf511651",
5355: "section_id": "6285ddbfd9598",
5361: "section_id": "6285dcf511651",
5368: "section_id": "6285dcf511651",
5376: "section_id": "6285dd3281531",
5380: "section_id": "6285dcf511651",
5389: "section_id": "6285dd3281531",
5396: "section_id": "6285ddbfd9598",
5400: "section_id": "6285dd3281531",
5409: "section_id": "6285dd3281531",
5415: "section_id": "6285dd3281531",
5421: "section_id": "6285ddbfd9598",
5427: "section_id": "6285dcf511651",
5434: "section_id": "6285dcf511651",
5440: "section_id": "6285ddbfd9598",
5445: "section_id": "6285dcf511651",
5453: "section_id": "6285ddbfd9598",
5458: "section_id": "6285ddbfd9598",
5464: "section_id": "6285dcf511651",
5469: "section_id": "6285ddbfd9598",
5475: "section_id": "6285dcf511651",
5482: "section_id": "6285ddbfd9598",
5489: "section_id": "6285dcf511651",
5495: "section_id": "6285ddbfd9598",
5500: "section_id": "6285ddbfd9598",
5505: "section_id": "6285ddbfd9598",
5512: "section_id": "6285dcf511651",
5518: "section_id": "6285ddbfd9598",
5524: "section_id": "6285dcf511651",
5530: "section_id": "6285dd3281531",
5536: "section_id": "6285dd3281531",
5543: "section_id": "6319dc53314ee",
5686: "sectionId": "yJTddzJUxP3cOU5DpJ10",
5711: "sectionId": "6285ddbfd9598",
5729: "sectionId": "yJTddzJUxP3cOU5DpJ10",
5774: "sectionId": "6285dcf511651",
5786: "sectionId": "6285dcf511651",
5815: "sectionId": "6285dd3281531",
5864: "sectionId": "6285dd3281531",
5892: "sectionId": "6285ddbfd9598",
5923: "sectionId": "yJTddzJUxP3cOU5DpJ10",
5942: "sectionId": "6319dc53314ee",
5971: "sectionId": "6319dc53314ee",
5998: "sectionId": "6319dc53314ee",
6027: "sectionId": "6285ddbfd9598",
6064: "sectionId": "6285dcf511651",
6093: "sectionId": "yJTddzJUxP3cOU5DpJ10",
```

## JSON Top Level Inspection
```text
JSON_PARSE_ERROR: Cannot convert the JSON string because a dictionary that was converted from the string contains the duplicated keys 'deliveryCharge' and 'DeliveryCharge'.
```

## Final Status
STATUS: FIREBASE_IMPORT_COLLECTIONS_STRUCTURE_AUDIT_FINISHED