var consts = require('../../consts.js');

exports.tokens = [
    {
        example: 'только что',
        category: 'now',
        regex: /(?:\b|^)только что(?:\b|$)/,
        affectsGenerator: function () {
            var now = new Date();

            return [
                {
                    timeType: consts.timeTypes.year,
                    affectType: consts.reltivity.absolute,
                    value: now.getFullYear()
                },
                {
                    timeType: consts.timeTypes.month,
                    affectType: consts.reltivity.absolute,
                    value: now.getMonth() + 1 //  <-- stupidest thing in js :(
                },
                {
                    timeType: consts.timeTypes.day,
                    affectType: consts.reltivity.absolute,
                    value: now.getDate()
                },
                {
                    timeType: consts.timeTypes.hour,
                    affectType: consts.reltivity.absolute,
                    value: now.getHours()
                },
                {
                    timeType: consts.timeTypes.minute,
                    affectType: consts.reltivity.absolute,
                    value: now.getMinutes()
                }];
        }
    }
];
