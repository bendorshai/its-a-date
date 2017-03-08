var consts = require('../../consts.js');
var translator = require('../../tokens_util/greek/translator.js');

exports.tokens = [
    {
        // Examples: 2 minutes ago
        example: 'πριν από 2 λεπτά',
        category: 'ago since before & after',
        regex: /(?:[\s,\.-]|^)(?:πριν από|πριν)\s(\d+)\s(.+|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.greekToEnglish(match[this.variables.timeType]);
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
        // Examples: 6 hours ago
        example: '6 ώρες πριν',
        category: 'ago since before & after',
        regex: /(?:[\s,\.-]|^)(\d+)\s(.+)\s(?:πριν)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.greekToEnglish(match[this.variables.timeType]);
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
        example: 'πριν από μία εβδομάδα',
        category: 'ago since before & after',
        regex: /(?:[\s,\.-]|^)(?:μία|ένα)\s([A-ZA-zΑ-Ωα-ωίϊΐόάέύϋΰήώ]+)/,
        // The indexes of capturing gorups in the match
        variables: {
            timeType: 1
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.greekToEnglish(match[this.variables.timeType]);
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