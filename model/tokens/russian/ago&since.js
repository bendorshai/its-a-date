var consts = require('../../consts.js');
var translator = require('./translator.js');

exports.tokens = [
    {
        // Examples: 5 years ago
        example: '5 дней назад',
        category: 'ago since before & after',
        regex: /(?:[\s,\.-]|^)(\d+)\s+(.+?)\s+(?:назад)(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.russianToEnglish(match[this.variables.timeType]);
            var calculated = match[this.variables.value] * (-1);

            if (timeType == 'week') {
                timeType = 'day';
                calculated *= 7;
            }

            return [{
                timeType: consts.timeTypes[timeType],
                affectType: consts.reltivity.relative,
                value: calculated
            }]
        }
    }
];