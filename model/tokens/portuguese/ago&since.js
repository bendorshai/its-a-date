var consts = require('../../consts.js');
var translator = require('../../tokens_util/portuguese/translator.js');

exports.tokens = [
    {
        // Examples: 10 hours ago
        example: 'há 10 horas',
        category: 'ago since before & after',
        regex: /(?:\b|^)(?:h[aá]\s)?(\d+)\s+(dia|mes|ano|semana|hora|minuto)(?:s|es)?\s?(atr[aá]s|antes)?(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.portugueseToEnglish(match[this.variables.timeType]);
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
        example: 'há uma hora',
        category: 'ago since before & after',
        regex: /(?:\b|^)(?:há)\s(uma?)\s+(dia|mes|ano|semana|hora|minuto)(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.portugueseToEnglish(match[this.variables.timeType]);
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