# CUSTOMER FILL ADDRESS VISIBLE DATA CHECK

Generated: 06/28/2026 19:56:38

Mode: fill visible address fields, then screen-check. No patch. No deploy. No Firebase manual write. No order creation.

## Current Screen

- Screen: Add a New Address
- Required visible fields: Flat/House/Floor/Building, Area/Sector/Locality
- Optional visible field: Nearby Landmark
- Address type: Home

## Input Data

- Flat/House/Floor/Building: Audit House 01
- Area/Sector/Locality: Audit Area Lhokseumawe
- Nearby Landmark: Audit Landmark
- Save Address As: Home

## Rule

- Fill maximum visible data only.
- Do not tap Save Address yet.
- Immediately capture XML and screenshot.

## Status

STATUS: CUSTOMER_FILL_ADDRESS_VISIBLE_DATA_STARTED

## Screen Check After Input

- XML dump: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_fill_address_visible_data_dump.xml
- Screenshot: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_fill_address_visible_data.png

```text

C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_fill_address_visible_data_dump.xml:1:<?xml 
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
password="false" selected="false" bounds="[0,0][1080,2436]"><node index="0" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[0,0][1080,2436]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[0,0][1080,276]"><node NAF="true" index="0" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[0,108][168,276]" /></node><node index="1" text="" resource-id="" class="android.widget.ScrollView" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" 
focused="false" scrollable="true" long-clickable="false" password="false" selected="false" bounds="[45,306][1035,1519]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Add a New Address" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,306][677,329]" /><node index="1" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="Enter your location details so we can deliver your orders 
quickly and accurately." checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,359][1035,479]" /><node index="2" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Set as Default Address" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[45,593][855,653]" /><node NAF="true" index="3" text="" resource-id="" 
class="android.widget.Switch" package="com.erbete.customer" content-desc="" checkable="true" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[882,573][1008,673]" /><node index="4" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="" checkable="false" checked="false" clickable="true" enabled="false" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,695][1035,914]" /><node index="5" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[933,806][1035,878]" /><node index="6" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="Flat/House/Floor/Building*" checkable="false" checked="false" clickable="false" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,959][573,1019]" /><node index="7" text="Audit House 01" resource-id="" class="android.widget.EditText" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,1034][1035,1178]" /><node 
index="8" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Area/Sector/Locality*" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,1223][479,1283]" /><node index="9" text="Audit Area 
LhokseumaweyAudit Landmark" resource-id="" class="android.widget.EditText" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="true" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,1298][1035,1442]" /><node index="10" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="Nearby Landmark" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[45,1487][396,1519]" /></node></node></node></node></node></node></node></node></node><node index="1" 
text="" resource-id="android:id/navigationBarBackground" class="android.view.View" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[0,2316][1080,2436]" /></node></hierarchy>



```

## Expected Result

- Flat/House/Floor/Building should contain: Audit House 01
- Area/Sector/Locality should contain: Audit Area Lhokseumawe
- Nearby Landmark should contain: Audit Landmark
- Home should be selected or tapped.
- Save Address should be visible, but not tapped yet.

## Final Status

STATUS: CUSTOMER_ADDRESS_VISIBLE_DATA_SCREEN_CHECKED