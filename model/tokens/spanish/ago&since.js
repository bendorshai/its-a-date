var consts = require('../../consts.js');
var translator = require('../../tokens_util/spanish/translator.js');

exports.tokens = [
    {
        // Examples: 10 hours ago
        example: 'hace 10 horas',
        category: 'ago since before & after',
        regex: /(?:\b|^)(?:hace)\s(\d+)\s+(día|mes|año|semana|hora|minuto)(s|es)?(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.spanishToEnglish(match[this.variables.timeType]);
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
        example: 'hace una hora',
        category: 'ago since before & after',
        regex: /(?:\b|^)(?:hace)\s(un|una)\s+(día|mes|año|semana|hora|minuto)(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.spanishToEnglish(match[this.variables.timeType]);
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