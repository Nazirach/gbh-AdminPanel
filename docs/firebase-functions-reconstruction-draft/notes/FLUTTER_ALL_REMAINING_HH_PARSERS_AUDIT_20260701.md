# FLUTTER ALL REMAINING HH PARSERS AUDIT

Generated: 07/01/2026 05:13:52
Mode: READ ONLY.
Customer: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer


## Pattern: DateFormat.Hm().format(time)
TEXT_START
NO_MATCH
TEXT_END

## Pattern: DateFormat.Hm()
TEXT_START
NO_MATCH
TEXT_END

## Pattern: DateFormat("dd-MM-yyyy HH:mm").parse
TEXT_START

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
LINE: 1643

    try {
      return DateFormat("dd-MM-yyyy HH:mm").parse("$date $normalized");
    } catch (e) {
      print(
        "STEP45B_WORKING_HOURS_PARSE_ERROR: date=$date rawTime=$rawTime normalized=$normalized error=$e",
      );
      return null;
    }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 462

  try {
    return DateFormat("dd-MM-yyyy HH:mm").parse("$date $normalized");
  } catch (e) {
    print(
      "STEP46F_DINE_IN_WORKING_HOURS_PARSE_ERROR: date=$date rawTime=$rawTime normalized=$normalized error=$e",
    );
    return null;
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 483
        ':' +
        time.minute.toString().padLeft(2, '0');
    return DateFormat("dd-MM-yyyy HH:mm").parse("$date $normalized");
  } catch (e) {
    print(
      "STEP46K_DINE_IN_SELECTED_TIME_PARSE_ERROR: date=$date time=$time error=$e",
    );
    return null;
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart
LINE: 81
    for (var element in provider.days) {
      if (day == element.toString()) {
        final start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.startTime}");
        final end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.endTime}");
        if (isCurrentDateInRange(start, end)) {
          isOpen.value = true;
        }
      }
    }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart
LINE: 82
      if (day == element.toString()) {
        final start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.startTime}");
        final end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.endTime}");
        if (isCurrentDateInRange(start, end)) {
          isOpen.value = true;
        }
      }
    }
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
LINE: 178
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.from}");
            var end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.to}");
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
LINE: 179
          for (var element in element.timeslot!) {
            var start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.from}");
            var end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.to}");
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }
      }
TEXT_END

