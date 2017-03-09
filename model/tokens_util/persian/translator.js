var consts = require('../../consts.js');

// Converts an persian word convention to one of our english conventions
exports.persianToEnglish = function (persianConvention) {

    // Week conventions
    if (persianConvention == 'هفته') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (persianConvention == 'روز') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Seconds conventions
    if (persianConvention == 'دومین' || persianConvention == 'ثانیه') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Minute conventions
    if (persianConvention == 'دقایق' || persianConvention == 'دقیقه') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (persianConvention == 'ساعت') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.translators = [exports.persianToEnglish]