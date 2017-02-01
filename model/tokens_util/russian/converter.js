var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
TODO - support other languages
*/
exports.dayOfWeekToNum = function (day) {

    // Sunday conventions
    if (day == 'воскресенье') {
        return 0;
    }

    // Monday conventions
    if (day == 'понедельник') {
        return 1;
    }

    // Tuesday conventions
    if (day == 'вторник') {
        return 2;
    }

    // Wednesday conventions
    if (day == 'среда') {
        return 3;
    }

    // Thursday conventions
    if (day == 'четверг') {
        return 4;
    }

    // Friday conventions
    if (day == 'пятница') {
        return 5;
    }

    // Saturday conventions
    if (day == 'суббота') {
        return 6;
    }

    // Non of the above?
    return undefined;
}
