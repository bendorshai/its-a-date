var consts = require('../../consts.js');
var arabic = require('../arabic/converter.js');
var english = require('../english/converter.js');
var russian = require('../russian/converter.js');
var turkish = require('../turkish/converter.js');
var spanish = require('../spanish/converter.js');
var utils = require('../../../utils.js')

var dayConvertors = 
    [russian.dayOfWeekToNum, english.dayOfWeekToNum, arabic.dayOfWeekToNum, turkish.dayOfWeekToNum, spanish.dayOfWeekToNum]

exports.convert = function (day) {
    // Note: Convertors function as translators in this manner
    return utils.translate(day, dayConvertors)
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