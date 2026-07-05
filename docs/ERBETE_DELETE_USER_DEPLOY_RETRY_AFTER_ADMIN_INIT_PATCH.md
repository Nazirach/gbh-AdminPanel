# ERBETE DELETE USER DEPLOY RETRY AFTER ADMIN INIT PATCH

Generated: 06/28/2026 13:08:00

Mode: deploy functions:deleteUser only.

Root: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function

## Precheck

firebase use:
erbete-putra

node --check:

node exit code: 0

lint:
 > lint > eslint . 
lint exit code: 0

index.js checks:
- has serviceAccountKey: NO
- has admin.initializeApp empty: YES
- has onRequest: YES
- has safe test UID: YES

PRECHECK_STATUS: OK

## Deploy
 [1m[37m===[39m Deploying to 'erbete-putra'...[22m  [36m[1mi [22m[39m deploying [1mfunctions[22m Running command: npm --prefix "$RESOURCE_DIR" run lint  > lint > eslint .  [32m[1m+ [22m[39m [32m[1mfunctions:[22m[39m Finished running [1mpredeploy[22m script. [36m[1mi  functions:[22m[39m preparing codebase [1mdefault[22m for deployment [36m[1mi  functions:[22m[39m ensuring required API [1mcloudfunctions.googleapis.com[22m is enabled... [36m[1mi  functions:[22m[39m ensuring required API [1mcloudbuild.googleapis.com[22m is enabled... [36m[1mi  artifactregistry:[22m[39m ensuring required API [1martifactregistry.googleapis.com[22m is enabled... [33m[1m! [22m[39m [1m[33mfunctions: [39m[22mpackage.json indicates an outdated version of firebase-functions. Please upgrade using [1mnpm install --save firebase-functions@latest[22m in your functions directory. [36m[1mi  functions:[22m[39m Loading and analyzing source code for codebase default to determine what to deploy Serving at port 8806  [36m[1mi  extensions:[22m[39m ensuring required API [1mfirebaseextensions.googleapis.com[22m is enabled... [32m[1m+  extensions:[22m[39m required API [1mfirebaseextensions.googleapis.com[22m is enabled [36m[1mi [22m[39m [36m[1mfunctions: [22m[39mLoaded environment variables from .env. [36m[1mi  functions:[22m[39m preparing [1mfunctions[22m directory for uploading... [36m[1mi [22m[39m [36m[1mfunctions:[22m[39m packaged [1mC:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\order-tracking-functions-extract\Order Tracking Firebase Function\functions[22m (94.37 KB) for uploading [36m[1mi  functions:[22m[39m ensuring required API [1mrun.googleapis.com[22m is enabled... [36m[1mi  functions:[22m[39m ensuring required API [1meventarc.googleapis.com[22m is enabled... [36m[1mi  functions:[22m[39m ensuring required API [1mpubsub.googleapis.com[22m is enabled... [36m[1mi  functions:[22m[39m ensuring required API [1mstorage.googleapis.com[22m is enabled... [33m[1m!  functions:[22m[39m missing required API [1mrun.googleapis.com[22m. Enabling now... [32m[1m+  functions:[22m[39m required API [1mpubsub.googleapis.com[22m is enabled [33m[1m!  functions:[22m[39m missing required API [1meventarc.googleapis.com[22m. Enabling now... [32m[1m+  functions:[22m[39m required API [1mstorage.googleapis.com[22m is enabled [36m[1mi  functions:[22m[39m generating the service identity for [1mpubsub.googleapis.com[22m... [36m[1mi  functions:[22m[39m generating the service identity for [1meventarc.googleapis.com[22m... [32m[1m+  functions:[22m[39m [1mfunctions[22m source uploaded successfully  [1m[31mError:[39m[22m [deleteUser(us-central1)] Changing from a callable function to an HTTPS function is not allowed. Please delete your function and create a new one instead.
deploy exit code: 1

STATUS: DEPLOY_DELETE_USER_RETRY_FAILED

Larangan setelah deploy:
- Jangan test UID user asli.
- Jalankan safe test UID dummy dulu.
- Jangan jalankan delete user dari app sebelum safe test OK.
- Jangan git add .
- Jangan commit/push.