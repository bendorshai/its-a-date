var consts = require('../../consts.js')

exports.tokens = [
    {
        // yesterday
        example: 'Hier 22:15:52',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)(hier|Hier)(?:[\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: -1
        }]
    },
    {
        // tomorrow
        example: 'Demain à 15h15',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)(demain|Demain)(?:[\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: 1
        }]
    }];