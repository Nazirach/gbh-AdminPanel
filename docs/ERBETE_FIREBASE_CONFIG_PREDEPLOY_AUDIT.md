# ERBETE FIREBASE CONFIG PREDEPLOY AUDIT

Generated: 06/28/2026 12:37:47

Mode: config-audit-only. No patch. No deploy. No delete. No commit.

Root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function

## FILE: .firebaserc

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\.firebaserc
- Length: 57
- SHA256: FF431CB39E8DEF7B424EEB99719A7EBCC44DBFB377F7555C882B36FF1AD711CD

CONTENT:

{
  "projects": {
    "default": "YOUR_PROJECT_ID"
  }
}

## FILE: firebase.json

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\firebase.json
- Length: 98
- SHA256: DBBF5E866D244E642329E6A8B25C6D3D736C5B8733F6BAC493F6BAC542D4F5D2

CONTENT:

{
  "functions": {
    "predeploy": [
      "npm --prefix \"$RESOURCE_DIR\" run lint"
    ]
  }
}

## FILE: functions\package.json

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\package.json
- Length: 661
- SHA256: 1EF1CB02733E96094BD2369D4D79B32CBD0AE063C02829F5434E7AB0A8352B19

CONTENT:

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

## FILE: functions\index.js

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\index.js
- Length: 1796
- SHA256: EB83A2952FA019650F7C0E7DA952F173F1FBCF93B87CE81330B6DB53ED465204

CONTENT:

const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require("./serviceAccountKey.json");

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "YOUR_DATABASE_URL"
  });
}

const delivery = require('./products/delivery');

// Multivendor service function
exports.deliveryDispatch = delivery.dispatch;

// Delete auth user function
// PATCH: changed deleteUser to HTTP request handler
// Reason: mobile apps call this endpoint with http.post(...), not Firebase callable SDK.
exports.deleteUser = functions.https.onRequest(async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({
        status: false,
        message: 'METHOD_NOT_ALLOWED'
      });
    }

    const body = req.body || {};
    const uid =
      body.uid ||
      (body.data && body.data.uid) ||
      req.query.uid ||
      '';

    if (!uid || typeof uid !== 'string' || uid.trim() === '') {
      return res.status(400).json({
        status: false,
        message: 'UID_REQUIRED'
      });
    }

    const cleanUid = uid.trim();

    if (cleanUid === '__SAFE_TEST_DO_NOT_DELETE__') {
      return res.status(200).json({
        status: true,
        message: 'SAFE_TEST_OK: endpoint reached, Firebase Auth delete bypassed.'
      });
    }

    await admin.auth().deleteUser(cleanUid);

    return res.status(200).json({
      status: true,
      message: 'USER_AUTH_DELETED',
      uid: cleanUid
    });
  } catch (error) {
    console.error('deleteUser error:', error);

    return res.status(500).json({
      status: false,
      message: 'DELETE_USER_FAILED',
      error: error && error.message ? error.message : String(error)
    });
  }
});

## Firebase CLI direct checks

firebase --version:
15.19.0

firebase use --project erbete-putra:
erbete-putra

firebase functions:list --project erbete-putra:
[90mΓöîΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö¼ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÉ[39m [90mΓöé[39m[33m Function                    [39m[90mΓöé[39m[33m Version [39m[90mΓöé[39m[33m Trigger                                              [39m[90mΓöé[39m[33m Location    [39m[90mΓöé[39m[33m Memory [39m[90mΓöé[39m[33m Runtime  [39m[90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m deleteUser                  [90mΓöé[39m v1      [90mΓöé[39m callable                                             [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m deliveryDispatch            [90mΓöé[39m v1      [90mΓöé[39m providers/cloud.firestore/eventTypes/document.write  [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m parcelDispatch              [90mΓöé[39m v1      [90mΓöé[39m providers/cloud.firestore/eventTypes/document.write  [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m propagateUserProfileUpdates [90mΓöé[39m v1      [90mΓöé[39m providers/cloud.firestore/eventTypes/document.update [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓö£ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö╝ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöñ[39m [90mΓöé[39m rideDispatch                [90mΓöé[39m v1      [90mΓöé[39m providers/cloud.firestore/eventTypes/document.write  [90mΓöé[39m us-central1 [90mΓöé[39m 256    [90mΓöé[39m nodejs10 [90mΓöé[39m [90mΓööΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇ[39m[90mΓö┤ΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÇΓöÿ[39m

node --check functions/index.js:

node exit code: 0

## Keputusan Sementara

- Jika .firebaserc berisi YOUR_PROJECT_ID, perlu backup lalu ganti ke erbete-putra sebelum deploy.
- Jika package.json runtime/engines tidak cocok, perlu dikunci sebelum deploy.
- Belum deploy.
- Belum hapus user asli.