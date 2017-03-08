var consts = require('../../consts.js');
var converter = require('../../tokens_util/common/week_day_converter.js');

exports.tokens = [
    {
        // Examples: Sunday at 02:59 pm
        example: 'Κυριακή at 02:59 μμ',
        category: 'last & next',
        regex: /(?:[\s,\.-]|^)(κυριακή|δευτέρα|τρίτη|τετάρτη|πέμπτη|παρασκευή|σάββατο)/,
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