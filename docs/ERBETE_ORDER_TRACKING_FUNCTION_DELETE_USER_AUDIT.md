# ERBETE ORDER TRACKING FUNCTION DELETE USER AUDIT

Generated: 06/28/2026 05:24:23

Mode: audit-only. No patch. No deploy. No delete. No commit.

## Root

- C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function

## firebase.json

FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\firebase.json

{
  "functions": {
    "predeploy": [
      "npm --prefix \"$RESOURCE_DIR\" run lint"
    ]
  }
}

## Functions Files

- Files scanned: 6

### FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\index.js

- Hits: 6

LINE: 2
PREV: const functions = require('firebase-functions');
TEXT: const admin = require('firebase-admin');
NEXT: 
NEXT: const serviceAccount = require("./serviceAccountKey.json");
NEXT: admin.initializeApp({
NEXT: credential: admin.credential.cert(serviceAccount),
NEXT: databaseURL: "YOUR_DATABASE_URL"
NEXT: });
NEXT: 
NEXT: const delivery = require('./products/delivery')
NEXT: 
NEXT: //Multivendor service function

LINE: 4
PREV: const functions = require('firebase-functions');
PREV: const admin = require('firebase-admin');
PREV: 
TEXT: const serviceAccount = require("./serviceAccountKey.json");
NEXT: admin.initializeApp({
NEXT: credential: admin.credential.cert(serviceAccount),
NEXT: databaseURL: "YOUR_DATABASE_URL"
NEXT: });
NEXT: 
NEXT: const delivery = require('./products/delivery')
NEXT: 
NEXT: //Multivendor service function
NEXT: exports.deliveryDispatch = delivery.dispatch
NEXT: 

LINE: 5
PREV: const functions = require('firebase-functions');
PREV: const admin = require('firebase-admin');
PREV: 
PREV: const serviceAccount = require("./serviceAccountKey.json");
TEXT: admin.initializeApp({
NEXT: credential: admin.credential.cert(serviceAccount),
NEXT: databaseURL: "YOUR_DATABASE_URL"
NEXT: });
NEXT: 
NEXT: const delivery = require('./products/delivery')
NEXT: 
NEXT: //Multivendor service function
NEXT: exports.deliveryDispatch = delivery.dispatch
NEXT: 
NEXT: //Delete auth user function

