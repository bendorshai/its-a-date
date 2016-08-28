var consts = require('../../consts.js');
var translator = require('./translator.js');

exports.tokens = [
    {
        // Examples: 10 hours ago
        example: 'قبل 10 ساعات',
        category: 'ago since before & after',
        regex: /(?:[\s,\.-]|^)(?:منذ|قبل|مضت)\s+(\d+)\s+(.+|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.arabicToEnglish(match[this.variables.timeType]);
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
        example: 'قبل ساعة',
        category: 'ago since before & after',
        regex: /(?:[\s,\.-]|^)(منذ|قبل|مضت)\s+([^\s\d]+)(.*|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.arabicToEnglish(match[this.variables.timeType]);
            var calculated = -1;

            // In arabic there are special conventions for when the use of 2
            // e.g - two hours 'ساعتين'
            if (!timeType) {
                timeType = translator.twoConvention(match[this.variables.timeType]);
                calculated = -2;
            }

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