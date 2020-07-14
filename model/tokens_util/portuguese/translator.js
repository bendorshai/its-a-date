var consts = require('../../consts.js');

// Converts a portuguese word convention to one of our english conventions
exports.portugueseToEnglish = function (spanishConvention) {

    // Week conventions
    if (spanishConvention == 'semana') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (spanishConvention == 'dia') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Seconds conventions
    if (spanishConvention == 'segundo') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Minute conventions
    if (spanishConvention == 'minuto') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (spanishConvention == 'hora') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.translators = [exports.portugueseToEnglish]