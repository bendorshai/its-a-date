var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'الأحد') {
        return 0;
    }

    // Monday conventions
    if (day == 'الإثنين' || day == 'الاثنين') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'الثلاثاء') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'الأربعاء') {
        return 3;
    }

    // Thursday conventions
    if (day == 'الخميس') {
        return 4;
    }

    // Friday conventions
    if (day == 'الجمعة') {
        return 5;
    }

    // Saturday conventions
    if (day == 'السبت') {
        return 6;
    }

    // Non of the above?
    return -1;
}