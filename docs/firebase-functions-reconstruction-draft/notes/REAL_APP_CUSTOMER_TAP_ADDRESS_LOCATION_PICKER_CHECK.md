# CUSTOMER TAP ADDRESS LOCATION PICKER CHECK

Generated: 06/28/2026 20:21:49

Mode: open location picker only. No patch. No deploy. No Firebase manual write. No order creation.

## Reason

- Manual Save Address showed message: Please select location.
- Address text fields are filled, but map/location field is still missing.

## Confirmed Address Data

- Flat/House/Floor/Building: Audit House 01
- Area/Sector/Locality: Audit Area
- Nearby Landmark: empty

## Action

- Tap address location/map picker area.
- Verified bounds from previous dump: [45,661][1035,880]
- Tap center: x=540 y=770

## Rule

- Do not use real current location yet.
- Do not save address yet.
- Capture XML and screenshot immediately.

## Status

STATUS: CUSTOMER_TAP_ADDRESS_LOCATION_PICKER_STARTED

## Screen Check After Tap

- XML dump: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_tap_address_location_picker_dump.xml
- Screenshot: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_tap_address_location_picker.png

```text

C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_tap_address_location_picker_dump.xml:1:<?xml 
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
checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[0,0][1080,2316]"><node index="0" text="" resource-id="" 
class="android.widget.FrameLayout" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[0,0][1080,2316]"><node index="0" text="" resource-id="" class="android.widget.FrameLayout" package="com.erbete.customer" 
content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2316]"><node index="0" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Google Maps" checkable="false" checked="false" 
clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[0,0][1080,2316]" /><node index="1" text="" resource-id="" class="android.widget.RelativeLayout" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2316]"><node 
index="0" text="" resource-id="" class="android.widget.LinearLayout" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[924,2028][1050,2271]"><node index="0" text="" resource-id="" 
class="android.widget.ImageView" package="com.erbete.customer" content-desc="Perbesar" checkable="false" checked="false" 
clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[924,2028][1050,2148]" /><node index="1" text="" resource-id="" class="android.widget.ImageView" 
package="com.erbete.customer" content-desc="Perkecil" checkable="false" checked="false" clickable="true" enabled="true" 
focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[924,2148][1050,2271]" /></node></node><node index="2" text="" resource-id="" class="android.widget.RelativeLayout" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2316]"><node 
index="0" text="" resource-id="" class="android.widget.ImageView" package="com.erbete.customer" content-desc="" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[15,2235][195,2301]" /></node></node></node></node><node NAF="true" index="1" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" 
clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[48,180][180,312]" /><node index="2" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="Search place..." checkable="false" checked="false" clickable="true" enabled="true" 
focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[48,372][1032,516]" /><node index="3" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="G8JH+FXM, Kecamatan Lueng Bata, Aceh, Indonesia" checkable="false" checked="false" clickable="false" enabled="true" 
focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[90,1684][990,1822]" /><node index="4" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="Confirm Location" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[90,1852][990,1986]" 
/></node></node></node></node></node></node></node></node><node index="1" text="" resource-id="android:id/navigationBarBackground" 
class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" 
enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[0,2316][1080,2436]" /></node></hierarchy>



```

## Expected Result

- App may open map/location picker.
- App may ask for location permission.
- Do not allow real current location until we inspect the screen.

## Final Status

STATUS: CUSTOMER_ADDRESS_LOCATION_PICKER_SCREEN_CHECKED