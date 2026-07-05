# APK REBUILD INSTALL AFTER PAGECONTROLLER GUARD

Generated: 07/01/2026 12:54:56
Mode: BUILD + INSTALL.

## dart format
TEXT_START
Formatted 2 files (0 changed) in 0.09 seconds.
TEXT_END

## flutter build apk --debug
TEXT_START
Running Gradle task 'assembleDebug'...                          
Target debug_android_application failed: PathExistsException: Cannot copy file to 'C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\build\app\intermediates\flutter\debug\flutter_assets\assets/fonts/essential_sans_Regular.otf', path = 'C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\assets\fonts\essential_sans_Regular.otf' (OS Error: Cannot create a file when that file already exists, errno = 183)
System.Management.Automation.RemoteException
System.Management.Automation.RemoteException
FAILURE: Build failed with an exception.
System.Management.Automation.RemoteException
* What went wrong:
Execution failed for task ':app:compileFlutterBuildDebug'.
> Process 'command 'C:\src\Flutter\bin\flutter.bat'' finished with non-zero exit value 1
System.Management.Automation.RemoteException
* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.
System.Management.Automation.RemoteException
BUILD FAILED in 2m 30s
Running Gradle task 'assembleDebug'...                            151.0s
Gradle task assembleDebug failed with exit code 1
TEXT_END

APK: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\build\app\outputs\flutter-apk\app-debug.apk
APK_SIZE: 266296090
APK_TIME: 07/01/2026 05:37:26

## adb install
TEXT_START
Performing Streamed Install
Success
TEXT_END

STATUS: APK_REBUILD_INSTALL_AFTER_PAGECONTROLLER_GUARD_PASS