LINE: 6
PREV: const admin = require('firebase-admin');
PREV: 
PREV: const serviceAccount = require("./serviceAccountKey.json");
PREV: admin.initializeApp({
TEXT: credential: admin.credential.cert(serviceAccount),
NEXT: databaseURL: "YOUR_DATABASE_URL"
NEXT: });
NEXT: 
NEXT: const delivery = require('./products/delivery')
NEXT: 
NEXT: //Multivendor service function
NEXT: exports.deliveryDispatch = delivery.dispatch
NEXT: 
NEXT: //Delete auth user function
NEXT: exports.deleteUser = functions.https.onCall(async (data, context) => {

LINE: 16
PREV: //Multivendor service function
PREV: exports.deliveryDispatch = delivery.dispatch
PREV: 
PREV: //Delete auth user function
TEXT: exports.deleteUser = functions.https.onCall(async (data, context) => {
NEXT: try {
NEXT: await admin.auth().deleteUser(data.uid);
NEXT: return { result: 'user successfully deleted'};
NEXT: } catch (error) {
NEXT: throw new functionsGlobal.https.HttpsError('failed-precondition','The function must be called while authenticated.');
NEXT: }
NEXT: });

LINE: 18
PREV: 
PREV: //Delete auth user function
PREV: exports.deleteUser = functions.https.onCall(async (data, context) => {
PREV: try {
TEXT: await admin.auth().deleteUser(data.uid);
NEXT: return { result: 'user successfully deleted'};
NEXT: } catch (error) {
NEXT: throw new functionsGlobal.https.HttpsError('failed-precondition','The function must be called while authenticated.');
NEXT: }
NEXT: });

### FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\package-lock.json

- Hits: 49

LINE: 11
PREV: "name": "functions",
PREV: "dependencies": {
PREV: "apn": "^2.2.0",
PREV: "axios": "^0.19.2",
TEXT: "firebase-admin": "^13.7.0",
NEXT: "firebase-functions": "^7.2.3"
NEXT: },
NEXT: "devDependencies": {
NEXT: "eslint": "^8.57.0",
NEXT: "eslint-plugin-promise": "^4.0.1",
NEXT: "firebase-functions-test": "^0.1.6"
NEXT: },
NEXT: "engines": {
NEXT: "node": "22"
NEXT: }

LINE: 313
PREV: "mime": "^3.0.0",
PREV: "p-limit": "^3.0.1",
PREV: "retry-request": "^7.0.0",
PREV: "teeny-request": "^9.0.0",
TEXT: "uuid": "^8.0.0"
NEXT: },
NEXT: "engines": {
NEXT: "node": ">=14"
NEXT: }
NEXT: },
NEXT: "node_modules/@google-cloud/storage/node_modules/gcp-metadata": {
NEXT: "version": "6.1.1",
NEXT: "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-6.1.1.tgz",
NEXT: "integrity": "sha512-a4tiq7E0/5fTjxPAaH4jpjkSv/uCaU2p5KC6HVGrvl0cDjA8iBZv4vv1gyzlmK0ZUKqwpOyQMKzZQe3lTit77A==",
NEXT: "license": "Apache-2.0",

LINE: 362
PREV: "engines": {
PREV: "node": ">=14"
PREV: }
PREV: },
TEXT: "node_modules/@google-cloud/storage/node_modules/uuid": {
NEXT: "version": "8.3.2",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
NEXT: "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
NEXT: "license": "MIT",
NEXT: "optional": true,
NEXT: "bin": {
NEXT: "uuid": "dist/bin/uuid"
NEXT: }
NEXT: },
NEXT: "node_modules/@grpc/grpc-js": {

LINE: 364
PREV: }
PREV: },
PREV: "node_modules/@google-cloud/storage/node_modules/uuid": {
PREV: "version": "8.3.2",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
NEXT: "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
NEXT: "license": "MIT",
NEXT: "optional": true,
NEXT: "bin": {
NEXT: "uuid": "dist/bin/uuid"
NEXT: }
NEXT: },
NEXT: "node_modules/@grpc/grpc-js": {
NEXT: "version": "1.14.3",
NEXT: "resolved": "https://registry.npmjs.org/@grpc/grpc-js/-/grpc-js-1.14.3.tgz",

LINE: 369
PREV: "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
PREV: "license": "MIT",
PREV: "optional": true,
PREV: "bin": {
TEXT: "uuid": "dist/bin/uuid"
NEXT: }
NEXT: },
NEXT: "node_modules/@grpc/grpc-js": {
NEXT: "version": "1.14.3",
NEXT: "resolved": "https://registry.npmjs.org/@grpc/grpc-js/-/grpc-js-1.14.3.tgz",
NEXT: "integrity": "sha512-Iq8QQQ/7X3Sac15oB6p0FmUg/klxQvXLeileoqrTRGJYLV+/9tubbr9ipz0GKHjmXVsgFPo/+W+2cA8eNcR+XA==",
NEXT: "license": "Apache-2.0",
NEXT: "optional": true,
NEXT: "dependencies": {
NEXT: "@grpc/proto-loader": "^0.8.0",

LINE: 1047
PREV: },
PREV: "node_modules/buffer-equal-constant-time": {
PREV: "version": "1.0.1",
PREV: "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
TEXT: "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA=="
NEXT: },
NEXT: "node_modules/bytes": {
NEXT: "version": "3.1.2",
NEXT: "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
NEXT: "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
NEXT: "engines": {
NEXT: "node": ">= 0.8"
NEXT: }
NEXT: },
NEXT: "node_modules/call-bind": {

LINE: 1910
PREV: "funding": {
PREV: "url": "https://github.com/sponsors/sindresorhus"
PREV: }
PREV: },
TEXT: "node_modules/firebase-admin": {
NEXT: "version": "13.7.0",
NEXT: "resolved": "https://registry.npmjs.org/firebase-admin/-/firebase-admin-13.7.0.tgz",
NEXT: "integrity": "sha512-o3qS8zCJbApe7aKzkO2Pa380t9cHISqeSd3blqYTtOuUUUua3qZTLwNWgGUOss3td6wbzrZhiHIj3c8+fC046Q==",
NEXT: "license": "Apache-2.0",
NEXT: "dependencies": {
NEXT: "@fastify/busboy": "^3.0.0",
NEXT: "@firebase/database-compat": "^2.0.0",
NEXT: "@firebase/database-types": "^1.0.6",
NEXT: "farmhash-modern": "^1.1.0",
NEXT: "fast-deep-equal": "^3.1.1",

LINE: 1912
PREV: }
PREV: },
PREV: "node_modules/firebase-admin": {
PREV: "version": "13.7.0",
TEXT: "resolved": "https://registry.npmjs.org/firebase-admin/-/firebase-admin-13.7.0.tgz",
NEXT: "integrity": "sha512-o3qS8zCJbApe7aKzkO2Pa380t9cHISqeSd3blqYTtOuUUUua3qZTLwNWgGUOss3td6wbzrZhiHIj3c8+fC046Q==",
NEXT: "license": "Apache-2.0",
NEXT: "dependencies": {
NEXT: "@fastify/busboy": "^3.0.0",
NEXT: "@firebase/database-compat": "^2.0.0",
NEXT: "@firebase/database-types": "^1.0.6",
NEXT: "farmhash-modern": "^1.1.0",
NEXT: "fast-deep-equal": "^3.1.1",
NEXT: "google-auth-library": "^10.6.1",
NEXT: "jsonwebtoken": "^9.0.0",

LINE: 1925
PREV: "google-auth-library": "^10.6.1",
PREV: "jsonwebtoken": "^9.0.0",
PREV: "jwks-rsa": "^3.1.0",
PREV: "node-forge": "^1.3.1",
TEXT: "uuid": "^11.0.2"
NEXT: },
NEXT: "engines": {
NEXT: "node": ">=18"
NEXT: },
NEXT: "optionalDependencies": {
NEXT: "@google-cloud/firestore": "^7.11.0",
NEXT: "@google-cloud/storage": "^7.19.0"
NEXT: }
NEXT: },
NEXT: "node_modules/firebase-admin/node_modules/jsonwebtoken": {

LINE: 1935
PREV: "@google-cloud/firestore": "^7.11.0",
PREV: "@google-cloud/storage": "^7.19.0"
PREV: }
PREV: },
TEXT: "node_modules/firebase-admin/node_modules/jsonwebtoken": {
NEXT: "version": "9.0.3",
NEXT: "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
NEXT: "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
NEXT: "license": "MIT",
NEXT: "dependencies": {
NEXT: "jws": "^4.0.1",
NEXT: "lodash.includes": "^4.3.0",
NEXT: "lodash.isboolean": "^3.0.3",
NEXT: "lodash.isinteger": "^4.0.4",
NEXT: "lodash.isnumber": "^3.0.3",

LINE: 1957
PREV: "node": ">=12",
PREV: "npm": ">=6"
PREV: }
PREV: },
TEXT: "node_modules/firebase-admin/node_modules/node-forge": {
NEXT: "version": "1.4.0",
NEXT: "resolved": "https://registry.npmjs.org/node-forge/-/node-forge-1.4.0.tgz",
NEXT: "integrity": "sha512-LarFH0+6VfriEhqMMcLX2F7SwSXeWwnEAJEsYm5QKWchiVYVvJyV9v7UDvUv+w5HO23ZpQTXDv/GxdDdMyOuoQ==",
NEXT: "license": "(BSD-3-Clause OR GPL-2.0)",
NEXT: "engines": {
NEXT: "node": ">= 6.13.0"
NEXT: }
NEXT: },
NEXT: "node_modules/firebase-admin/node_modules/semver": {
NEXT: "version": "7.7.4",

LINE: 1966
PREV: "engines": {
PREV: "node": ">= 6.13.0"
PREV: }
PREV: },
TEXT: "node_modules/firebase-admin/node_modules/semver": {
NEXT: "version": "7.7.4",
NEXT: "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.4.tgz",
NEXT: "integrity": "sha512-vFKC2IEtQnVhpT78h1Yp8wzwrf8CM+MzKMHGJZfBtzhZNycRFnXsHk6E5TxIkkMsgNS7mdX3AGB7x2QM2di4lA==",
NEXT: "license": "ISC",
NEXT: "bin": {
NEXT: "semver": "bin/semver.js"
NEXT: },
NEXT: "engines": {
NEXT: "node": ">=10"
NEXT: }

LINE: 1999
PREV: },
PREV: "peerDependencies": {
PREV: "@apollo/server": "^5.2.0",
PREV: "@as-integrations/express4": "^1.1.2",
TEXT: "firebase-admin": "^11.10.0 || ^12.0.0 || ^13.0.0",
NEXT: "graphql": "^16.12.0"
NEXT: },
NEXT: "peerDependenciesMeta": {
NEXT: "@apollo/server": {
NEXT: "optional": true
NEXT: },
NEXT: "@as-integrations/express4": {
NEXT: "optional": true
NEXT: },
NEXT: "graphql": {

LINE: 2027
PREV: "engines": {
PREV: "node": ">=6.0.0"
PREV: },
PREV: "peerDependencies": {
TEXT: "firebase-admin": ">5.12.0",
NEXT: "firebase-functions": ">1.0.1"
NEXT: }
NEXT: },
NEXT: "node_modules/flat-cache": {
NEXT: "version": "3.2.0",
NEXT: "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
NEXT: "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
NEXT: "dev": true,
NEXT: "license": "MIT",
NEXT: "dependencies": {

LINE: 2155
PREV: "extend": "^3.0.2",
PREV: "https-proxy-agent": "^7.0.1",
PREV: "is-stream": "^2.0.0",
PREV: "node-fetch": "^2.6.9",
TEXT: "uuid": "^9.0.1"
NEXT: },
NEXT: "engines": {
NEXT: "node": ">=14"
NEXT: }
NEXT: },
NEXT: "node_modules/gaxios/node_modules/uuid": {
NEXT: "version": "9.0.1",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "funding": [

LINE: 2161
PREV: "engines": {
PREV: "node": ">=14"
PREV: }
PREV: },
TEXT: "node_modules/gaxios/node_modules/uuid": {
NEXT: "version": "9.0.1",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "funding": [
NEXT: "https://github.com/sponsors/broofa",
NEXT: "https://github.com/sponsors/ctavan"
NEXT: ],
NEXT: "license": "MIT",
NEXT: "optional": true,
NEXT: "bin": {

LINE: 2163
PREV: }
PREV: },
PREV: "node_modules/gaxios/node_modules/uuid": {
PREV: "version": "9.0.1",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "funding": [
NEXT: "https://github.com/sponsors/broofa",
NEXT: "https://github.com/sponsors/ctavan"
NEXT: ],
NEXT: "license": "MIT",
NEXT: "optional": true,
NEXT: "bin": {
NEXT: "uuid": "dist/bin/uuid"
NEXT: }

LINE: 2172
PREV: ],
PREV: "license": "MIT",
PREV: "optional": true,
PREV: "bin": {
TEXT: "uuid": "dist/bin/uuid"
NEXT: }
NEXT: },
NEXT: "node_modules/gcp-metadata": {
NEXT: "version": "8.1.2",
NEXT: "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-8.1.2.tgz",
NEXT: "integrity": "sha512-zV/5HKTfCeKWnxG0Dmrw51hEWFGfcF2xiXqcA3+J90WDuP0SvoiSO5ORvcBsifmx/FoIjgQN3oNOGaQ5PhLFkg==",
NEXT: "license": "Apache-2.0",
NEXT: "dependencies": {
NEXT: "gaxios": "^7.0.0",
NEXT: "google-logging-utils": "^1.0.0",

LINE: 2386
PREV: "object-hash": "^3.0.0",
PREV: "proto3-json-serializer": "^2.0.2",
PREV: "protobufjs": "^7.3.2",
PREV: "retry-request": "^7.0.0",
TEXT: "uuid": "^9.0.1"
NEXT: },
NEXT: "engines": {
NEXT: "node": ">=14"
NEXT: }
NEXT: },
NEXT: "node_modules/google-gax/node_modules/gcp-metadata": {
NEXT: "version": "6.1.1",
NEXT: "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-6.1.1.tgz",
NEXT: "integrity": "sha512-a4tiq7E0/5fTjxPAaH4jpjkSv/uCaU2p5KC6HVGrvl0cDjA8iBZv4vv1gyzlmK0ZUKqwpOyQMKzZQe3lTit77A==",
NEXT: "license": "Apache-2.0",

LINE: 2435
PREV: "engines": {
PREV: "node": ">=14"
PREV: }
PREV: },
TEXT: "node_modules/google-gax/node_modules/uuid": {
NEXT: "version": "9.0.1",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "funding": [
NEXT: "https://github.com/sponsors/broofa",
NEXT: "https://github.com/sponsors/ctavan"
NEXT: ],
NEXT: "license": "MIT",
NEXT: "optional": true,
NEXT: "bin": {

LINE: 2437
PREV: }
PREV: },
PREV: "node_modules/google-gax/node_modules/uuid": {
PREV: "version": "9.0.1",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "funding": [
NEXT: "https://github.com/sponsors/broofa",
NEXT: "https://github.com/sponsors/ctavan"
NEXT: ],
NEXT: "license": "MIT",
NEXT: "optional": true,
NEXT: "bin": {
NEXT: "uuid": "dist/bin/uuid"
NEXT: }

LINE: 2446
PREV: ],
PREV: "license": "MIT",
PREV: "optional": true,
PREV: "bin": {
TEXT: "uuid": "dist/bin/uuid"
NEXT: }
NEXT: },
NEXT: "node_modules/google-logging-utils": {
NEXT: "version": "1.1.3",
NEXT: "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-1.1.3.tgz",
NEXT: "integrity": "sha512-eAmLkjDjAFCVXg7A1unxHsLf961m6y17QFqXqAXGj/gVkKFrEICfStRfwUlGNfeCEjNRa32JEWOUTlYXPyyKvA==",
NEXT: "license": "Apache-2.0",
NEXT: "engines": {
NEXT: "node": ">=14"
NEXT: }

LINE: 3106
PREV: },
PREV: "node_modules/methods": {
PREV: "version": "1.1.2",
PREV: "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
TEXT: "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w==",
NEXT: "engines": {
NEXT: "node": ">= 0.6"
NEXT: }
NEXT: },
NEXT: "node_modules/mime": {
NEXT: "version": "3.0.0",
NEXT: "resolved": "https://registry.npmjs.org/mime/-/mime-3.0.0.tgz",
NEXT: "integrity": "sha512-jSCU7/VB1loIWBZe14aEYHU/+1UMEHoaO7qxCOVJOw9GgH72VAWppxNcjU+x9a2k3GSIBXNKxXQFqRvvZ7vr3A==",
NEXT: "license": "MIT",
NEXT: "optional": true,

LINE: 3900
PREV: "http-proxy-agent": "^5.0.0",
PREV: "https-proxy-agent": "^5.0.0",
PREV: "node-fetch": "^2.6.9",
PREV: "stream-events": "^1.0.5",
TEXT: "uuid": "^9.0.0"
NEXT: },
NEXT: "engines": {
NEXT: "node": ">=14"
NEXT: }
NEXT: },
NEXT: "node_modules/teeny-request/node_modules/agent-base": {
NEXT: "version": "6.0.2",
NEXT: "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
NEXT: "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
NEXT: "license": "MIT",

LINE: 3951
PREV: "engines": {
PREV: "node": ">= 6"
PREV: }
PREV: },
TEXT: "node_modules/teeny-request/node_modules/uuid": {
NEXT: "version": "9.0.1",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "funding": [
NEXT: "https://github.com/sponsors/broofa",
NEXT: "https://github.com/sponsors/ctavan"
NEXT: ],
NEXT: "license": "MIT",
NEXT: "optional": true,
NEXT: "bin": {

LINE: 3953
PREV: }
PREV: },
PREV: "node_modules/teeny-request/node_modules/uuid": {
PREV: "version": "9.0.1",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "funding": [
NEXT: "https://github.com/sponsors/broofa",
NEXT: "https://github.com/sponsors/ctavan"
NEXT: ],
NEXT: "license": "MIT",
NEXT: "optional": true,
NEXT: "bin": {
NEXT: "uuid": "dist/bin/uuid"
NEXT: }

LINE: 3962
PREV: ],
PREV: "license": "MIT",
PREV: "optional": true,
PREV: "bin": {
TEXT: "uuid": "dist/bin/uuid"
NEXT: }
NEXT: },
NEXT: "node_modules/text-table": {
NEXT: "version": "0.2.0",
NEXT: "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
NEXT: "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
NEXT: "dev": true,
NEXT: "license": "MIT"
NEXT: },
NEXT: "node_modules/toidentifier": {

LINE: 4064
PREV: "engines": {
PREV: "node": ">= 0.4.0"
PREV: }
PREV: },
TEXT: "node_modules/uuid": {
NEXT: "version": "11.1.0",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-11.1.0.tgz",
NEXT: "integrity": "sha512-0/A9rDy9P7cJ+8w1c9WD9V//9Wj15Ce2MPz8Ri6032usz+NfePxx5AcN3bN+r6ZL6jEo066/yNYB3tn4pQEx+A==",
NEXT: "funding": [
NEXT: "https://github.com/sponsors/broofa",
NEXT: "https://github.com/sponsors/ctavan"
NEXT: ],
NEXT: "license": "MIT",
NEXT: "bin": {
NEXT: "uuid": "dist/esm/bin/uuid"

LINE: 4066
PREV: }
PREV: },
PREV: "node_modules/uuid": {
PREV: "version": "11.1.0",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-11.1.0.tgz",
NEXT: "integrity": "sha512-0/A9rDy9P7cJ+8w1c9WD9V//9Wj15Ce2MPz8Ri6032usz+NfePxx5AcN3bN+r6ZL6jEo066/yNYB3tn4pQEx+A==",
NEXT: "funding": [
NEXT: "https://github.com/sponsors/broofa",
NEXT: "https://github.com/sponsors/ctavan"
NEXT: ],
NEXT: "license": "MIT",
NEXT: "bin": {
NEXT: "uuid": "dist/esm/bin/uuid"
NEXT: }
NEXT: },

