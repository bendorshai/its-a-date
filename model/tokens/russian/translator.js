var consts = require('../../consts.js');

// Converts a russian word convention to one of our english conventions
exports.russianToEnglish = function (russianConvention) {
    russianConvention = russianConvention.toLowerCase();

    // Day conventions
    if (russianConvention == 'день' || russianConvention == 'дня' || russianConvention == 'дней') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    if (russianConvention == 'минуту') {
        return consts.timeTypes[consts.timeTypes.minute];
    }
}