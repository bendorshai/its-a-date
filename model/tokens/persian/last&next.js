var consts = require('../../consts.js');
var converter = require('../../tokens_util/common/week_day_converter.js');

exports.tokens = [
    {
        // Examples: Last Sunday at 17:46
        example: 'آخرین یکشنبه در 15:15',
        category: 'last & next',
        regex: /(?:[\s,\.-]|^)(یکشنبه|یَکشَنبه|دوشَنبه|دوشنبه|سَهشَنبه|سه شنبه|چِهار شَنبه|چهارشنبه|پَنج شَنبه|پنجشنبه|جُمعه|جمعه|شَنبه|شنبه)(?:.+|$)/,
        variables: {
            timeType: 1,
        },
        affectsGenerator: function (match) {
            var dayValue = converter.convert(match[this.variables.timeType]);
            var currentDay = new Date().getDay();
            var calculatedValue = converter.calculateLastConvention(currentDay, dayValue);
            timeType = 'day';

            return [{
                timeType: consts.timeTypes[timeType],
                affectType: consts.reltivity.relative,
                value: calculatedValue
            }]
        }
    }
];