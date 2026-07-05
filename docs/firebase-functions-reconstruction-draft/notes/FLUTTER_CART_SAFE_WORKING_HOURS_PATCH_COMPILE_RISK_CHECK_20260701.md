# FLUTTER CART SAFE WORKING HOURS PATCH COMPILE RISK CHECK

Generated: 07/01/2026 03:32:38
Mode: READ ONLY.

Target file: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\cart_controller.dart


LINE: 231
-----
        if (day == element.day.toString()) {
          for (var slot in element.timeslot ?? []) {
            if (slot.discountType == "delivery") {
              final start = _step45bSafeParseWorkingDateTime(date, slot.from);
              final end = _step45bSafeParseWorkingDateTime(date, slot.to);

              if (isCurrentDateInRange(start, end)) {
                specialDiscount.value = double.parse(slot.discount.toString());
                specialType.value = slot.type.toString();

                specialDiscountAmount.value = slot.type == "percentage" ? (subTotal.value * specialDiscount.value / 100) : specialDiscount.value;
              }
-----

LINE: 232
-----
          for (var slot in element.timeslot ?? []) {
            if (slot.discountType == "delivery") {
              final start = _step45bSafeParseWorkingDateTime(date, slot.from);
              final end = _step45bSafeParseWorkingDateTime(date, slot.to);

              if (isCurrentDateInRange(start, end)) {
                specialDiscount.value = double.parse(slot.discount.toString());
                specialType.value = slot.type.toString();

                specialDiscountAmount.value = slot.type == "percentage" ? (subTotal.value * specialDiscount.value / 100) : specialDiscount.value;
              }
            }
-----

LINE: 234
-----
              final start = _step45bSafeParseWorkingDateTime(date, slot.from);
              final end = _step45bSafeParseWorkingDateTime(date, slot.to);

              if (isCurrentDateInRange(start, end)) {
                specialDiscount.value = double.parse(slot.discount.toString());
                specialType.value = slot.type.toString();

                specialDiscountAmount.value = slot.type == "percentage" ? (subTotal.value * specialDiscount.value / 100) : specialDiscount.value;
              }
            }
          }
        }
-----

LINE: 1008
-----
    ShowToastDialog.showToast("Payment Failed!!".tr);
  }

  bool isCurrentDateInRange(DateTime startDate, DateTime endDate) {
    final currentDate = DateTime.now();
    return currentDate.isAfter(startDate) && currentDate.isBefore(endDate);
  }

  //Midtrans payment
  Future<void> midtransMakePayment({required String amount, required BuildContext context}) async {
    ShowToastDialog.showLoader("Please wait".tr);
    await createPaymentLink(amount: amount).then((url) {
-----

LINE: 1211
-----
      if (day == element.day.toString()) {
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = _step45bSafeParseWorkingDateTime(date, element.from);
            var end = _step45bSafeParseWorkingDateTime(date, element.to);
            if (isCurrentDateInRange(start, end)) {
              isOpen = true;
            }
          }
        }
      }
    }
-----

LINE: 1212
-----
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = _step45bSafeParseWorkingDateTime(date, element.from);
            var end = _step45bSafeParseWorkingDateTime(date, element.to);
            if (isCurrentDateInRange(start, end)) {
              isOpen = true;
            }
          }
        }
      }
    }
    return isOpen;
-----

LINE: 1213
-----
          for (var element in element.timeslot!) {
            var start = _step45bSafeParseWorkingDateTime(date, element.from);
            var end = _step45bSafeParseWorkingDateTime(date, element.to);
            if (isCurrentDateInRange(start, end)) {
              isOpen = true;
            }
          }
        }
      }
    }
    return isOpen;
  }
-----

LINE: 1270
-----
    return hour.toString().padLeft(2, '0') + ':' + minute.toString().padLeft(2, '0');
  }

  DateTime? _step45bSafeParseWorkingDateTime(String date, dynamic rawTime) {
    final normalized = _step45bNormalizeTimeText(rawTime);
    if (normalized.isEmpty) {
      print("STEP45B_WORKING_HOURS_PARSE_SKIP: rawTime=$rawTime");
      return null;
    }

    try {
      return DateFormat("dd-MM-yyyy HH:mm").parse("$date $normalized");
-----

Final Status:
STATUS: FLUTTER_CART_SAFE_WORKING_HOURS_PATCH_COMPILE_RISK_AUDITED