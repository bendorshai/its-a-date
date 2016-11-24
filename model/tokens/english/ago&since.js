var consts = require('../../consts.js');

exports.tokens = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        example: '5 years ago',
        category: 'ago since before & after',
        regex: /(?:\b|^)(\d+)\s+(day|month|year|week|hour|minute)s?\s+(?:ago|before)(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            var timeType = match[this.variables.timeType];
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
    },
    {
        // Examples: 5 years since ___, 2 months after
        example: '2 days since',
        category: 'ago since before & after',
        regex: /(?:\b|^)(\d+)\s+(day|month|year|week|hour|minute)s?\s+(?:since|after)(?:\b|$)/,
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            var timeType = match[this.variables.timeType];
            var calculated = match[this.variables.value]

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
        example: 'an hour ago',
        category: 'ago since before & after',
        regex: /(?:\b|^)(a|an)\s+(day|month|year|week|hour|minute)s?\s+(?:ago|before)(?:\b|$)/,
        // The indexes of capturing groups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            var timeType = match[this.variables.timeType];
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