var consts = require('../../consts.js');
var translator = require('../../tokens_util/french/translator.js');

exports.tokens = [
    {
        // Examples: 2 hours ago
        example: 'il y a 2 heures',
        category: 'ago since before & after',
        regex: /(?:\b|^)(?:[iI]l\s(?:y|ya|y a|y'a))\s(\d+)\s+(heure|minute|jour|semaine)[s](?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.frenchToEnglish(match[this.variables.timeType]);
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
        // Examples: A week ago
        example: 'il y a une semaine',
        category: 'ago since before & after',
        regex: /(?:\b|^)(?:[iI]l\s(?:y|ya|y a|y'a))\s(?:un[e]?)\s+(heure|minute|jour|semaine)(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            timeType: 1
        },
        affectsGenerator: function (match) {
            var value = 1;

            // Convert to a known english convention
            var timeType = translator.frenchToEnglish(match[this.variables.timeType]);
            var calculated = -1;

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