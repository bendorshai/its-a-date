var consts = require('../../consts.js');

// Converts an arabic word convention to one of our english conventions
exports.arabicToEnglish = function (arabicConvention) {

    // Week conventions
    if (arabicConvention == 'أسبوع') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (arabicConvention == 'ثانية') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Seconds conventions
    if (arabicConvention == 'ثانية' || arabicConvention == 'ثواني') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Minute conventions
    if (arabicConvention == 'دقيقة' || arabicConvention == 'دقائق') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (arabicConvention == 'ساعات' || arabicConvention == 'ساعة') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.twoConvention = function (arabicConvention) {

    // Day conventions
    if (arabicConvention == 'ثانيتين') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Minute conventions
    if (arabicConvention == 'دقيقتين') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (arabicConvention == 'ساعتين') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.translators = [exports.arabicToEnglish, exports.twoConvention]