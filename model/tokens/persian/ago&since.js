var consts = require('../../consts.js');
var translator = require('../../tokens_util/persian/translator.js');

exports.tokens = [
    {
        // Examples: 10 hours ago
        example: '4 هفته قبل',
        category: 'ago since before & after',
        regex: /(?:[\s,\.-]|^)(\d+)\s(.+)\s(?:قبل|پیش)(.*|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.persianToEnglish(match[this.variables.timeType]);
            var calculated = match[this.variables.value] * -1;

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
    },
    {
        // Examples: A hour ago
        example: 'یک هفته قبل',
        category: 'ago since before & after',
        regex: /(?:[\s,\.-]|^)(?:یک)\s(.+)\s(?:قبل|پیش)(.*|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            timeType: 1
        },
        affectsGenerator: function (match) {
            var timeType = translator.persianToEnglish(match[this.variables.timeType]);
            var calculated = (-1);

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