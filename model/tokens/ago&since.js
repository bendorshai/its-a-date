var consts = require ('../consts.js');

exports.tokens = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        example: '5 years ago',
        category: 'ago since before & after',
        regex: /(?:\b|^)(\d+)\s+(.+?)s?\s+(?:ago|before)(?:\b|$)/,
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
        example: '2 days since',
        category: 'ago since before & after',
        regex: /(?:\b|^)(\d+)\s+(.+?)s?\s+(?:since|after)(?:\b|$)/,
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

// export words for other token verifiers
exports.relativeWords = ['ago','before','since','after']