LINE: 4074
PREV: "https://github.com/sponsors/ctavan"
PREV: ],
PREV: "license": "MIT",
PREV: "bin": {
TEXT: "uuid": "dist/esm/bin/uuid"
NEXT: }
NEXT: },
NEXT: "node_modules/vary": {
NEXT: "version": "1.1.2",
NEXT: "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
NEXT: "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
NEXT: "engines": {
NEXT: "node": ">= 0.8"
NEXT: }
NEXT: },

LINE: 4542
PREV: "mime": "^3.0.0",
PREV: "p-limit": "^3.0.1",
PREV: "retry-request": "^7.0.0",
PREV: "teeny-request": "^9.0.0",
TEXT: "uuid": "^8.0.0"
NEXT: },
NEXT: "dependencies": {
NEXT: "gcp-metadata": {
NEXT: "version": "6.1.1",
NEXT: "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-6.1.1.tgz",
NEXT: "integrity": "sha512-a4tiq7E0/5fTjxPAaH4jpjkSv/uCaU2p5KC6HVGrvl0cDjA8iBZv4vv1gyzlmK0ZUKqwpOyQMKzZQe3lTit77A==",
NEXT: "optional": true,
NEXT: "requires": {
NEXT: "gaxios": "^6.1.1",
NEXT: "google-logging-utils": "^0.0.2",

LINE: 4576
PREV: "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-0.0.2.tgz",
PREV: "integrity": "sha512-NEgUnEcBiP5HrPzufUkBzJOD/Sxsco3rLNo1F1TNf7ieU8ryUzBhqba8r756CjLX7rn3fHl6iLEwPYuqpoKgQQ==",
PREV: "optional": true
PREV: },
TEXT: "uuid": {
NEXT: "version": "8.3.2",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
NEXT: "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },
NEXT: "@grpc/grpc-js": {
NEXT: "version": "1.14.3",
NEXT: "resolved": "https://registry.npmjs.org/@grpc/grpc-js/-/grpc-js-1.14.3.tgz",

LINE: 4578
PREV: "optional": true
PREV: },
PREV: "uuid": {
PREV: "version": "8.3.2",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
NEXT: "integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },
NEXT: "@grpc/grpc-js": {
NEXT: "version": "1.14.3",
NEXT: "resolved": "https://registry.npmjs.org/@grpc/grpc-js/-/grpc-js-1.14.3.tgz",
NEXT: "integrity": "sha512-Iq8QQQ/7X3Sac15oB6p0FmUg/klxQvXLeileoqrTRGJYLV+/9tubbr9ipz0GKHjmXVsgFPo/+W+2cA8eNcR+XA==",
NEXT: "optional": true,

LINE: 5095
PREV: },
PREV: "buffer-equal-constant-time": {
PREV: "version": "1.0.1",
PREV: "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
TEXT: "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA=="
NEXT: },
NEXT: "bytes": {
NEXT: "version": "3.1.2",
NEXT: "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
NEXT: "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg=="
NEXT: },
NEXT: "call-bind": {
NEXT: "version": "1.0.7",
NEXT: "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.7.tgz",
NEXT: "integrity": "sha512-GHTSNSYICQ7scH7sZ+M2rFopRoLh8t2bLSW6BbgrtLsahOIB5iyAVJf9GjWK3cYTDaMj4XdBpM1cA6pIS0Kv2w==",

LINE: 5713
PREV: "locate-path": "^6.0.0",
PREV: "path-exists": "^4.0.0"
PREV: }
PREV: },
TEXT: "firebase-admin": {
NEXT: "version": "13.7.0",
NEXT: "resolved": "https://registry.npmjs.org/firebase-admin/-/firebase-admin-13.7.0.tgz",
NEXT: "integrity": "sha512-o3qS8zCJbApe7aKzkO2Pa380t9cHISqeSd3blqYTtOuUUUua3qZTLwNWgGUOss3td6wbzrZhiHIj3c8+fC046Q==",
NEXT: "requires": {
NEXT: "@fastify/busboy": "^3.0.0",
NEXT: "@firebase/database-compat": "^2.0.0",
NEXT: "@firebase/database-types": "^1.0.6",
NEXT: "@google-cloud/firestore": "^7.11.0",
NEXT: "@google-cloud/storage": "^7.19.0",
NEXT: "farmhash-modern": "^1.1.0",

LINE: 5715
PREV: }
PREV: },
PREV: "firebase-admin": {
PREV: "version": "13.7.0",
TEXT: "resolved": "https://registry.npmjs.org/firebase-admin/-/firebase-admin-13.7.0.tgz",
NEXT: "integrity": "sha512-o3qS8zCJbApe7aKzkO2Pa380t9cHISqeSd3blqYTtOuUUUua3qZTLwNWgGUOss3td6wbzrZhiHIj3c8+fC046Q==",
NEXT: "requires": {
NEXT: "@fastify/busboy": "^3.0.0",
NEXT: "@firebase/database-compat": "^2.0.0",
NEXT: "@firebase/database-types": "^1.0.6",
NEXT: "@google-cloud/firestore": "^7.11.0",
NEXT: "@google-cloud/storage": "^7.19.0",
NEXT: "farmhash-modern": "^1.1.0",
NEXT: "fast-deep-equal": "^3.1.1",
NEXT: "google-auth-library": "^10.6.1",

LINE: 5729
PREV: "google-auth-library": "^10.6.1",
PREV: "jsonwebtoken": "^9.0.0",
PREV: "jwks-rsa": "^3.1.0",
PREV: "node-forge": "^1.3.1",
TEXT: "uuid": "^11.0.2"
NEXT: },
NEXT: "dependencies": {
NEXT: "jsonwebtoken": {
NEXT: "version": "9.0.3",
NEXT: "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
NEXT: "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
NEXT: "requires": {
NEXT: "jws": "^4.0.1",
NEXT: "lodash.includes": "^4.3.0",
NEXT: "lodash.isboolean": "^3.0.3",

LINE: 5882
PREV: "extend": "^3.0.2",
PREV: "https-proxy-agent": "^7.0.1",
PREV: "is-stream": "^2.0.0",
PREV: "node-fetch": "^2.6.9",
TEXT: "uuid": "^9.0.1"
NEXT: },
NEXT: "dependencies": {
NEXT: "uuid": {
NEXT: "version": "9.0.1",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },

LINE: 5885
PREV: "node-fetch": "^2.6.9",
PREV: "uuid": "^9.0.1"
PREV: },
PREV: "dependencies": {
TEXT: "uuid": {
NEXT: "version": "9.0.1",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },
NEXT: "gcp-metadata": {
NEXT: "version": "8.1.2",
NEXT: "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-8.1.2.tgz",

LINE: 5887
PREV: },
PREV: "dependencies": {
PREV: "uuid": {
PREV: "version": "9.0.1",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },
NEXT: "gcp-metadata": {
NEXT: "version": "8.1.2",
NEXT: "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-8.1.2.tgz",
NEXT: "integrity": "sha512-zV/5HKTfCeKWnxG0Dmrw51hEWFGfcF2xiXqcA3+J90WDuP0SvoiSO5ORvcBsifmx/FoIjgQN3oNOGaQ5PhLFkg==",
NEXT: "requires": {

LINE: 6041
PREV: "object-hash": "^3.0.0",
PREV: "proto3-json-serializer": "^2.0.2",
PREV: "protobufjs": "^7.3.2",
PREV: "retry-request": "^7.0.0",
TEXT: "uuid": "^9.0.1"
NEXT: },
NEXT: "dependencies": {
NEXT: "gcp-metadata": {
NEXT: "version": "6.1.1",
NEXT: "resolved": "https://registry.npmjs.org/gcp-metadata/-/gcp-metadata-6.1.1.tgz",
NEXT: "integrity": "sha512-a4tiq7E0/5fTjxPAaH4jpjkSv/uCaU2p5KC6HVGrvl0cDjA8iBZv4vv1gyzlmK0ZUKqwpOyQMKzZQe3lTit77A==",
NEXT: "optional": true,
NEXT: "requires": {
NEXT: "gaxios": "^6.1.1",
NEXT: "google-logging-utils": "^0.0.2",

LINE: 6075
PREV: "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-0.0.2.tgz",
PREV: "integrity": "sha512-NEgUnEcBiP5HrPzufUkBzJOD/Sxsco3rLNo1F1TNf7ieU8ryUzBhqba8r756CjLX7rn3fHl6iLEwPYuqpoKgQQ==",
PREV: "optional": true
PREV: },
TEXT: "uuid": {
NEXT: "version": "9.0.1",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },
NEXT: "google-logging-utils": {
NEXT: "version": "1.1.3",
NEXT: "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-1.1.3.tgz",

LINE: 6077
PREV: "optional": true
PREV: },
PREV: "uuid": {
PREV: "version": "9.0.1",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },
NEXT: "google-logging-utils": {
NEXT: "version": "1.1.3",
NEXT: "resolved": "https://registry.npmjs.org/google-logging-utils/-/google-logging-utils-1.1.3.tgz",
NEXT: "integrity": "sha512-eAmLkjDjAFCVXg7A1unxHsLf961m6y17QFqXqAXGj/gVkKFrEICfStRfwUlGNfeCEjNRa32JEWOUTlYXPyyKvA=="
NEXT: },

LINE: 6555
PREV: },
PREV: "methods": {
PREV: "version": "1.1.2",
PREV: "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
TEXT: "integrity": "sha512-iclAHeNqNm68zFtnZ0e+1L2yUIdvzNoauKU4WBA3VvH/vPFieF7qfRlwUZU+DA9P9bPXIS90ulxoUoCH23sV2w=="
NEXT: },
NEXT: "mime": {
NEXT: "version": "3.0.0",
NEXT: "resolved": "https://registry.npmjs.org/mime/-/mime-3.0.0.tgz",
NEXT: "integrity": "sha512-jSCU7/VB1loIWBZe14aEYHU/+1UMEHoaO7qxCOVJOw9GgH72VAWppxNcjU+x9a2k3GSIBXNKxXQFqRvvZ7vr3A==",
NEXT: "optional": true
NEXT: },
NEXT: "mime-types": {
NEXT: "version": "2.1.35",
NEXT: "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",

LINE: 7065
PREV: "http-proxy-agent": "^5.0.0",
PREV: "https-proxy-agent": "^5.0.0",
PREV: "node-fetch": "^2.6.9",
PREV: "stream-events": "^1.0.5",
TEXT: "uuid": "^9.0.0"
NEXT: },
NEXT: "dependencies": {
NEXT: "agent-base": {
NEXT: "version": "6.0.2",
NEXT: "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
NEXT: "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
NEXT: "optional": true,
NEXT: "requires": {
NEXT: "debug": "4"
NEXT: }

LINE: 7096
PREV: "agent-base": "6",
PREV: "debug": "4"
PREV: }
PREV: },
TEXT: "uuid": {
NEXT: "version": "9.0.1",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },
NEXT: "text-table": {
NEXT: "version": "0.2.0",
NEXT: "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",

LINE: 7098
PREV: }
PREV: },
PREV: "uuid": {
PREV: "version": "9.0.1",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-9.0.1.tgz",
NEXT: "integrity": "sha512-b+1eJOlsR9K8HJpow9Ok3fiWOWSIcIzXodvv0rQjVoOVNpWMpxf1wZNpt4y9h10odCNrqnYp1OBzRktckBe3sA==",
NEXT: "optional": true
NEXT: }
NEXT: }
NEXT: },
NEXT: "text-table": {
NEXT: "version": "0.2.0",
NEXT: "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
NEXT: "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
NEXT: "dev": true

LINE: 7175
PREV: "version": "1.0.1",
PREV: "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
PREV: "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA=="
PREV: },
TEXT: "uuid": {
NEXT: "version": "11.1.0",
NEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-11.1.0.tgz",
NEXT: "integrity": "sha512-0/A9rDy9P7cJ+8w1c9WD9V//9Wj15Ce2MPz8Ri6032usz+NfePxx5AcN3bN+r6ZL6jEo066/yNYB3tn4pQEx+A=="
NEXT: },
NEXT: "vary": {
NEXT: "version": "1.1.2",
NEXT: "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
NEXT: "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg=="
NEXT: },
NEXT: "verror": {

LINE: 7177
PREV: "integrity": "sha512-pMZTvIkT1d+TFGvDOqodOclx0QWkkgi6Tdoa8gC8ffGAAqz9pzPTZWAybbsHHoED/ztMtkv/VoYTYyShUn81hA=="
PREV: },
PREV: "uuid": {
PREV: "version": "11.1.0",
TEXT: "resolved": "https://registry.npmjs.org/uuid/-/uuid-11.1.0.tgz",
NEXT: "integrity": "sha512-0/A9rDy9P7cJ+8w1c9WD9V//9Wj15Ce2MPz8Ri6032usz+NfePxx5AcN3bN+r6ZL6jEo066/yNYB3tn4pQEx+A=="
NEXT: },
NEXT: "vary": {
NEXT: "version": "1.1.2",
NEXT: "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
NEXT: "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg=="
NEXT: },
NEXT: "verror": {
NEXT: "version": "1.10.1",
NEXT: "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.1.tgz",

### FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\package.json

- Hits: 1

LINE: 18
PREV: },
PREV: "dependencies": {
PREV: "apn": "^2.2.0",
PREV: "axios": "^0.19.2",
TEXT: "firebase-admin": "^13.7.0",
NEXT: "firebase-functions": "^7.2.3"
NEXT: },
NEXT: "devDependencies": {
NEXT: "eslint": "^8.57.0",
NEXT: "eslint-plugin-promise": "^4.0.1",
NEXT: "firebase-functions-test": "^0.1.6"
NEXT: },
NEXT: "private": true
NEXT: }

### FILE: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\products\delivery.js

- Hits: 11

LINE: 3
PREV: const { onDocumentWritten } = require("firebase-functions/v2/firestore");
PREV: const { defineString } = require('firebase-functions/params');
TEXT: const { getFirestore } = require("firebase-admin/firestore");
NEXT: const admin = require("firebase-admin");
NEXT: 
NEXT: // Initialize Admin SDK once
NEXT: if (admin.apps.length === 0) {
NEXT: admin.initializeApp();
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Get the correct Firestore instance based on the DATABASE parameter
NEXT: */

LINE: 4
PREV: const { onDocumentWritten } = require("firebase-functions/v2/firestore");
PREV: const { defineString } = require('firebase-functions/params');
PREV: const { getFirestore } = require("firebase-admin/firestore");
TEXT: const admin = require("firebase-admin");
NEXT: 
NEXT: // Initialize Admin SDK once
NEXT: if (admin.apps.length === 0) {
NEXT: admin.initializeApp();
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Get the correct Firestore instance based on the DATABASE parameter
NEXT: */
NEXT: const getDb = () => getFirestore();

LINE: 8
PREV: const admin = require("firebase-admin");
PREV: 
PREV: // Initialize Admin SDK once
PREV: if (admin.apps.length === 0) {
TEXT: admin.initializeApp();
NEXT: }
NEXT: 
NEXT: /**
NEXT: * Get the correct Firestore instance based on the DATABASE parameter
NEXT: */
NEXT: const getDb = () => getFirestore();
NEXT: 
NEXT: exports.dispatch = onDocumentWritten({
NEXT: document: "vendor_orders/{orderID}"
NEXT: }, async (event) => {

LINE: 17
PREV: */
PREV: const getDb = () => getFirestore();
PREV: 
PREV: exports.dispatch = onDocumentWritten({
TEXT: document: "vendor_orders/{orderID}"
NEXT: }, async (event) => {
NEXT: 
NEXT: const firestore = getDb();
NEXT: 
NEXT: const orderData = event.data.after.data();
NEXT: const beforeData = event.data.before.data();
NEXT: const orderId = event.params.orderID;
NEXT: const documentRef = event.data.after.ref;
NEXT: 
NEXT: // 1. Guard Clauses & Skip Logic

LINE: 90
PREV: }
PREV: 
PREV: console.log('Config: minDeposit:', minimumDepositToRideAccept, 'acceptDuration:', orderAcceptRejectDuration);
PREV: 
TEXT: const snapshot = await firestore.collection("users")
NEXT: .where('role', '==', "driver")
NEXT: .where('isActive', '==', true)
NEXT: .where('serviceTypes', 'array-contains', 'delivery-service')
NEXT: .where('wallet_amount', '>=', minimumDepositToRideAccept)
NEXT: .get();
NEXT: 
NEXT: console.log(`Found ${snapshot.docs.length} drivers matching initial criteria.`);
NEXT: 
NEXT: let found = false;
NEXT: 

LINE: 165
PREV: 
PREV: // Handle timeout logic
PREV: if (orderAcceptRejectDuration > 0) {
PREV: setTimeout(async () => {
TEXT: const snap = await firestore.collection("vendor_orders").doc(orderId).get();
NEXT: const latestOrder = snap.data();
NEXT: 
NEXT: if (latestOrder && latestOrder.status === "Driver Pending") {
NEXT: console.log(`Timeout: Driver ${driver.email} failed to accept. Resetting order.`);
NEXT: const dSnap = await firestore.collection("users").doc(driverId).get();
NEXT: const dData = dSnap.data();
NEXT: 
NEXT: if (dData?.orderRequestData) {
NEXT: const filteredRequests = dData.orderRequestData.filter(oid => oid !== orderId);
NEXT: await firestore.collection('users').doc(driverId).update({ orderRequestData: filteredRequests });

LINE: 170
PREV: const latestOrder = snap.data();
PREV: 
PREV: if (latestOrder && latestOrder.status === "Driver Pending") {
PREV: console.log(`Timeout: Driver ${driver.email} failed to accept. Resetting order.`);
TEXT: const dSnap = await firestore.collection("users").doc(driverId).get();
NEXT: const dData = dSnap.data();
NEXT: 
NEXT: if (dData?.orderRequestData) {
NEXT: const filteredRequests = dData.orderRequestData.filter(oid => oid !== orderId);
NEXT: await firestore.collection('users').doc(driverId).update({ orderRequestData: filteredRequests });
NEXT: }
NEXT: 
NEXT: rejectedByDrivers.push(driverId);
NEXT: await firestore.collection('vendor_orders').doc(orderId).update({
NEXT: status: 'Order Accepted',

LINE: 175
PREV: const dData = dSnap.data();
PREV: 
PREV: if (dData?.orderRequestData) {
PREV: const filteredRequests = dData.orderRequestData.filter(oid => oid !== orderId);
TEXT: await firestore.collection('users').doc(driverId).update({ orderRequestData: filteredRequests });
NEXT: }
NEXT: 
NEXT: rejectedByDrivers.push(driverId);
NEXT: await firestore.collection('vendor_orders').doc(orderId).update({
NEXT: status: 'Order Accepted',
NEXT: rejectedByDrivers: rejectedByDrivers
NEXT: });
NEXT: }
NEXT: }, orderAcceptRejectDuration * 1000);
NEXT: }

LINE: 179
PREV: await firestore.collection('users').doc(driverId).update({ orderRequestData: filteredRequests });
PREV: }
PREV: 
PREV: rejectedByDrivers.push(driverId);
TEXT: await firestore.collection('vendor_orders').doc(orderId).update({
NEXT: status: 'Order Accepted',
NEXT: rejectedByDrivers: rejectedByDrivers
NEXT: });
NEXT: }
NEXT: }, orderAcceptRejectDuration * 1000);
NEXT: }
NEXT: 
NEXT: // Assign order to driver request list
NEXT: let currentRequests = driver.orderRequestData || [];
NEXT: if (!currentRequests.includes(orderId)) {

LINE: 193
PREV: if (!currentRequests.includes(orderId)) {
PREV: currentRequests.push(orderId);
PREV: }
PREV: // eslint-disable-next-line no-await-in-loop
TEXT: await firestore.collection('users').doc(driverId).update({ orderRequestData: currentRequests });
NEXT: }
NEXT: }
NEXT: }
NEXT: }
NEXT: 
NEXT: if (!found) {
NEXT: const futureTime = new Date(Date.now() + orderAutoCancelDuration * 60 * 1000);
NEXT: await firestore.collection('vendor_orders').doc(orderId).update({
NEXT: orderAutoCancelAt: admin.firestore.Timestamp.fromDate(futureTime)
NEXT: });

LINE: 201
PREV: }
PREV: 
PREV: if (!found) {
PREV: const futureTime = new Date(Date.now() + orderAutoCancelDuration * 60 * 1000);
TEXT: await firestore.collection('vendor_orders').doc(orderId).update({
NEXT: orderAutoCancelAt: admin.firestore.Timestamp.fromDate(futureTime)
NEXT: });
NEXT: console.log("No driver found for order #" + orderId);
NEXT: }
NEXT: }
NEXT: 
NEXT: if (orderData.status === "Driver Accepted") {
NEXT: await documentRef.set({ status: "Order Shipped" }, { merge: true });
NEXT: console.log("Order #" + orderId + " shipped");
NEXT: }


## Keputusan Sementara

- Belum patch.
- Belum deploy.
- Belum hapus user.
- Jika exports.deleteUser/admin.auth().deleteUser ditemukan, function ini bisa menjadi kandidat penghapus Firebase Auth resmi.
- Jika tidak ditemukan, berarti endpoint deleteUser yang dipanggil app belum ada source-nya di folder ini.