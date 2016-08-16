var consts = require ('./consts.js');

module.exports = exports = [
    {
        // Example 11/1/1990
        regex: /(\d{1,2})[\/\\.,](\d{1,2})[\/\\.,](\d{4})/,
        affects: [
            // First capture group
            {
                timeType: consts.timeTypes.date,
                affectType: consts.reltivity.absolute
            },
            // Second capture group
            {
                timeType: consts.timeTypes.month,
                affectType: consts.reltivity.absolute
            },
            // Third capture group
            {
                timeType: consts.timeTypes.year,
                affectType: consts.reltivity.absolute
            }
        ]
    },
    {
        // Example 1:55
        regex: /(\d{1,2})[:](\d{1,2})/,
        affects: [
            {
                timeType: consts.timeTypes.hour,
                affectType: consts.reltivity.absolute
            },
            {
                timeType: consts.timeTypes.minute,
                affectType: consts.reltivity.absolute
            }
        ]
    },
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        // or: 
        regex: /(?:\s|^)(\d+)\s(.+?)s?\s(?:ago|before)(?:\s|$)/,
        affectsGenerator: function(match)
        {
            return [{
                timeType: consts.timeTypes[match[2]],
                affectType: consts.reltivity.relative,
                value: match[1] * (-1)
            }]
        }
    },
    {
        // Examples: 5 years since ___, 2 months after
        regex: /(?:\s|^)(\d+)\s(.+?)s?\s(?:since|after)(?:\s|$)/,
        affectsGenerator: function(match)
        {
            return [{
                timeType: consts.timeTypes[match[2]],
                affectType: consts.reltivity.relative,
                value: match[1]
            }]
        }
    }
];