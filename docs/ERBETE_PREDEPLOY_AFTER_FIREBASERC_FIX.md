# ERBETE PREDEPLOY AFTER FIREBASERC FIX

Generated: 06/28/2026 12:41:05

Mode: predeploy-check-only. No deploy. No delete. No commit.

Root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function

firebase --version:
15.19.0

firebase use:
erbete-putra

.firebaserc:
{
  "projects": {
    "default": "erbete-putra"
  }
}

functions/package.json:
{
  "name": "functions",
  "description": "Cloud Functions for Firebase",
  "scripts": {
    "lint": "eslint .",
    "serve": "firebase emulators:start --only functions",
    "shell": "firebase functions:shell",
    "start": "npm run shell",
    "deploy": "firebase deploy --only functions",
    "logs": "firebase functions:log"
  },
  "engines": {
    "node": "22"
  },
  "dependencies": {
    "apn": "^2.2.0",
    "axios": "^0.19.2",
    "firebase-admin": "^13.7.0",
    "firebase-functions": "^7.2.3"
  },
  "devDependencies": {
    "eslint": "^8.57.0",
    "eslint-plugin-promise": "^4.0.1",
    "firebase-functions-test": "^0.1.6"
  },
  "private": true
}


index.js key checks:
- has onRequest: YES
- has onCall: NO
- has functionsGlobal: NO
- has safe test: YES

firebase functions:list --project erbete-putra --json:
{   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime": "nodejs10",       "uri": "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser",       "securityLevel": "SECURE_ALWAYS",       "ingressSettings": "ALLOW_ALL",       "labels": {         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de",         "deployment-tool": "cli-firebase",         "deployment-callable": "true"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "deliveryDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/vendor_orders/{orderID}"         },         "retry": false       },       "entryPoint": "deliveryDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "parcelDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/parcel_orders/{orderID}"         },         "retry": false       },       "entryPoint": "parcelDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "propagateUserProfileUpdates",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.update",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/users/{userID}"         },         "retry": false       },       "entryPoint": "propagateUserProfileUpdates",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "rideDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/rides/{orderID}"         },         "retry": false       },       "entryPoint": "rideDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     }   ] }

firebase functions:list --project erbete-putra:
[90mΓöîΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÉ[39m [90mΓöé[39m[33m Function                    [39m[90mΓöé[39m[33m Version [39m[90mΓöé[39m[33m Trigger                                              [39m[90mΓöé[39m[33m Location    [39m[90mΓöé[39m[33m Memory [39m[90mΓöé[39m[33m Runtime  [39m[90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m deleteUser                  [90mΓöé[39m v1      [90mΓöé[39m callable                                             [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m deliveryDispatch            [90mΓöé[39m v1      [90mΓöé[39m providers/cloud.firestore/eventTypes/document.write  [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m parcelDispatch              [90mΓöé[39m v1      [90mΓöé[39m providers/cloud.firestore/eventTypes/document.write  [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m propagateUserProfileUpdates [90mΓöé[39m v1      [90mΓöé[39m providers/cloud.firestore/eventTypes/document.update [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m rideDispatch                [90mΓöé[39m v1      [90mΓöé[39m providers/cloud.firestore/eventTypes/document.write  [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓööΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÿ[39m

node --check functions/index.js:

node exit code: 0

STATUS: PREDEPLOY_AFTER_FIREBASERC_OK

Runtime warning:
- Local package.json memakai node 22.
- Function live sebelumnya terbaca nodejs10.
- Deploy deleteUser dapat mengubah runtime deleteUser.
- Jangan deploy sebelum keputusan runtime dicatat.

Larangan:
- Belum deploy.
- Belum hapus user asli.
- Jangan jalankan delete user dari app.
- Jangan git add .
- Jangan commit/push.