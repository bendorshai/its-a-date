var consts = require('../../consts.js');

/* 
Converts a day word convention in any language to its numeric value
Note: Keep in mind that the values start from 0
TODO - support other languages
*/
exports.translate = function (dayConvention) {
    dayConvention = dayConvention.toLowerCase();

    // Sunday conventions
    if (dayConvention == 'sunday' || dayConvention == 'воскресенье') {
        return 0;
    }

    // Monday conventions
    if (dayConvention == 'monday' || dayConvention == 'понедельник') {
        return 1;
    }

    // Tuesday conventions
    if (dayConvention == 'tuesday' || dayConvention == 'вторник') {
        return 2;
    }

    // Wednesday conventions
    if (dayConvention == 'wednesday' || dayConvention == 'среда') {
        return 3;
    }

    // Thursday conventions
    if (dayConvention == 'thursday' || dayConvention == 'четверг') {
        return 4;
    }

    // Friday conventions
    if (dayConvention == 'friday' || dayConvention == 'пятница') {
        return 5;
    }

    // Saturday conventions
    if (dayConvention == 'saturday' || dayConvention == 'суббота') {
        return 6;
    }

    // Non of the above?
    return -1;
}

exports.calculateThisConvention = function (currentDay, requestedDay) {
    var result = requestedDay - currentDay;

    // The requested day is on the next week
    if (result < 0) {
        result += 7;
    }

    return result;
}

exports.calculateNextConvention = function (currentDay, requestedDay) {
    return this.calculateThisConvention(currentDay, requestedDay) + 7;
}

exports.calculateLastConvention = function (currentDay, requestedDay) {
    var result = requestedDay - currentDay;

    // The requested day is on the previous week
    if (result >= 0) {
        result -= 7;
    }

    return result;
}