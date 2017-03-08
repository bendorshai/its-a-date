var consts = require('../../consts.js')

exports.tokens = [
    {
        // yesterday
        example: 'Εχθές at 11:22',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)εχθές/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: -1
        }]
    },
    {
        // tomorrow
        example: 'αύριο στις 09:09 π.μ.',
        category: 'yesterday & tommorow',
        regex: /(?:[\s,\.-]|^)αύριο/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: 1
        }]
    }];