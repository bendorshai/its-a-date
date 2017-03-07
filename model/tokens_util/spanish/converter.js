var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'domingo') {
        return 0;
    }

    // Monday conventions
    if (day == 'lunes') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'martes') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'miércoles') {
        return 3;
    }

    // Thursday conventions
    if (day == 'jueves') {
        return 4;
    }

    // Friday conventions
    if (day == 'viernes') {
        return 5;
    }

    // Saturday conventions
    if (day == 'sábado') {
        return 6;
    }

    // Non of the above?
    return -1;
}