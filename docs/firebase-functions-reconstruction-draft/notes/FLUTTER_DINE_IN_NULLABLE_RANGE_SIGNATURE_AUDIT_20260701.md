# FLUTTER DINE IN NULLABLE RANGE SIGNATURE AUDIT

Generated: 07/01/2026 04:19:57
Mode: READ ONLY.

Target file: C:\project\eMart_V6.7_Source_Code\Applications\Applications\emart-6.7\emart-6.7\customer\lib\controllers\dine_in_restaurant_details_controller.dart


LINE: 161
-----
              for (var element in element.timeslot!) {
                if (element.discountType == "dinein") {
                  var start = step46fSafeParseWorkingDateTime(date, element.from);
                  var end = step46fSafeParseWorkingDateTime(date, element.to);
                  var selected = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${DateFormat.Hm().format(time)}");

                  if (isCurrentDateInRangeDineIn(start, end, selected)) {
                    var contains = timeSlotList.where((element) => element.time == time);
                    if (contains.isNotEmpty) {
                      var index = timeSlotList.indexWhere((element) => element.time == time);
                      if (timeSlotList[index].discountPer == "0") {
-----

LINE: 162
-----
                if (element.discountType == "dinein") {
                  var start = step46fSafeParseWorkingDateTime(date, element.from);
                  var end = step46fSafeParseWorkingDateTime(date, element.to);
                  var selected = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${DateFormat.Hm().format(time)}");

                  if (isCurrentDateInRangeDineIn(start, end, selected)) {
                    var contains = timeSlotList.where((element) => element.time == time);
                    if (contains.isNotEmpty) {
                      var index = timeSlotList.indexWhere((element) => element.time == time);
                      if (timeSlotList[index].discountPer == "0") {
                        timeSlotList.removeAt(index);
-----

LINE: 165
-----
                  var selected = DateFormat("dd-MM-yyyy HH:mm").parse("$date ${DateFormat.Hm().format(time)}");

                  if (isCurrentDateInRangeDineIn(start, end, selected)) {
                    var contains = timeSlotList.where((element) => element.time == time);
                    if (contains.isNotEmpty) {
                      var index = timeSlotList.indexWhere((element) => element.time == time);
                      if (timeSlotList[index].discountPer == "0") {
                        timeSlotList.removeAt(index);
                        TimeModel model = TimeModel(time: time, discountPer: element.discount, discountType: element.type);
                        timeSlotList.insert(index == 0 ? 0 : index, model);
                      }
-----

LINE: 257
-----
        if (element.timeslot!.isNotEmpty) {
          for (var element in element.timeslot!) {
            var start = step46fSafeParseWorkingDateTime(date, element.from);
            var end = step46fSafeParseWorkingDateTime(date, element.to);
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }
      }
    }
-----

LINE: 258
-----
          for (var element in element.timeslot!) {
            var start = step46fSafeParseWorkingDateTime(date, element.from);
            var end = step46fSafeParseWorkingDateTime(date, element.to);
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }
      }
    }
  }
-----

LINE: 259
-----
            var start = step46fSafeParseWorkingDateTime(date, element.from);
            var end = step46fSafeParseWorkingDateTime(date, element.to);
            if (isCurrentDateInRange(start, end)) {
              isOpen.value = true;
            }
          }
        }
      }
    }
  }

-----

LINE: 268
-----
  }

  bool isCurrentDateInRangeDineIn(DateTime startDate, DateTime endDate, DateTime selected) {
    return selected.isAtSameMomentAs(startDate) || selected.isAtSameMomentAs(endDate) || selected.isAfter(startDate) && selected.isBefore(endDate);
  }

  bool isCurrentDateInRange(DateTime startDate, DateTime endDate) {
    final currentDate = DateTime.now();
    return currentDate.isAfter(startDate) && currentDate.isBefore(endDate);
  }
}
-----

LINE: 272
-----
  }

  bool isCurrentDateInRange(DateTime startDate, DateTime endDate) {
    final currentDate = DateTime.now();
    return currentDate.isAfter(startDate) && currentDate.isBefore(endDate);
  }
}

class DateModel {
  late Timestamp date;
  late String discountPer;
-----

LINE: 349
-----
}

DateTime? step46fSafeParseWorkingDateTime(String date, dynamic rawTime) {
  final normalized = step46fNormalizeTimeText(rawTime);
  if (normalized.isEmpty) {
    print("STEP46F_DINE_IN_WORKING_HOURS_PARSE_SKIP: rawTime=$rawTime");
    return null;
  }

  try {
    return DateFormat("dd-MM-yyyy HH:mm").parse("$date $normalized");
-----

Final Status:
STATUS: FLUTTER_DINE_IN_NULLABLE_RANGE_SIGNATURE_AUDITED