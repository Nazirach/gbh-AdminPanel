# CUSTOMER SAVE ADDRESS THEN CHECK

Generated: 06/28/2026 20:11:21

Mode: select address type and save address once, then screen-check. No patch. No deploy. No Firebase manual write. No order creation.

## Confirmed Address Data Before Save

- Flat/House/Floor/Building: Audit House 01
- Area/Sector/Locality: Audit Area
- Nearby Landmark: empty
- Address type target: Home

## Action

- Tap Home center: x=161 y=1281
- Tap Save Address center: x=540 y=1475

## Rule

- Save address only once.
- Do not create order.
- Do not open driver/vendor app.
- Immediately capture XML and screenshot.

## Status

STATUS: CUSTOMER_SAVE_ADDRESS_STARTED

## Screen Check After Save

- XML dump: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_save_address_dump.xml
- Screenshot: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_save_address.png

```text

C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_save_address_dump.xml:1:<?xml version='1.0' 
encoding='UTF-8' standalone='yes' ?><hierarchy rotation="0"><node index="0" text="" resource-id="" 
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
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Enter your location details 
so we can deliver your orders quickly and accurately." checkable="false" checked="false" clickable="false" enabled="true" 
focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,325][1035,445]" /><node index="1" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="Set as Default Address" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,559][855,619]" /><node 
NAF="true" index="2" text="" resource-id="" class="android.widget.Switch" package="com.erbete.customer" content-desc="" 
checkable="true" checked="false" clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[882,538][1008,639]" /><node index="3" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" 
enabled="false" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,661][1035,880]" /><node index="4" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[933,772][1035,844]" /><node index="5" text="" 
resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Flat/House/Floor/Building*" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[45,925][573,985]" /><node index="6" text="Audit House 01" resource-id="" 
class="android.widget.EditText" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,1000][1035,1144]" /><node index="7" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="Area/Sector/Locality*" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,1189][479,1249]" /><node 
index="8" text="Audit Area" resource-id="" class="android.widget.EditText" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,1264][1035,1408]" /><node index="9" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="Nearby Landmark" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[45,1453][396,1513]" /><node NAF="true" index="10" text="" resource-id="" class="android.widget.EditText" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,1528][1035,1672]" /><node 
index="11" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Save Address As" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,1840][368,1900]" /><node index="12" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="Home" checkable="false" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,1930][277,2050]" /><node index="13" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="Work" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[307,1930][526,2050]" /><node index="14" 
text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Hotel" checkable="false" 
checked="false" clickable="true" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[556,1930][775,2050]" /><node index="15" text="" resource-id="" class="android.view.View" 
package="com.erbete.customer" content-desc="other" checkable="false" checked="false" clickable="true" enabled="true" 
focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[805,1930][1027,2050]" /><node index="16" text="" resource-id="" class="android.view.View" package="com.erbete.customer" 
content-desc="Save Address" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,2140][1035,2286]" 
/></node></node></node></node></node></node></node></node></node><node index="1" text="" 
resource-id="android:id/navigationBarBackground" class="android.view.View" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[0,2316][1080,2436]" /></node></hierarchy>



```

## Expected Result

- Address should be saved or app should return to address list/home/location flow.
- No order should be created.
- Any error should be captured.

## Final Status

STATUS: CUSTOMER_SAVE_ADDRESS_SCREEN_CHECKED