var consts = require('../../consts.js')

exports.tokens = [
    {
        // yesterday
        example: 'вчера',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)(вчера|Вчера)(?:[\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: -1
        }]
    },
    {
        // tomorrow
        example: 'завтра',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)(завтра)(?:[\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: 1
        }]
    }];