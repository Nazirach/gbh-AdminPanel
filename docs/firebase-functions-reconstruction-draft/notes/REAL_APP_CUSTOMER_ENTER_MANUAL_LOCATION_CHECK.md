# CUSTOMER ENTER MANUAL LOCATION CHECK

Generated: 06/28/2026 19:50:05

Mode: one-action-then-screen-check. No patch. No deploy. No Firebase manual write. No order creation.

## Current Screen

- Screen: Location selection after successful signup/login
- Available options: Use current location, Set from map, Enter Manually location

## Action

- Target option: Enter Manually location
- Bounds: [283,2086][797,2155]
- Tap center: x=540 y=2120

## Rule

- Do not use real current location.
- Do not create order.
- Immediately capture XML and screenshot.

## Status

STATUS: CUSTOMER_ENTER_MANUAL_LOCATION_STARTED

## Screen Check After Action

- XML dump: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_enter_manual_location_dump.xml
- Screenshot: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_enter_manual_location.png

```text

C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_enter_manual_location_dump.xml:1:<?xml 
version='1.0' encoding='UTF-8' standalone='yes' ?><hierarchy rotation="0"><node index="0" text="" resource-id="" 
class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.widget.LinearLayout" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node 
index="0" text="" resource-id="android:id/content" class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" 
class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.widget.FrameLayout" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" 
focused="true" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[0,0][1080,2316]"><node index="0" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2316]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[0,0][1080,276]"><node NAF="true" index="0" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[0,108][168,276]" /></node><node index="1" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="My Addresses" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[48,276][504,378]" /><node index="2" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Allows users to view, manage, add, or edit 
delivery addresses." checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[48,393][1032,513]" /><node index="3" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Address not found" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[321,1263][759,1341]" /><node index="4" text="" resource-id="" 
class="android.widget.ImageView" package="com.erbete.customer" content-desc="Add New Address" checkable="false" checked="false" 
clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[48,2080][1032,2226]" /></node></node></node></node></node></node></node></node><node index="1" text="" 
resource-id="android:id/navigationBarBackground" class="android.view.View" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[0,2316][1080,2436]" /></node></hierarchy>



```

## Expected Result

- App should open manual address/location form or location search screen.
- If permission dialog appears, capture it before allowing.
- No order should be created.

## Final Status

STATUS: CUSTOMER_ENTER_MANUAL_LOCATION_SCREEN_CHECKED