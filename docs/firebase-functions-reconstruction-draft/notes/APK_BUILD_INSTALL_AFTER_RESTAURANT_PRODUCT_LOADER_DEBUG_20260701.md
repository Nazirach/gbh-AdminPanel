# APK BUILD INSTALL AFTER RESTAURANT PRODUCT LOADER DEBUG

Generated: 07/01/2026 18:26:59

## dart format
TEXT_START
Formatted 2 files (0 changed) in 0.10 seconds.
TEXT_END

## flutter build apk --debug
TEXT_START
Running Gradle task 'assembleDebug'...                          
lib/controllers/restaurant_details_controller.dart:91:136: Error: The getter 'section_id' isn't defined for the type 'VendorModel'.
 - 'VendorModel' is from 'package:customer/models/vendor_model.dart' ('lib/models/vendor_model.dart').
Try correcting the name to the name of an existing getter, or defining a getter or field named 'section_id'.
        "STEP47D_RESTAURANT_DETAIL_VENDOR_ARG: id=${vendorModel.value.id} title=${vendorModel.value.title} section=${vendorModel.value.section_id} zone=${vendorModel.value.zoneId}",
                                                                                          ^^^^^^^^^^
Target kernel_snapshot_program failed: Exception
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
BUILD FAILED in 16s
Running Gradle task 'assembleDebug'...                             17.3s
Gradle task assembleDebug failed with exit code 1
TEXT_END

APK_BUILD_NOT_TRUSTED_OR_FAILED
STATUS: APK_BUILD_INSTALL_AFTER_RESTAURANT_PRODUCT_LOADER_DEBUG_FAILED