var consts = require('../../consts.js');

exports.tokens = [
    {
        example: '2 hrs',
        category: 'facebook',
        regex: /(?:\b|^)(\d+)\s+hrs?(?:\b|$)/,
        affectsGenerator: function (match) {
            return [{
                timeType: consts.timeTypes[consts.timeTypes.hour],
                affectType: consts.reltivity.relative,
                value: match[1] * (-1)
            }]
        }
    },
    {
        example: '16 mins',
        category: 'facebook',
        regex: /(?:\b|^)(\d+)\s+mins?(?:\b|$)/,
        affectsGenerator: function (match) {
            return [{
                timeType: consts.timeTypes[consts.timeTypes.minute],
                affectType: consts.reltivity.relative,
                value: match[1] * (-1)
            }]
        }
    }
];