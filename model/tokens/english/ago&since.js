var consts = require('../../consts.js');

exports.tokens = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        example: '5 years ago',
        category: 'ago since before & after',
        // Examples: 
        // 4 weeks ago
        // 4 weeks and 3 days ago
        regex: /(?:\b|^)(\d+)\s+(day|month|year|week|hour|minute)s?\s+(and\s+(\d+)\s+(day|month|year|week|hour|minute)s?\s+)?(?:ago|before)(?:\b|$)/,
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {

            // Group Indexes
            const valueIdx = 1;
            const timeTypeIdx = 2;
             // Example :.. and 4 days...
            const extensionToRelativenessIdx = 3;
            const secondaryValueIdx = 4;
            const secondaryTimeType = 5;

            const affects = [];

            // Handle first term

            var timeType = match[timeTypeIdx];
            var firstValue = match[valueIdx] * (-1);

            affects.push(
                pasrseToAffect(timeType, firstValue)
            );

            // Do we have a secondary term?
            // Meaning:3 weeks >>>and 7 days<<< ago
            if (match[extensionToRelativenessIdx]) {

                var timeType = match[secondaryTimeType];
                var firstValue = match[secondaryValueIdx] * (-1);
    
                affects.push(
                    pasrseToAffect(timeType, firstValue)
                );
            }

            return affects;
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

/**
 * 
 * @param {*} timeType 
 * @param {*} value 
 * @returns Object with new timeType and Value
 */
function pasrseToAffect(timeTypeName, value)
{
    if (timeTypeName == 'week') {
        timeTypeName = 'day';
        value *= 7;
    }

    return {
        timeType: consts.timeTypes[timeTypeName],
        affectType: consts.reltivity.relative,
        value: value
    };
}