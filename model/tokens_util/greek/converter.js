var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'κυριακή' || day == 'κυρ') {
        return 0;
    }

    // Monday conventions
    if (day == 'δευτέρα' || day == 'δευ') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'τρίτη' || day == 'τρί') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'τετάρτη' || day == 'τετ') {
        return 3;
    }

    // Thursday conventions
    if (day == 'πέμπτη' || day == 'πέμ') {
        return 4;
    }

    // Friday conventions
    if (day == 'παρασκευή' || day == 'παρ') {
        return 5;
    }

    // Saturday conventions
    if (day == 'σάββατο' || day == 'σάβ') {
        return 6;
    }

    // Non of the above?
    return -1;
}