var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'dimanche') {
        return 0;
    }

    // Monday conventions
    if (day == 'lundi') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'mardi') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'mercredi') {
        return 3;
    }

    // Thursday conventions
    if (day == 'jeudi') {
        return 4;
    }

    // Friday conventions
    if (day == 'vendredi') {
        return 5;
    }

    // Saturday conventions
    if (day == 'samedi') {
        return 6;
    }

    // Non of the above?
    return -1;
}