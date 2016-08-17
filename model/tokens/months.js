var consts = require ('../consts.js')

exports.tokens = [ 
    {
        regex: /(^|\b)(jan|january)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
            }]
    },
    {
        regex: /(^|\b)(feb|february)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 2
            }]
    },
    {
        regex: /(^|\b)(mar|march)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 3
            }]
    },
    {
        regex: /(^|\b)(apr|april)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 4
            }]
    },
    {
        regex: /(^|\b)(may)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
            }]
    },
    {
        regex: /(^|\b)(jun|june)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
            }]
    },
    {
        regex: /(^|\b)(jul|july)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 7
            }]
    },
    {
        regex: /(^|\b)(aug|august)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 8
            }]
    },
    {
        regex: /(^|\b)(sep|september)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
            }]
    },
    {
        regex: /(^|\b)(oct|october)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
            }]
    },
    {
        regex: /(^|\b)(nov|november)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 11
            }]
    },
    {
        regex: /(^|\b)(dec|december)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
            }]
    }]; // Until next year