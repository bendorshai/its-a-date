var consts = require('../../consts.js')

exports.tokens = [
    {
        example: 'Янв',
        category: 'months',
        regex: /(^|[\s,\.-])(Янв|Январь)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
        }]
    },
    {
        // february
        example: 'Фев',
        category: 'months',
        regex: /(^|[\s,\.-])(Фев|Февраль)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 2
        }]
    },
    {
        // march
        example: 'Мар',
        category: 'months',
        regex: /(^|[\s,\.-])(Мар|Март)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 3
        }]
    },
    {
        // april
        example: 'Апр',
        category: 'months',
        regex: /(^|[\s,\.-])(Апр|Апрель)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 4
        }]
    },
    {
        // may
        example: 'Май',
        category: 'months',
        regex: /(^|[\s,\.-])(Май)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
        }]
    },
    {
        // june
        example: 'Июн',
        category: 'months',
        regex: /(^|[\s,\.-])(Июн|Июнь)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
        }]
    },
    {
        // july
        example: 'Июл',
        category: 'months',
        regex: /(^|[\s,\.-])(Июл|Июль)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 7
        }]
    },
    {
        // august
        example: 'Авг',
        category: 'months',
        regex: /(^|[\s,\.-])(Авг|Август)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 8
        }]
    },
    {
        // september
        example: 'Сен',
        category: 'months',
        regex: /(^|[\s,\.-])(Сен|Сентябрь)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
        }]
    },
    {
        // october
        example: 'Окт',
        category: 'months',
        regex: /(^|[\s,\.-])(Окт|Октябрь)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
        }]
    },
    {
        // november
        example: 'Ноя',
        category: 'months',
        regex: /(^|[\s,\.-])(Ноя|Ноябрь)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 11
        }]
    },
    {
        // december
        example: 'Дек',
        category: 'months',
        regex: /(^|[\s,\.-])(Дек|Декабрь)([\s,\.-]|$)/i,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }]; // Until next year*/