var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'sunday') {
        return 0;
    }

    // Monday conventions
    if (day == 'monday') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'tuesday') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'wednesday') {
        return 3;
    }

    // Thursday conventions
    if (day == 'thursday') {
        return 4;
    }

    // Friday conventions
    if (day == 'friday') {
        return 5;
    }

    // Saturday conventions
    if (day == 'saturday') {
        return 6;
    }

    // Non of the above?
    return -1;
}