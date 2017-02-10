var consts = require('../../consts.js');

// Converts a turkish word convention to one of our english conventions
exports.turkishToEnglish = function (turkishConvention) {

    // Week conventions 
    if (turkishConvention == 'hafta') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (turkishConvention == 'gün') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Seconds conventions
    if (turkishConvention == 'saniye') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Minute conventions
    if (turkishConvention == 'dakika') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (turkishConvention == 'saat') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.translators = [exports.turkishToEnglish]