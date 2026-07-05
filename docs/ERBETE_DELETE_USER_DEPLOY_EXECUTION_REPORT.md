# ERBETE DELETE USER DEPLOY EXECUTION REPORT

Generated: 06/28/2026 12:52:41

Mode: deploy functions:deleteUser only.

Root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function

Approval: SETUJU DEPLOY functions:deleteUser SAJA KE erbete-putra

## Precheck

firebase use:
erbete-putra

node --check:

node exit code: 0

lint:
 > lint > eslint . 
lint exit code: 0

PRECHECK_STATUS: OK

## Deploy
 [1m[37m===[39m Deploying to 'erbete-putra'...[22m  [36m[1mi [22m[39m deploying [1mfunctions[22m Running command: npm --prefix "$RESOURCE_DIR" run lint  > lint > eslint .  [32m[1m+ [22m[39m [32m[1mfunctions:[22m[39m Finished running [1mpredeploy[22m script. [36m[1mi  functions:[22m[39m preparing codebase [1mdefault[22m for deployment [36m[1mi  functions:[22m[39m ensuring required API [1mcloudfunctions.googleapis.com[22m is enabled... [36m[1mi  functions:[22m[39m ensuring required API [1mcloudbuild.googleapis.com[22m is enabled... [36m[1mi  artifactregistry:[22m[39m ensuring required API [1martifactregistry.googleapis.com[22m is enabled... [32m[1m+  functions:[22m[39m required API [1mcloudfunctions.googleapis.com[22m is enabled [32m[1m+  artifactregistry:[22m[39m required API [1martifactregistry.googleapis.com[22m is enabled [32m[1m+  functions:[22m[39m required API [1mcloudbuild.googleapis.com[22m is enabled [33m[1m! [22m[39m [1m[33mfunctions: [39m[22mpackage.json indicates an outdated version of firebase-functions. Please upgrade using [1mnpm install --save firebase-functions@latest[22m in your functions directory. [36m[1mi  functions:[22m[39m Loading and analyzing source code for codebase default to determine what to deploy Serving at port 8545  FirebaseAppError: Service account object must contain a string "project_id" property.     at new ServiceAccount (C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\node_modules\firebase-admin\lib\app\credential-internal.js:174:19)     at new ServiceAccountCredential (C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\node_modules\firebase-admin\lib\app\credential-internal.js:118:15)     at Object.cert (C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\node_modules\firebase-admin\lib\app\credential-factory.js:105:54)     at Object.<anonymous> (C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions\index.js:8:34)     at Module._compile (node:internal/modules/cjs/loader:1730:14)     at Object..js (node:internal/modules/cjs/loader:1895:10)     at Module.load (node:internal/modules/cjs/loader:1465:32)     at Function._load (node:internal/modules/cjs/loader:1282:12)     at TracingChannel.traceSync (node:diagnostics_channel:322:14)     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24) {   errorInfo: {     code: 'app/invalid-credential',     message: 'Service account object must contain a string "project_id" property.'   },   codePrefix: 'app' }   [1m[31mError:[39m[22m Functions codebase could not be analyzed successfully. It may have a syntax or runtime error
deploy exit code: 1

STATUS: DEPLOY_DELETE_USER_FAILED

Larangan setelah deploy:
- Jangan test UID user asli.
- Jalankan safe test UID dummy dulu.
- Jangan jalankan delete user dari app sebelum safe test OK.
- Jangan git add .
- Jangan commit/push.