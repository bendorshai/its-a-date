var consts = require('../../consts.js')

exports.tokens = [
    {
        // yesterday
        example: 'Dün saat 3:06 PM',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)(dün|Dün)(?:[\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: -1
        }]
    },
    {
        // tomorrow
        example: 'Yarın 15: 15\'te',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)(Yarın|yarın)(?:[\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: 1
        }]
    }];