# CUSTOMER FILL LAST NAME THEN CHECK

Generated: 06/28/2026 19:25:48

Mode: one-field-input-then-screen-check. No patch. No deploy. No Firebase manual write. No account creation.

## Action

- Current screen: Sign up form
- Confirmed previous field: First Name = Audit
- Target field: Last Name
- Field bounds: [555,759][1035,903]
- Tap center: x=795 y=831
- Input value: Customer

## Rule

- Fill only Last Name.
- Immediately capture XML and screenshot.
- Do not fill Email until this field is confirmed.

## Status

STATUS: CUSTOMER_FILL_LAST_NAME_STARTED

## Screen Check After Action

- XML dump: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_fill_last_name_dump.xml
- Screenshot: C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_fill_last_name.png

```text

C:\deploy\adminpanel\docs\firebase-functions-reconstruction-draft\notes\customer_after_fill_last_name_dump.xml:1:<?xml 
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
password="false" selected="false" bounds="[0,0][1080,276]"><node index="0" text="" resource-id="" class="android.widget.Button" 
package="com.erbete.customer" content-desc="Skip" checkable="false" checked="false" clickable="true" enabled="true" 
focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[882,132][1080,252]" /></node><node index="1" text="" resource-id="" class="android.widget.ScrollView" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="false" enabled="true" focusable="true" 
focused="false" scrollable="true" long-clickable="false" password="false" selected="false" bounds="[45,306][1035,1549]"><node 
index="0" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Sign up to explore all our 
services and start shopping, riding, and more." checkable="false" checked="false" clickable="false" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,306][1035,612]" /><node 
index="1" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="First Name*" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,684][272,744]" /><node index="2" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="Last Name*" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[555,684][781,744]" /><node index="3" text="Audit" resource-id="" class="android.widget.EditText" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,759][525,903]" /><node 
index="4" text="Customer" resource-id="" class="android.widget.EditText" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="true" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[555,759][1035,903]" /><node index="5" text="" resource-id="" 
class="android.view.View" package="com.erbete.customer" content-desc="Email Address*" checkable="false" checked="false" 
clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" 
selected="false" bounds="[45,948][336,1008]" /><node NAF="true" index="6" text="" resource-id="" class="android.widget.EditText" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,1023][1035,1167]" /><node 
index="7" text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Mobile Number*" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[45,1212][356,1272]" /><node index="8" text="" resource-id="" 
class="android.widget.EditText" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[45,1287][1035,1431]"><node index="0" text="" resource-id="" class="android.widget.ImageView" package="com.erbete.customer" 
content-desc="+93" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" focused="false" 
scrollable="false" long-clickable="false" password="false" selected="false" bounds="[45,1287][343,1431]" /></node><node index="9" 
text="" resource-id="" class="android.view.View" package="com.erbete.customer" content-desc="Password*" checkable="false" 
checked="false" clickable="false" enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" 
password="false" selected="false" bounds="[45,1476][252,1536]" /><node NAF="true" index="10" text="" resource-id="" 
class="android.widget.ImageView" package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" 
enabled="true" focusable="true" focused="false" scrollable="false" long-clickable="false" password="false" selected="false" 
bounds="[933,1590][999,1656]" /><node NAF="true" index="11" text="" resource-id="" class="android.widget.ImageView" 
package="com.erbete.customer" content-desc="" checkable="false" checked="false" clickable="true" enabled="true" focusable="true" 
focused="false" scrollable="false" long-clickable="false" password="false" selected="false" bounds="[933,1854][999,1920]" 
/></node></node></node></node></node></node></node></node></node><node index="1" text="" 
resource-id="android:id/navigationBarBackground" class="android.view.View" package="com.erbete.customer" content-desc="" 
checkable="false" checked="false" clickable="false" enabled="true" focusable="false" focused="false" scrollable="false" 
long-clickable="false" password="false" selected="false" bounds="[0,2316][1080,2436]" /></node></hierarchy>



```

## Expected Result

- First Name field should contain: Audit
- Last Name field should contain: Customer
- Email/Mobile/Password should still be empty.

## Final Status

STATUS: CUSTOMER_LAST_NAME_SCREEN_CHECKED_AFTER_INPUT