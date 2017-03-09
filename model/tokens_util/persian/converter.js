var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'یَکشَنبه'|| day == 'یکشنبه') {
        return 0;
    }

    // Monday conventions
    if (day == 'دوشَنبه' || day == 'دوشنبه') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'سَهشَنبه' || day == 'سه شنبه') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'چِهار شَنبه' || day == 'چهارشنبه') {
        return 3;
    }

    // Thursday conventions
    if (day == 'پَنج شَنبه' || day == 'پنجشنبه') {
        return 4;
    }

    // Friday conventions
    if (day == 'جُمعه' || day == 'جمعه') {
        return 5;
    }

    // Saturday conventions
    if (day == 'شَنبه' || day == 'شنبه') {
        return 6;
    }

    // Non of the above?
    return -1;
}