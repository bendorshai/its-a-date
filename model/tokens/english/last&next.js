var consts = require('../../consts.js');
var converter = require('../../tokens_util/common/week_day_converter.js');

exports.tokens = [
    {
        // Examples: Last sunday
        example: 'Last sunday',
        category: 'last & next',
        regex: /(?:\b|^)(Last|last)\s(sunday|monday|tuesday|wednesday|thursday|friday|saturday)(?:\b|$)/,
        variables: {
            timeType: 1,
            dayValue: 2
        },
        affectsGenerator: function (match) {
            var dayValue = converter.convert(match[this.variables.dayValue]);
            var currentDay = new Date().getDay();
            var calculatedValue = converter.calculateLastConvention(currentDay, dayValue);
            timeType = 'day';

            return [{
                timeType: consts.timeTypes[timeType],
                affectType: consts.reltivity.relative,
                value: calculatedValue
            }]
        }
    },
    {
        // Examples: Next friday
        example: 'Next friday',
        category: 'last & next',
        regex: /(?:\b|^)(Next|next)\s(sunday|monday|tuesday|wednesday|thursday|friday|saturday)(?:\b|$)/,
        variables: {
            timeType: 1,
            dayValue: 2
        },
        affectsGenerator: function (match) {
            var dayValue = converter.convert(match[this.variables.dayValue]);
            var currentDay = new Date().getDay();
            var calculatedValue = converter.calculateNextConvention(currentDay, dayValue);
            timeType = 'day';

            return [{
                timeType: consts.timeTypes[timeType],
                affectType: consts.reltivity.relative,
                value: calculatedValue
            }]
        }
    },
    {
        // Examples: This tuesday
        example: 'This tuesday',
        category: 'last & next',
        regex: /(?:\b|^)(This|this)\s(sunday|monday|tuesday|wednesday|thursday|friday|saturday)(?:\b|$)/,
        variables: {
            timeType: 1,
            dayValue: 2
        },
        affectsGenerator: function (match) {
            var dayValue = converter.convert(match[this.variables.dayValue]);
            var currentDay = new Date().getDay();
            var calculatedValue = converter.calculateThisConvention(currentDay, dayValue);
            timeType = 'day';

            return [{
                timeType: consts.timeTypes[timeType],
                affectType: consts.reltivity.relative,
                value: calculatedValue
            }]
        }
    },
    {
        // Examples: Last year, last month, last week, last hour
        example: 'last year',
        category: 'last & next',
        regex: /(?:\b|^)(Last|last)\s(year|month|week|day|hour|minute|second)(?:\b|$)/,
        variables: {
            timeType: 2
        },
        affectsGenerator: function (match) {
            var timeType = match[this.variables.timeType];
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
    },
    {
        // Examples: Next year, next month, next week, next hour
        example: 'Next year',
        category: 'last & next',
        regex: /(?:\b|^)(Next|next)\s(year|month|week|day|hour|minute|second)(?:\b|$)/,
        variables: {
            timeType: 2
        },
        affectsGenerator: function (match) {
            var timeType = match[this.variables.timeType];
            var calculated = 1;

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