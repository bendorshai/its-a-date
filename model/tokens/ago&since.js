var consts = require ('../consts.js');

exports.tokens = [
    {
        // Examples: 5 years ago. 2 months ago, 1 day before __
        example: '5 years ago',
        category: 'ago since before & after',
        regex: /(?:\b|^)(\d+)\s+(.+?)s?\s+(?:ago|before)(?:\b|$)/,
        // The indexes of capturing gorups in the match
        variables: {
          value: 1,
          timeType: 2  
        },
        affectsGenerator: function(match)
        {
            var timeType = match[this.variables.timeType];
             var calculated =  match[this.variables.value] * (-1);
             
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
        regex: /(?:\b|^)(\d+)\s+(.+?)s?\s+(?:since|after)(?:\b|$)/,
        variables: {
          value: 1,
          timeType: 2  
        },
        affectsGenerator: function(match)
        {
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
    }
];

// export words for other token verifiers
exports.relativeWords = ['ago','before','since','after']