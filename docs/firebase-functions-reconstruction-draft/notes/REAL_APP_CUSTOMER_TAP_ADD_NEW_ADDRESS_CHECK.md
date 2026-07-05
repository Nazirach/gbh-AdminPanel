# CUSTOMER TAP ADD NEW ADDRESS CHECK

Generated: 06/28/2026 19:52:30

Mode: one-action-then-screen-check. No patch. No deploy. No Firebase manual write. No order creation.

## Current Screen

- Screen: My Addresses
- State: Address not found
- Target button: Add New Address

## Action

- Add New Address bounds: [48,2080][1032,2226]
- Tap center: x=540 y=2153

## Rule

- Do not use real current location.
- Do not create order.
- Immediately capture XML and screenshot.

## Status

STATUS: CUSTOMER_TAP_ADD_NEW_ADDRESS_STARTED

## Screen Check After Action

- XML dump: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_tap_add_new_address_dump.xml
- Screenshot: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_tap_add_new_address.png

```text

C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_tap_add_new_address_dump.xml:1:<?xml 
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
bounds="[0,108][168,276]" /></node><node index="1" text="" resource-id="" class="android.widget.ScrollView" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" 
focused="false" scrollable="true" long-clickable="false" password="false" selected="false" bounds="[45,306][1035,2286]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Add a New Address" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,306][677,408]" /><node index="1" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="Enter your location details so we can deliver your orders 
quickly and accurately." checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,438][1035,558]" /><node index="2" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Set as Default Address" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[45,672][855,732]" /><node NAF="true" index="3" text="" resource-id="" 
class="android.widget.Switch" package="com.erbete.customer" content-desc="" checkable="true" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[882,652][1008,752]" /><node index="4" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="" checkable="false" checked="false" clickable="true" enabled="false" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,774][1035,993]" /><node index="5" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[933,885][1035,957]" /><node index="6" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="Flat/House/Floor/Building*" checkable="false" checked="false" clickable="false" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,1038][573,1098]" /><node NAF="true" index="7" text="" resource-id="" class="android.widget.EditText" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,1113][1035,1257]" /><node 
index="8" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Area/Sector/Locality*" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,1302][479,1362]" /><node NAF="true" index="9" text="" 
resource-id="" class="android.widget.EditText" package="com.erbete.customer" content-desc="" checkable="false" checked="false" 
clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[45,1377][1035,1521]" /><node index="10" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="Nearby Landmark" checkable="false" checked="false" clickable="false" enabled="true" 
focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,1566][396,1626]" /><node NAF="true" index="11" text="" resource-id="" class="android.widget.EditText" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,1641][1035,1785]" /><node 
index="12" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Save Address As" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,1953][368,2013]" /><node index="13" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="Home" checkable="false" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,2043][277,2163]" /><node index="14" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="Work" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[307,2043][526,2163]" /><node index="15" 
text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Hotel" checkable="false" 
checked="false" clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[556,2043][775,2163]" /><node index="16" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="other" checkable="false" checked="false" clickable="true" enabled="true" 
focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[805,2043][1027,2163]" /><node index="17" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="Save Address" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,2253][1035,2286]" 
/></node></node></node></node></node></node></node></node></node><node index="1" text="" 
resource-id="android:id/navigationBarBackground" class="android.view.View" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[0,2316][1080,2436]" /></node></hierarchy>



```

## Expected Result

- App should open address form or address map/search screen.
- If permission dialog appears, capture it before allowing.
- No order should be created.

## Final Status

STATUS: CUSTOMER_ADD_NEW_ADDRESS_SCREEN_CHECKED