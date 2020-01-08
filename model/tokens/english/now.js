var consts = require('../../consts.js');

exports.tokens = [
    {
        example: 'now',
        category: 'now',
        regex: /(?:\b|^)now|today(?:\b|$)/,
        affectsGenerator: function (match, settings) {
            var currentDate = settings.settings.base_date.base_date;

            return [
                {
                    timeType: consts.timeTypes.year,
                    affectType: consts.reltivity.absolute,
                    value: currentDate.getFullYear()
                },
                {
                    timeType: consts.timeTypes.month,
                    affectType: consts.reltivity.absolute,
                    value: currentDate.getMonth() + 1
                },
                {
                    timeType: consts.timeTypes.day,
                    affectType: consts.reltivity.absolute,
                    value: currentDate.getDate()
                },
                {
                    timeType: consts.timeTypes.hour,
                    affectType: consts.reltivity.absolute,
                    value: currentDate.getHours()
                },
                {
                    timeType: consts.timeTypes.minute,
                    affectType: consts.reltivity.absolute,
                    value: currentDate.getMinutes()
                }];
        }
    }
];
