var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'dimanche' || day == 'Dimanche') {
        return 0;
    }

    // Monday conventions
    if (day == 'lundi' || day == 'Lundi') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'mardi' || day == 'Mardi') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'mercredi' || day == 'Mercredi') {
        return 3;
    }

    // Thursday conventions
    if (day == 'jeudi' || day == 'Jeudi') {
        return 4;
    }

    // Friday conventions
    if (day == 'vendredi' || day == 'Vendredi') {
        return 5;
    }

    // Saturday conventions
    if (day == 'samedi' || day == 'Samedi') {
        return 6;
    }

    // Non of the above?
    return -1;
}