var consts = require('../../consts.js')

exports.tokens = [
    {
        // yesterday
        example: 'ayer a las 23:20',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)(ayer|Ayer)(?:[\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: -1
        }]
    },
    {
        // tomorrow
        example: 'Mañana a las 15:15',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)(Mañana|mañana)(?:[\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: 1
        }]
    }];