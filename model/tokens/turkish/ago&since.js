var consts = require('../../consts.js');
var translator = require('../../tokens_util/turkish/translator.js');

exports.tokens = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        example: '10 dakika önce',
        category: 'ago since before & after',
        regex: /(?:\b|^)(\d+|Bir|bir)\s+(saniye|dakika|saat|gün|hafta)\s+(?:önce)(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.turkishToEnglish(match[this.variables.timeType]);
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
        // Examples: an hour ago. a minute ago, an year ago
        example: 'Bir saat önce',
        category: 'ago since before & after',
        regex: /(?:\b|^)(bir)\s+(saat|gün|hafta|dakika)\s+(?:önce)(?:\b|$)/,
        // The indexes of capturing groups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.turkishToEnglish(match[this.variables.timeType]);
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