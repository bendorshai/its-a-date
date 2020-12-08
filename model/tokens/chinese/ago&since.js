var consts = require('../../consts.js');
var translator = require('../../tokens_util/chinese/translator.js');

exports.tokens = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        example: '5 years ago',
        category: 'ago since before & after',
        // Examples: 
        // 4 weeks ago
        // 4 weeks and 3 days ago
        regex: /(?:\b|^)(\d+)\s?个?(天|月|年|周|小时|分)钟?((\d+)(天|月|年|周|小时|分)钟?)?(?:前)(?:\b|$)/,
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

            var timeType = translator.chineseToEnglish(match[this.variables.timeType]);
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
    if (timeTypeName == 'month') {
        timeTypeName = 'day';
        value *= 30;
    }
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