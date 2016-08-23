var consts = require('../../consts.js')

exports.tokens = [
    {
        example: 'jan',
        category: 'months',
        regex: /(^|\b)(jan|january)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
        }]
    },
    {
        example: 'feb',
        category: 'months',
        regex: /(^|\b)(feb|february)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 2
        }]
    },
    {
        example: 'mar',
        category: 'months',
        regex: /(^|\b)(mar|march)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 3
        }]
    },
    {
        example: 'apr',
        category: 'months',
        regex: /(^|\b)(apr|april)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 4
        }]
    },
    {
        example: 'may',
        category: 'months',
        regex: /(^|\b)(may)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
        }]
    },
    {
        example: 'jun',
        category: 'months',
        regex: /(^|\b)(jun|june)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
        }]
    },
    {
        example: 'jul',
        category: 'months',
        regex: /(^|\b)(jul|july)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 7
        }]
    },
    {
        example: 'aug',
        category: 'months',
        regex: /(^|\b)(aug|august)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 8
        }]
    },
    {
        example: 'sep',
        category: 'months',
        regex: /(^|\b)(sep|september)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
        }]
    },
    {
        example: 'oct',
        category: 'months',
        regex: /(^|\b)(oct|october)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
        }]
    },
    {
        example: 'nov',
        category: 'months',
        regex: /(^|\b)(nov|november)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 11
        }]
    },
    {
        example: 'dec',
        category: 'months',
        regex: /(^|\b)(dec|december)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }]; // Until next year