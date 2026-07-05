# SERVICE 44D BUILD INSTALL AFTER PRODUCT NULL GUARD

Generated: 07/02/2026 01:08:41
OLD_APK_TIME: 07/02/2026 00:05:00
OLD_APK_SIZE: 228161926

## dart format
TEXT_START
Formatted 1 file (0 changed) in 0.21 seconds.
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
BUILD FAILED in 27s
Running Gradle task 'assembleDebug'...                             27.8s
Gradle task assembleDebug failed with exit code 1
TEXT_END

APK_BUILD_NOT_TRUSTED_OR_FAILED
STATUS: SERVICE_44D_BUILD_INSTALL_AFTER_PRODUCT_NULL_GUARD_FAILED