var consts = require('../../consts.js');

// Converts a greek word convention to one of our english conventions
exports.greekToEnglish = function (greekConvention) {

    // Month conventions
    if (greekConvention == 'μήνες' || greekConvention == 'μηνά' || greekConvention == 'μήνα') {
        return consts.timeTypes[consts.timeTypes.month];
    }

    // Week conventions
    if (greekConvention == 'εβδομάδ' || greekConvention == 'εβδομάδα' || greekConvention == 'εβδομάδες') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (greekConvention == 'ημέρα' || greekConvention == 'ημέρες' || greekConvention == 'ημέρες') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Seconds conventions
    if (greekConvention == 'δευτερόλεπτο' || greekConvention == 'δευτερόλεπτα') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Minute conventions
    if (greekConvention == 'λεπτά' || greekConvention == 'λεπτό') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (greekConvention == 'ώρες' || greekConvention == 'ώρα') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.translators = [exports.greekToEnglish]