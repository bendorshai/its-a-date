var consts = require('../../consts.js');

// Converts a french word convention to one of our english conventions
exports.frenchToEnglish = function (frenchConvention) {

    // Week conventions
    if (frenchConvention == 'semaine') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (frenchConvention == 'jour') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Minute conventions
    if (frenchConvention == 'minute') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (frenchConvention == 'heure') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.translators = [exports.frenchToEnglish]