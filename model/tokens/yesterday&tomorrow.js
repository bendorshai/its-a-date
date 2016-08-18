var consts = require ('../consts.js')

exports.tokens = [ 
    {
        // Examples: yesterday
        regex: /(?:\b|^)(yesterday)(?:\b|$)/,
        affects: [{
            timeType: consts.timeTypes.date,
            affectType: consts.reltivity.relative,
            value: -1
            }]
    },
    {
        // Examples: tomorrow
        regex: /(?:\b|^)(tomorrow)(?:\b|$)/,
        affects: [{
            timeType: consts.timeTypes.date,
            affectType: consts.reltivity.relative,
            value: 1
            }]
    }];