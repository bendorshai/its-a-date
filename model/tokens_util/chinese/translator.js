var consts = require('../../consts.js');

// Converts a chinese word convention to one of our english conventions
exports.chineseToEnglish = function (chineseConvention) {

    if (chineseConvention == '月') {
        return consts.timeTypes[consts.timeTypes.month];
    }
    // Week conventions
    if (chineseConvention == '周') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (chineseConvention == '天') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Seconds conventions
    if (chineseConvention == '第二') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Minute conventions
    if (chineseConvention == '分') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (chineseConvention == '小时') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    return undefined;
}

exports.translators = [exports.chineseToEnglish]