var consts = require ('../consts.js')

exports.tokens = [ 
    {
        example: 'yesterday',
        regex: /(?:\b|^)(yesterday)(?:\b|$)/,
        affects: [{
            timeType: consts.timeTypes.date,
            affectType: consts.reltivity.relative,
            value: -1
            }]
    },
    {
        example: 'tomorrow',
        regex: /(?:\b|^)(tomorrow)(?:\b|$)/,
        affects: [{
            timeType: consts.timeTypes.date,
            affectType: consts.reltivity.relative,
            value: 1
            }]
    }];