# ERBETE DELETE USER TRIGGER CHANGE DECISION

Generated: 06/28/2026 13:13:14

Mode: decision-only. No delete. No deploy. No commit.

## Masalah

Firebase menolak perubahan deleteUser dari callable menjadi HTTPS onRequest tanpa delete function lama.

## Live Firebase Snapshot

{   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime": "nodejs10",       "uri": "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser",       "securityLevel": "SECURE_ALWAYS",       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "deployment-callable": "true",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "deliveryDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/vendor_orders/{orderID}"         },         "retry": false       },       "entryPoint": "deliveryDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "parcelDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/parcel_orders/{orderID}"         },         "retry": false       },       "entryPoint": "parcelDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de",         "deployment-tool": "cli-firebase"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "propagateUserProfileUpdates",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.update",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/users/{userID}"         },         "retry": false       },       "entryPoint": "propagateUserProfileUpdates",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "rideDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/rides/{orderID}"         },         "retry": false       },       "entryPoint": "rideDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     }   ] }{   "status": "error",   "error": "Timed out." }

## Local index.js State

- has onRequest: YES
- has onCall: NO
- has safe test UID: YES
- has serviceAccountKey: NO

## Pilihan

A. Delete function lama deleteUser lalu deploy ulang deleteUser sebagai HTTPS.
- Kelebihan: endpoint tetap /deleteUser.
- Risiko: function lama hilang dulu, lalu dibuat ulang.

B. Buat function baru deleteUserHttp lalu patch aplikasi agar memanggil endpoint baru.
- Kelebihan: tidak menghapus function lama.
- Risiko: perlu patch aplikasi/panel yang memanggil deleteUser.

## Rekomendasi Sementara

Jangan delete function lama dulu.
Audit dulu semua pemanggilan deleteUser di Flutter/Laravel agar keputusan tidak merusak alur app.

## Status

STATUS: TRIGGER_CHANGE_DECISION_REQUIRED

Larangan:
- Belum delete function.
- Belum deploy ulang.
- Belum safe test.
- Jangan test UID user asli.
- Jangan git add .
- Jangan commit/push.