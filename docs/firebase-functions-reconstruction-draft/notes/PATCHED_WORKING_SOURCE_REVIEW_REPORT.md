# PATCHED WORKING SOURCE REVIEW REPORT

Generated: 06/28/2026 17:15:48

Mode: review-only. No patch. No deploy. No delete. No commit.

## Functions Source

- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions

## File Listing

- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\.DS_Store | size=8196 | lastWrite=04/03/2026 13:07:52
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\.env | size=18 | lastWrite=04/22/2026 13:40:18
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\.eslintrc.json | size=1238 | lastWrite=04/07/2026 07:37:06
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\.gitignore | size=13 | lastWrite=04/03/2026 13:07:52
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\index.js | size=1638 | lastWrite=06/28/2026 13:06:20
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\package-lock.json | size=287079 | lastWrite=04/07/2026 07:40:48
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\package.json | size=661 | lastWrite=04/07/2026 07:40:48
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\serviceAccountKey.json | size=227 | lastWrite=05/03/2024 17:44:14
- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\products\delivery.js | size=11314 | lastWrite=04/22/2026 13:52:08

## package.json

```json
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
```

## index.js

```js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

if (admin.apps.length === 0) {
  admin.initializeApp();
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
```

## Export Detection

- exports.deliveryDispatch present: True
- exports.deleteUser present: True
- exports.rideDispatch present: False
- exports.parcelDispatch present: False
- exports.propagateUserProfileUpdates present: False
- deleteUser onRequest present: True
- deleteUser onCall present: False

## Decision

- This is review-only.
- Do not edit this source yet.
- Do not export draft functions yet.
- Do not deploy.
- Keep live-only functions untouched.

## Status

STATUS: PATCHED_WORKING_SOURCE_REVIEW_CREATED