var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'pazar') {
        return 0;
    }

    // Monday conventions
    if (day == 'pazartesi') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'salı') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'çarşamba') {
        return 3;
    }

    // Thursday conventions
    if (day == 'perşembe') {
        return 4;
    }

    // Friday conventions
    if (day == 'cuma') {
        return 5;
    }

    // Saturday conventions
    if (day == 'cumartesi') {
        return 6;
    }

    // Non of the above?
    return -1;
}