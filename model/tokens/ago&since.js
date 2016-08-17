var consts = require ('../consts.js');

module.exports = exports = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        regex: /(?:\s|^)(\d+)\s+(.+?)s?\s+(?:ago|before)(?:\s|$)/,
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
        regex: /(?:\s|^)(\d+)\s+(.+?)s?\s+(?:since|after)(?:\s|$)/,
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