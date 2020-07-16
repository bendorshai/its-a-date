var consts = require('../../consts.js')

exports.tokens = [
    {
        // yesterday
        example: 'ontem',
        category: 'yesterday & tommorow',
        regex: /(?:\b|^)(ontem)(?:\b|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: -1
        }]
    },
    {
        // tommorow
        example: 'amanhã',
        category: 'yesterday & tommorow',
        regex: /(?:\b|^)(amanh[ãa])(?:\b|$)/,
        affects: [{
            timeType: consts.timeTypes.day,
            affectType: consts.reltivity.relative,
            value: 1
        }]
    }];