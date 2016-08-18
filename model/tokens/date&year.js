var consts = require ('../consts.js');

exports.tokens = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        regex: /(?:\s|^)(\d+)\s+(.+?)s?\s+(?:ago|before)(?:\s|$)/,
        affectsGenerator: function(match)
        {
            var timeType = match[2];

            if(timeType == 'day') {
                timeType = 'date';
            }

            return [{
                timeType: consts.timeTypes[timeType],
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
            var timeType = match[2];

            if(timeType == 'day') {
                timeType = 'date';
            }

            return [{
                timeType: consts.timeTypes[timeType],
                affectType: consts.reltivity.relative,
                value: match[1]
            }]
        }
    }
];