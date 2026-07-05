# ERBETE DELETE USER RUNTIME DECISION REPORT

Generated: 06/28/2026 12:49:47

Mode: decision-report-only. No deploy. No delete. No commit.

## Current Local State

- Firebase project default: erbete-putra
- deleteUser local trigger: functions.https.onRequest
- deleteUser local safe test UID: __SAFE_TEST_DO_NOT_DELETE__
- functionsGlobal removed: Yes
- onCall removed locally: Yes
- package.json engine: node 22
- node --check exit code: 0
- lint exit code: 0

## File Hashes

- .firebaserc SHA256: C1716B8C4888AF6E23785637A87C64F92A41F27116965B1625BAF1170B6666EC
- functions/package.json SHA256: 1EF1CB02733E96094BD2369D4D79B32CBD0AE063C02829F5434E7AB0A8352B19
- functions/index.js SHA256: EB83A2952FA019650F7C0E7DA952F173F1FBCF93B87CE81330B6DB53ED465204

## Local Config Snapshot

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


index.js checks:
- has onRequest: YES
- has onCall: NO
- has functionsGlobal: NO
- has safe test: YES

## Live Firebase Snapshot

{   "status": "success",   "result": [     {       "platform": "gcfv1",       "id": "deleteUser",       "project": "erbete-putra",       "region": "us-central1",       "callableTrigger": {},       "entryPoint": "deleteUser",       "runtime": "nodejs10",       "uri": "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser",       "securityLevel": "SECURE_ALWAYS",       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "deployment-callable": "true",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "deliveryDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/vendor_orders/{orderID}"         },         "retry": false       },       "entryPoint": "deliveryDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "parcelDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/parcel_orders/{orderID}"         },         "retry": false       },       "entryPoint": "parcelDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "propagateUserProfileUpdates",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.update",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/users/{userID}"         },         "retry": false       },       "entryPoint": "propagateUserProfileUpdates",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     },     {       "platform": "gcfv1",       "id": "rideDispatch",       "project": "erbete-putra",       "region": "us-central1",       "eventTrigger": {         "eventType": "providers/cloud.firestore/eventTypes/document.write",         "eventFilters": {           "resource": "projects/erbete-putra/databases/(default)/documents/rides/{orderID}"         },         "retry": false       },       "entryPoint": "rideDispatch",       "runtime": "nodejs10",       "maxInstances": 3000,       "ingressSettings": "ALLOW_ALL",       "labels": {         "deployment-tool": "cli-firebase",         "firebase-functions-hash": "3d7a9859555807164feb330f45f934a2b79b52de"       },       "environmentVariables": {         "FIREBASE_CONFIG": "{\"projectId\":\"erbete-putra\",\"databaseURL\":\"https://erbete-putra-default-rtdb.asia-southeast1.firebasedatabase.app\",\"storageBucket\":\"erbete-putra.appspot.com\",\"locationId\":\"us-central\"}",         "GCLOUD_PROJECT": "erbete-putra",         "EVENTARC_CLOUD_EVENT_SOURCE": "projects/erbete-putra/locations/us-central1/functions/deleteUser"       },       "sourceUploadUrl": "https://storage.googleapis.com/uploads-130001597278.us-central1.cloudfunctions.appspot.com/8bc581c6-0e15-480f-ba4a-5b5aa7cfcefd.zip",       "serviceAccount": "erbete-putra@appspot.gserviceaccount.com",       "availableMemoryMb": 256,       "timeoutSeconds": 60,       "codebase": "default",       "hash": "3d7a9859555807164feb330f45f934a2b79b52de",       "state": "ACTIVE"     }   ] }

## Decision

Keputusan aman untuk tahap ini:

1. Jangan turunkan package.json ke node 10.
2. Pertahankan package.json node 22 karena dependency lokal dan lint sudah lolos pada kondisi ini.
3. Deploy hanya boleh diarahkan ke functions:deleteUser, bukan semua functions.
4. Deploy akan mengubah deleteUser dari callable menjadi HTTP request handler.
5. Setelah deploy wajib safe test memakai UID __SAFE_TEST_DO_NOT_DELETE__.
6. User asli tidak boleh dipakai untuk test awal.

## Deploy Command - Not Executed

cd "C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function"
firebase deploy --only functions:deleteUser --project erbete-putra

## Safe Test Command - Run Only After Deploy

$body = @{ uid = "__SAFE_TEST_DO_NOT_DELETE__" } | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri "https://us-central1-erbete-putra.cloudfunctions.net/deleteUser" -ContentType "application/json" -Body $body

## Final Gate

STATUS: RUNTIME_DECISION_READY_FOR_EXPLICIT_DEPLOY_APPROVAL

Larangan:
- Belum deploy.
- Belum hapus user asli.
- Jangan jalankan delete user dari app.
- Jangan git add .
- Jangan commit/push.