## Pattern: DateFormat(
TEXT_START

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 419
  static bool statusCheckOpenORClose({required VendorModel vendorModel}) {
    final now = DateTime.now();
    var day = DateFormat('EEEE', 'en_US').format(now);
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.workingHours ?? []) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = DateFormat(

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 420
    final now = DateTime.now();
    var day = DateFormat('EEEE', 'en_US').format(now);
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.workingHours ?? []) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = DateFormat(
              "dd-MM-yyyy HH:mm",

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 425
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = DateFormat(
              "dd-MM-yyyy HH:mm",
            ).parse("$date ${element.from}");
            var end = DateFormat(
              "dd-MM-yyyy HH:mm",
            ).parse("$date ${element.to}");
            if (isCurrentDateInRange(start, end)) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 428
              "dd-MM-yyyy HH:mm",
            ).parse("$date ${element.from}");
            var end = DateFormat(
              "dd-MM-yyyy HH:mm",
            ).parse("$date ${element.to}");
            if (isCurrentDateInRange(start, end)) {
              return true;
            }
          }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 634
  static String timestampToDate(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('MMM dd,yyyy').format(dateTime);
  }

  static String timestampToDateTime(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('MMM dd,yyyy hh:mm aa').format(dateTime);
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 639
  static String timestampToDateTime(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('MMM dd,yyyy hh:mm aa').format(dateTime);
  }

  static String timestampToDateTime2(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('EEE MMM d yyyy').format(dateTime);
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 644
  static String timestampToDateTime2(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('EEE MMM d yyyy').format(dateTime);
  }

  static String timestampToTime(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('hh:mm aa').format(dateTime);
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 649
  static String timestampToTime(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('hh:mm aa').format(dateTime);
  }

  static String timestampToDateChat(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('dd/MM/yyyy').format(dateTime);
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 654
  static String timestampToDateChat(Timestamp timestamp) {
    DateTime dateTime = timestamp.toDate();
    return DateFormat('dd/MM/yyyy').format(dateTime);
  }

  static DateTime stringToDate(String openDineTime) {
    return DateFormat('HH:mm').parse(
      DateFormat('HH:mm').format(
        DateFormat("hh:mm a").parse(

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 658

  static DateTime stringToDate(String openDineTime) {
    return DateFormat('HH:mm').parse(
      DateFormat('HH:mm').format(
        DateFormat("hh:mm a").parse(
          (Intl.getCurrentLocale() == "en_US")
              ? openDineTime
              : openDineTime.toLowerCase(),
        ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 659
  static DateTime stringToDate(String openDineTime) {
    return DateFormat('HH:mm').parse(
      DateFormat('HH:mm').format(
        DateFormat("hh:mm a").parse(
          (Intl.getCurrentLocale() == "en_US")
              ? openDineTime
              : openDineTime.toLowerCase(),
        ),
      ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 660
    return DateFormat('HH:mm').parse(
      DateFormat('HH:mm').format(
        DateFormat("hh:mm a").parse(
          (Intl.getCurrentLocale() == "en_US")
              ? openDineTime
              : openDineTime.toLowerCase(),
        ),
      ),
    );

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 984
      newString = newString.replaceAll(
        "{date}",
        DateFormat('yyyy-MM-dd').format(orderModel.createdAt!.toDate()),
      );
      newString = newString.replaceAll(
        "{address}",
        orderModel.address?.getFullAddress() ?? '',
      );
      newString = newString.replaceAll(

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 1187
    DateTime dateTime = timestamp.toDate();

    return DateFormat("d-MM-yyyy h:mm a").format(dateTime);
  }

  /// Calculate tax amount for a single tax model
  static double getTaxValue({
    required String amount,
    required TaxModel taxModel,

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\constant\constant.dart
LINE: 1241

  static String dateAndTimeFormatTimestamp(Timestamp? timestamp) {
    var format = DateFormat('dd MMM yyyy hh:mm aa'); // <- use skeleton here
    return format.format(timestamp!.toDate());
  }

  static String getTaxDisplayText(List<TaxModel>? taxes) {
    if (taxes == null || taxes.isEmpty) return '';


FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cab_order_details_controller.dart
LINE: 56
  String formatDate(Timestamp timestamp) {
    final dateTime = timestamp.toDate();
    return DateFormat("dd MMM yyyy, hh:mm a").format(dateTime);
  }

  Future<void> fetchDriverDetails() async {
    if (cabOrder.value.driverId != null) {
      await FireStoreUtils.getUserProfile(cabOrder.value.driverId ?? '').then((value) {
        if (value != null) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
LINE: 261
        Constant.specialDiscountOffer == true) {
      final now = DateTime.now();
      final day = DateFormat('EEEE', 'en_US').format(now);
      final date = DateFormat('dd-MM-yyyy').format(now);

      for (var element in vendorModel.value.specialDiscount!) {
        if (day == element.day.toString()) {
          for (var slot in element.timeslot ?? []) {
            if (slot.discountType == "delivery") {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
LINE: 262
      final now = DateTime.now();
      final day = DateFormat('EEEE', 'en_US').format(now);
      final date = DateFormat('dd-MM-yyyy').format(now);

      for (var element in vendorModel.value.specialDiscount!) {
        if (day == element.day.toString()) {
          for (var slot in element.timeslot ?? []) {
            if (slot.discountType == "delivery") {
              final start = _step45bSafeParseWorkingDateTime(date, slot.from);

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
LINE: 1563
    bool isOpen = false;
    final now = selectedDateTime;
    var day = DateFormat('EEEE', 'en_US').format(now);
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.value.workingHours!) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = _step45bSafeParseWorkingDateTime(date, element.from);

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
LINE: 1564
    final now = selectedDateTime;
    var day = DateFormat('EEEE', 'en_US').format(now);
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.value.workingHours!) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = _step45bSafeParseWorkingDateTime(date, element.from);
            var end = _step45bSafeParseWorkingDateTime(date, element.to);

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart
LINE: 1643

    try {
      return DateFormat("dd-MM-yyyy HH:mm").parse("$date $normalized");
    } catch (e) {
      print(
        "STEP45B_WORKING_HOURS_PARSE_ERROR: date=$date rawTime=$rawTime normalized=$normalized error=$e",
      );
      return null;
    }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 70

    DateTime dt = selectedDate.value.toDate();
    String hour = DateFormat("kk:mm").format(
      DateFormat('hh:mm a').parse(
        (Intl.getCurrentLocale() == "en_US")
            ? selectedTimeSlot.value
            : selectedTimeSlot.value.toLowerCase(),
      ),
    );

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 71
    DateTime dt = selectedDate.value.toDate();
    String hour = DateFormat("kk:mm").format(
      DateFormat('hh:mm a').parse(
        (Intl.getCurrentLocale() == "en_US")
            ? selectedTimeSlot.value
            : selectedTimeSlot.value.toLowerCase(),
      ),
    );
    dt = DateTime(

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 135
    for (int i = 0; i < 7; i++) {
      final now = DateTime.now().add(Duration(days: i));
      var day = DateFormat('EEEE').format(now);
      if (vendorModel.value.specialDiscount?.isNotEmpty == true &&
          vendorModel.value.specialDiscountEnable == true) {
        for (var element in vendorModel.value.specialDiscount!) {
          if (day == element.day.toString()) {
            if (element.timeslot!.isNotEmpty) {
              SpecialDiscountTimeslot employeeWithMaxSalary = element.timeslot!

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 183
    timeSet(selectedDate.value);
    if (timeSlotList.isNotEmpty) {
      selectedTimeSlot.value = DateFormat(
        'hh:mm a',
      ).format(timeSlotList[0].time!);
    }
  }

  void timeSet(Timestamp selectedDate) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 202
    ) {
      final now = DateTime.parse(selectedDate.toDate().toString());
      var day = DateFormat('EEEE').format(now);
      var date = DateFormat('dd-MM-yyyy').format(now);

      if (vendorModel.value.specialDiscount?.isNotEmpty == true &&
          vendorModel.value.specialDiscountEnable == true) {
        for (var element in vendorModel.value.specialDiscount!) {
          if (day == element.day.toString()) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 203
      final now = DateTime.parse(selectedDate.toDate().toString());
      var day = DateFormat('EEEE').format(now);
      var date = DateFormat('dd-MM-yyyy').format(now);

      if (vendorModel.value.specialDiscount?.isNotEmpty == true &&
          vendorModel.value.specialDiscountEnable == true) {
        for (var element in vendorModel.value.specialDiscount!) {
          if (day == element.day.toString()) {
            if (element.timeslot!.isNotEmpty) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 342
  void statusCheck() {
    final now = DateTime.now();
    var day = DateFormat('EEEE', 'en_US').format(now);
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.value.workingHours!) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = step46fSafeParseWorkingDateTime(date, element.from);

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 343
    final now = DateTime.now();
    var day = DateFormat('EEEE', 'en_US').format(now);
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.value.workingHours!) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = step46fSafeParseWorkingDateTime(date, element.from);
            var end = step46fSafeParseWorkingDateTime(date, element.to);

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 462

  try {
    return DateFormat("dd-MM-yyyy HH:mm").parse("$date $normalized");
  } catch (e) {
    print(
      "STEP46F_DINE_IN_WORKING_HOURS_PARSE_ERROR: date=$date rawTime=$rawTime normalized=$normalized error=$e",
    );
    return null;
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 483
        ':' +
        time.minute.toString().padLeft(2, '0');
    return DateFormat("dd-MM-yyyy HH:mm").parse("$date $normalized");
  } catch (e) {
    print(
      "STEP46K_DINE_IN_SELECTED_TIME_PARSE_ERROR: date=$date time=$time error=$e",
    );
    return null;
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\my_cab_booking_controller.dart
LINE: 129
  String formatDate(Timestamp timestamp) {
    final dateTime = timestamp.toDate();
    return DateFormat("dd MMM yyyy, hh:mm a").format(dateTime);
  }

  Rx<WalletSettingModel> walletSettingModel = WalletSettingModel().obs;
  Rx<CodSettingModel> cashOnDeliverySettingModel = CodSettingModel().obs;
  Rx<PayFastModel> payFastModel = PayFastModel().obs;
  Rx<MercadoPagoModel> mercadoPagoModel = MercadoPagoModel().obs;

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_booking_controller.dart
LINE: 79
  void setDateTime(DateTime dateTime) {
    selectedDateTime.value = dateTime;
    dateTimeText.value = DateFormat('dd-MM-yyyy HH:mm').format(dateTime);
    dateTimeController.value.text = dateTimeText.value;
  }

  void applyCoupon(CouponModel coupon) {
    double discount = 0.0;
    if (coupon.discountType == "Percentage" || coupon.discountType == "Percent") {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart
LINE: 76
  void timeCheck() {
    final now = DateTime.now();
    final day = DateFormat('EEEE', 'en_US').format(now);
    final date = DateFormat('dd-MM-yyyy').format(now);

    for (var element in provider.days) {
      if (day == element.toString()) {
        final start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.startTime}");
        final end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.endTime}");

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart
LINE: 77
    final now = DateTime.now();
    final day = DateFormat('EEEE', 'en_US').format(now);
    final date = DateFormat('dd-MM-yyyy').format(now);

    for (var element in provider.days) {
      if (day == element.toString()) {
        final start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.startTime}");
        final end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.endTime}");
        if (isCurrentDateInRange(start, end)) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart
LINE: 81
    for (var element in provider.days) {
      if (day == element.toString()) {
        final start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.startTime}");
        final end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.endTime}");
        if (isCurrentDateInRange(start, end)) {
          isOpen.value = true;
        }
      }
    }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\on_demand_details_controller.dart
LINE: 82
      if (day == element.toString()) {
        final start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.startTime}");
        final end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${provider.endTime}");
        if (isCurrentDateInRange(start, end)) {
          isOpen.value = true;
        }
      }
    }
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_my_booking_controller.dart
LINE: 76
  String formatDate(Timestamp timestamp) {
    final dateTime = timestamp.toDate();
    return DateFormat("dd MMM yyyy, hh:mm a").format(dateTime);
  }

  Future<void> cancelParcelOrder(ParcelOrderModel order) async {
    try {
      isLoading.value = true;


FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_confirmation_controller.dart
LINE: 137
  String formatDate(Timestamp timestamp) {
    final dateTime = timestamp.toDate();
    return DateFormat("dd MMM yyyy, hh:mm a").format(dateTime);
  }

  Future<void> placeOrder() async {
    ShowToastDialog.showLoader("Please wait...".tr);

    try {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\parcel_order_details_controller.dart
LINE: 143
  String formatDate(Timestamp timestamp) {
    final dateTime = timestamp.toDate();
    return DateFormat("dd MMM yyyy, hh:mm a").format(dateTime);
  }

  ParcelCategory? getSelectedCategory() {
    try {
      return parcelCategory.firstWhere((cat) => cat.title?.toLowerCase().trim() == parcelOrder.value.parcelType?.toLowerCase().trim(), orElse: () => ParcelCategory());
    } catch (e) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
LINE: 172
  void statusCheck() {
    final now = DateTime.now();
    var day = DateFormat('EEEE', 'en_US').format(now);
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.value.workingHours ?? []) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.from}");

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
LINE: 173
    final now = DateTime.now();
    var day = DateFormat('EEEE', 'en_US').format(now);
    var date = DateFormat('dd-MM-yyyy').format(now);
    for (var element in vendorModel.value.workingHours ?? []) {
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.from}");
            var end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.to}");

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
LINE: 178
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.from}");
            var end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.to}");
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\restaurant_details_controller.dart
LINE: 179
          for (var element in element.timeslot!) {
            var start = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.from}");
            var end = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${element.to}");
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }
      }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart
LINE: 194
                    const SizedBox(height: 5),
                    Text(
                      DateFormat('MMM d, yyyy hh:mm aa').format(DateTime.fromMillisecondsSinceEpoch(data.createdAt!.millisecondsSinceEpoch)),
                      style: const TextStyle(color: Colors.grey, fontSize: 12),
                    ),
                  ],
                ),
              )
              : Align(

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\chat_screens\chat_screen.dart
LINE: 243
                    const SizedBox(height: 5),
                    Text(
                      DateFormat('MMM d, yyyy hh:mm aa').format(DateTime.fromMillisecondsSinceEpoch(data.createdAt!.millisecondsSinceEpoch)),
                      style: const TextStyle(color: Colors.grey, fontSize: 12),
                    ),
                  ],
                ),
              ),
    );

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart
LINE: 156
                                                        : Constant.calculateDifference(controller.dateList[index].date.toDate()) == 1
                                                        ? "Tomorrow".tr
                                                        : DateFormat('EEE').format(controller.dateList[index].date.toDate()),
                                                    style: TextStyle(
                                                      fontSize: 12,
                                                      color: isDark ? AppThemeData.grey400 : AppThemeData.grey500,
                                                      fontFamily: AppThemeData.regular,
                                                      fontWeight: FontWeight.w500,
                                                    ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart
LINE: 165
                                                  ),
                                                  Text(
                                                    DateFormat('d MMM').format(controller.dateList[index].date.toDate()).toString(),
                                                    style: TextStyle(
                                                      fontSize: 16,
                                                      color: isDark ? AppThemeData.grey400 : AppThemeData.grey500,
                                                      fontFamily: AppThemeData.semiBold,
                                                      fontWeight: FontWeight.w600,
                                                    ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart
LINE: 223
                                      labelStyle: TextStyle(color: isDark ? AppThemeData.grey100 : AppThemeData.grey800),
                                      label: Text(
                                        DateFormat('hh:mm a').format(timeSlotList.time!),
                                        style: TextStyle(
                                          color:
                                              controller.selectedTimeSlot.value == DateFormat('hh:mm a').format(timeSlotList.time!)
                                                  ? AppThemeData.grey50
                                                  : isDark
                                                  ? AppThemeData.grey400

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart
LINE: 226
                                        style: TextStyle(
                                          color:
                                              controller.selectedTimeSlot.value == DateFormat('hh:mm a').format(timeSlotList.time!)
                                                  ? AppThemeData.grey50
                                                  : isDark
                                                  ? AppThemeData.grey400
                                                  : AppThemeData.grey500,
                                          fontFamily: AppThemeData.medium,
                                          fontWeight: FontWeight.w500,

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart
LINE: 236
                                      ),
                                      showCheckmark: false,
                                      selected: controller.selectedTimeSlot.value == DateFormat('hh:mm a').format(timeSlotList.time!),
                                      onSelected: (value) {
                                        controller.selectedTimeSlot.value = DateFormat('hh:mm a').format(timeSlotList.time!);
                                        controller.selectedTimeDiscount.value = timeSlotList.discountPer!;
                                        controller.selectedTimeDiscountType.value = timeSlotList.discountType!;
                                      },
                                    ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\multi_vendor_service\dine_in_screeen\book_table_screen.dart
LINE: 238
                                      selected: controller.selectedTimeSlot.value == DateFormat('hh:mm a').format(timeSlotList.time!),
                                      onSelected: (value) {
                                        controller.selectedTimeSlot.value = DateFormat('hh:mm a').format(timeSlotList.time!);
                                        controller.selectedTimeDiscount.value = timeSlotList.discountPer!;
                                        controller.selectedTimeDiscountType.value = timeSlotList.discountType!;
                                      },
                                    ),
                                  ),
                                ],

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\my_booking_on_demand_screen.dart
LINE: 175
        child: Column(
          children: [
            detailRow("Date & Time", DateFormat('dd-MMM-yyyy hh:mm a').format(order.scheduleDateTime!.toDate()), isDark),
            const Divider(thickness: 1),
            detailRow("Provider", order.provider.authorName.toString(), isDark),

            if (order.provider.priceUnit == "Hourly") ...[
              if (order.startTime != null) ...[const Divider(thickness: 1), detailRow("Start Time", DateFormat('dd-MMM-yyyy hh:mm a').format(order.startTime!.toDate()), isDark)],
              if (order.endTime != null) ...[const Divider(thickness: 1), detailRow("End Time", DateFormat('dd-MMM-yyyy hh:mm a').format(order.endTime!.toDate()), isDark)],

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\my_booking_on_demand_screen.dart
LINE: 180

            if (order.provider.priceUnit == "Hourly") ...[
              if (order.startTime != null) ...[const Divider(thickness: 1), detailRow("Start Time", DateFormat('dd-MMM-yyyy hh:mm a').format(order.startTime!.toDate()), isDark)],
              if (order.endTime != null) ...[const Divider(thickness: 1), detailRow("End Time", DateFormat('dd-MMM-yyyy hh:mm a').format(order.endTime!.toDate()), isDark)],
            ],

            if (worker != null) ...[const Divider(thickness: 1), detailRow("Worker", worker.fullName().toString(), isDark)],
          ],
        ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\my_booking_on_demand_screen.dart
LINE: 181
            if (order.provider.priceUnit == "Hourly") ...[
              if (order.startTime != null) ...[const Divider(thickness: 1), detailRow("Start Time", DateFormat('dd-MMM-yyyy hh:mm a').format(order.startTime!.toDate()), isDark)],
              if (order.endTime != null) ...[const Divider(thickness: 1), detailRow("End Time", DateFormat('dd-MMM-yyyy hh:mm a').format(order.endTime!.toDate()), isDark)],
            ],

            if (worker != null) ...[const Divider(thickness: 1), detailRow("Worker", worker.fullName().toString(), isDark)],
          ],
        ),
      ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_details_screen.dart
LINE: 405
                      Text(review.uname ?? '', style: TextStyle(fontSize: 16, letterSpacing: 1, fontWeight: FontWeight.w600, color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900)),
                      Text(
                        review.createdAt != null ? DateFormat('dd MMM').format(review.createdAt!.toDate()) : '',
                        style: TextStyle(fontSize: 12, color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900),
                      ),
                    ],
                  ),
                  const SizedBox(height: 4),
                  RatingBar.builder(

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart
LINE: 169
                                          child: Text(
                                            controller.onProviderOrder.value?.scheduleDateTime != null
                                                ? DateFormat('dd-MMM-yyyy').format(controller.onProviderOrder.value!.scheduleDateTime!.toDate())
                                                : "",
                                            style: AppThemeData.regularTextStyle(fontSize: 14, color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900),
                                          ),
                                        ),
                                      ],
                                    ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart
LINE: 186
                                          child: Text(
                                            controller.onProviderOrder.value?.scheduleDateTime != null
                                                ? DateFormat('hh:mm a').format(controller.onProviderOrder.value!.scheduleDateTime!.toDate())
                                                : "",
                                            style: AppThemeData.regularTextStyle(fontSize: 14, color: isDark ? AppThemeData.greyDark900 : AppThemeData.grey900),
                                          ),
                                        ),
                                      ],
                                    ),

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\screen_ui\on_demand_service\on_demand_order_details_screen.dart
LINE: 646
                                            Text("New Date : ".tr, style: TextStyle(color: isDark ? Colors.white : Colors.black, fontFamily: AppThemeData.regular, fontWeight: FontWeight.w500)),
                                            Text(
                                              DateFormat('dd-MMM-yyyy hh:mm a').format(controller.onProviderOrder.value!.newScheduleDateTime!.toDate()),
                                              style: TextStyle(color: isDark ? Colors.white : Colors.black, fontFamily: AppThemeData.regular, fontWeight: FontWeight.w500),
                                            ),
                                          ],
                                        )
                                        : SizedBox(),
                                    controller.onProviderOrder.value?.status == Constant.orderPlaced || controller.onProviderOrder.value?.status == Constant.orderAccepted

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1667
    String newString = emailTemplateModel!.message.toString();
    newString = newString.replaceAll("{username}", Constant.userModel!.firstName.toString() + Constant.userModel!.lastName.toString());
    newString = newString.replaceAll("{date}", DateFormat('yyyy-MM-dd').format(Timestamp.now().toDate()));
    newString = newString.replaceAll("{amount}", Constant.amountShow(amount: amount));
    newString = newString.replaceAll("{paymentmethod}", paymentMethod.toString());
    newString = newString.replaceAll("{transactionid}", tractionId.toString());
    newString = newString.replaceAll("{newwalletbalance}.", Constant.amountShow(amount: Constant.userModel!.walletAmount.toString()));
    await Constant.sendMail(subject: emailTemplateModel.subject, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
  }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1911
      newString = newString.replaceAll("{passengername}", "${Constant.userModel!.firstName} ${Constant.userModel!.lastName}");
      newString = newString.replaceAll("{parcelid}", orderModel.id.toString());
      newString = newString.replaceAll("{date}", DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{sendername}", orderModel.sender!.name.toString());
      newString = newString.replaceAll("{senderphone}", orderModel.sender!.phone.toString());
      newString = newString.replaceAll("{note}", orderModel.note.toString());
      newString = newString.replaceAll("{deliverydate}", DateFormat('dd-MM-yyyy').format(orderModel.receiverPickupDateTime!.toDate()));

      String subjectNewString = emailTemplateModel.subject.toString();

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1915
      newString = newString.replaceAll("{senderphone}", orderModel.sender!.phone.toString());
      newString = newString.replaceAll("{note}", orderModel.note.toString());
      newString = newString.replaceAll("{deliverydate}", DateFormat('dd-MM-yyyy').format(orderModel.receiverPickupDateTime!.toDate()));

      String subjectNewString = emailTemplateModel.subject.toString();
      subjectNewString = subjectNewString.replaceAll("{orderid}", orderModel.id.toString());
      await Constant.sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
    } catch (e) {
      log("SIGNUP :: 22 :::::: $e");

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1943
      newString = newString.replaceAll("{passengername}", orderModel.author?.fullName() ?? '');
      newString = newString.replaceAll("{rideid}", orderModel.id.toString());
      newString = newString.replaceAll("{date}", DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{time}", DateFormat('hh:mm a').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{pickuplocation}", orderModel.sourceLocationName.toString());
      newString = newString.replaceAll("{dropofflocation}", orderModel.destinationLocationName.toString());
      newString = newString.replaceAll("{drivername}", orderModel.driver?.fullName() ?? '');
      newString = newString.replaceAll("{vehicle}", "${vType.toString()} | ${brand.toString()} | ${carModel.toString()}");
      newString = newString.replaceAll("{carnumber}", plate.toString());

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1944
      newString = newString.replaceAll("{rideid}", orderModel.id.toString());
      newString = newString.replaceAll("{date}", DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{time}", DateFormat('hh:mm a').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{pickuplocation}", orderModel.sourceLocationName.toString());
      newString = newString.replaceAll("{dropofflocation}", orderModel.destinationLocationName.toString());
      newString = newString.replaceAll("{drivername}", orderModel.driver?.fullName() ?? '');
      newString = newString.replaceAll("{vehicle}", "${vType.toString()} | ${brand.toString()} | ${carModel.toString()}");
      newString = newString.replaceAll("{carnumber}", plate.toString());
      newString = newString.replaceAll("{driverphone}", orderModel.driver?.phoneNumber ?? '');

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1964
      newString = newString.replaceAll("{username}", orderModel.author?.fullName() ?? '');
      newString = newString.replaceAll("{passengername}", orderModel.author?.fullName() ?? '');
      newString = newString.replaceAll("{date}", DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{time}", DateFormat('hh:mm a').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{pickuplocation}", orderModel.sourceLocationName.toString());

      String subjectNewString = emailTemplateModel.subject.toString();
      await Constant.sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
    } catch (e) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 1965
      newString = newString.replaceAll("{passengername}", orderModel.author?.fullName() ?? '');
      newString = newString.replaceAll("{date}", DateFormat('dd-MM-yyyy').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{time}", DateFormat('hh:mm a').format(orderModel.createdAt!.toDate()));
      newString = newString.replaceAll("{pickuplocation}", orderModel.sourceLocationName.toString());

      String subjectNewString = emailTemplateModel.subject.toString();
      await Constant.sendMail(subject: subjectNewString, isAdmin: emailTemplateModel.isSendToAdmin, body: newString, recipients: [Constant.userModel!.email]);
    } catch (e) {
      log("SIGNUP :: 22 :::::: $e");

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\service\fire_store_utils.dart
LINE: 2347
        newString = newString.replaceAll("{username}", "${Constant.userModel?.firstName ?? ''} ${Constant.userModel?.lastName ?? ''}");
        newString = newString.replaceAll("{orderid}", orderModel.id);
        newString = newString.replaceAll("{date}", DateFormat('dd-MM-yyyy').format(orderModel.createdAt.toDate()));
        newString = newString.replaceAll("{address}", orderModel.address!.getFullAddress());
        newString = newString.replaceAll("{paymentmethod}", orderModel.payment_method);

        double total = 0.0;
        double discount = 0.0;
        double taxAmount = 0.0;
TEXT_END

## Pattern: Trying to read HH
TEXT_START
NO_MATCH
TEXT_END

## Pattern: step46kSafeSelectedDateTime
TEXT_START

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 217
                  );
                  var end = step46fSafeParseWorkingDateTime(date, element.to);
                  var selected = step46kSafeSelectedDateTime(date, time);

                  if (isCurrentDateInRangeDineIn(start, end, selected)) {
                    var contains = timeSlotList.where(
                      (element) => element.time == time,
                    );
                    if (contains.isNotEmpty) {

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 472

// TEMP SAFE PATCH STEP46K - selected time parser without locale HH formatting
DateTime? step46kSafeSelectedDateTime(String date, DateTime? time) {
  if (time == null) {
    print("STEP46K_DINE_IN_SELECTED_TIME_PARSE_SKIP: time=null");
    return null;
  }

  try {
TEXT_END

## Pattern: step46fSafeParseWorkingDateTime
TEXT_START

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 212
              for (var element in element.timeslot!) {
                if (element.discountType == "dinein") {
                  var start = step46fSafeParseWorkingDateTime(
                    date,
                    element.from,
                  );
                  var end = step46fSafeParseWorkingDateTime(date, element.to);
                  var selected = step46kSafeSelectedDateTime(date, time);


FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 216
                    element.from,
                  );
                  var end = step46fSafeParseWorkingDateTime(date, element.to);
                  var selected = step46kSafeSelectedDateTime(date, time);

                  if (isCurrentDateInRangeDineIn(start, end, selected)) {
                    var contains = timeSlotList.where(
                      (element) => element.time == time,
                    );

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 348
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = step46fSafeParseWorkingDateTime(date, element.from);
            var end = step46fSafeParseWorkingDateTime(date, element.to);
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 349
          for (var element in element.timeslot!) {
            var start = step46fSafeParseWorkingDateTime(date, element.from);
            var end = step46fSafeParseWorkingDateTime(date, element.to);
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }
      }

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 454
}

DateTime? step46fSafeParseWorkingDateTime(String date, dynamic rawTime) {
  final normalized = step46fNormalizeTimeText(rawTime);
  if (normalized.isEmpty) {
    print("STEP46F_DINE_IN_WORKING_HOURS_PARSE_SKIP: rawTime=$rawTime");
    return null;
  }

TEXT_END

## Pattern: isCurrentDateInRangeDineIn
TEXT_START

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 219
                  var selected = step46kSafeSelectedDateTime(date, time);

                  if (isCurrentDateInRangeDineIn(start, end, selected)) {
                    var contains = timeSlotList.where(
                      (element) => element.time == time,
                    );
                    if (contains.isNotEmpty) {
                      var index = timeSlotList.indexWhere(
                        (element) => element.time == time,

FILE: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart
LINE: 359
  }

  bool isCurrentDateInRangeDineIn(
    DateTime? startDate,
    DateTime? endDate,
    DateTime? selected,
  ) {
    if (startDate == null || endDate == null || selected == null) {
      return false;
TEXT_END

## Counts
TEXT_START
COUNT_DateFormat_Hm_format_time: 0
COUNT_DateFormat_Hm: 0
COUNT_dd_MM_yyyy_HH_mm_parse: 7
COUNT_step46kSafeSelectedDateTime: 2
COUNT_step46fSafeParseWorkingDateTime: 5
TEXT_END

Final Status:
STATUS: FLUTTER_ALL_REMAINING_HH_PARSERS_AUDITED