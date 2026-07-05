# REAL APP ANDROID DEVICE PREFLIGHT REPORT

Generated: 06/28/2026 18:37:53

Mode: device-preflight only. No patch. No deploy. No source edit. No Firebase write.

## flutter devices

```text
Found 4 connected devices:
  Infinix X6853 (mobile) ΓÇó 115413747T003958 ΓÇó android-arm64  ΓÇó Android 15 (API 35)
  Windows (desktop)      ΓÇó windows          ΓÇó windows-x64    ΓÇó Microsoft Windows [Version 10.0.26200.8737]
  Chrome (web)           ΓÇó chrome           ΓÇó web-javascript ΓÇó Google Chrome 149.0.7827.200
  Edge (web)             ΓÇó edge             ΓÇó web-javascript ΓÇó Microsoft Edge 149.0.4022.80

Run "flutter emulators" to list and start any available device emulators.

If you expected another device to be detected, please run "flutter doctor" to diagnose potential issues. You may also try increasing the time to wait for connected devices with the "--device-timeout" flag. Visit https://flutter.dev/setup/ for troubleshooting tips.

```

## flutter emulators

```text
2 available emulators:

Id                    ΓÇó Name                  ΓÇó Manufacturer ΓÇó Platform

Medium_Phone_API_36.1 ΓÇó Medium Phone API 36.1 ΓÇó Generic      ΓÇó android
Pixel_5               ΓÇó Pixel 5               ΓÇó Google       ΓÇó android

To run an emulator, run 'flutter emulators --launch <emulator id>'.
To create a new emulator, run 'flutter emulators --create [--name xyz]'.

You can find more information on managing emulators at the links below:
  https://developer.android.com/studio/run/managing-avds
  https://developer.android.com/studio/command-line/avdmanager

```

## adb devices

```text
List of devices attached
115413747T003958	device


```

## Decision

- Real app trial cannot continue until Android emulator or Android phone is connected.
- Run only one Flutter app first, starting with customer.
- Do not run customer, driver, and vendor simultaneously until device is confirmed.

## Status

STATUS: ANDROID_DEVICE_PREFLIGHT_CREATED