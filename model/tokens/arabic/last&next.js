var consts = require('../../consts.js');
var converter = require('../../tokens_util/common/week_day_converter.js');

exports.tokens = [
    {
        // Examples: Sunday at 17:46
        example: 'يوم الأحد في الساعة 13:15',
        category: 'last & next',
        regex: /(?:[\s,\.-]|^)(?:يوم)\s+(السبت|الجمعة|الخميس|الأربعاء|الثلاثاء|الاثنين|الإثنين|الأحد)(?:.+|$)/,
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