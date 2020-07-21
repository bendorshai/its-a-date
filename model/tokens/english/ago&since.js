var consts = require('../../consts.js');
var converter = require('words-to-numbers');
var patterns = require('../../patterns/english/numbers');

exports.tokens = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        example: '5 years ago',
        category: 'ago since before & after',
        // Examples: 
        // 4 weeks ago
        // 4 weeks and 3 days ago
        regex: new RegExp(`(?:\\b|^)(${patterns.numbers})\\s+(day|month|year|week|hour|minute)s?\\s+(and\s+(\\d+)\\s+(day|month|year|week|hour|minute)s?\\s+)?(?:ago|before)(?:\\b|$)`),
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


            var firstValue = match[valueIdx]
            if(!/\d+/.test(firstValue)){
                firstValue = converter.wordsToNumbers(firstValue)
            }
            firstValue = firstValue * (-1);

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