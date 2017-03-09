var consts = require('../../consts.js')

exports.tokens = [
    {
        // january
        example: 'ژانوِیه',
        category: 'months',
        regex: /(^|[\s,\.-])(ژانویه|ژانوِیه)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
        }]
    },
    {
        // february
        example: 'فوریه',
        category: 'months',
        regex: /(^|[\s,\.-])(فِورِیه|فوریه)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 2
        }]
    },
    {
        // march
        example: 'مارس',
        category: 'months',
        regex: /(^|[\s,\.-])(مارس)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 3
        }]
    },
    {
        // april
        example: 'آوریل',
        category: 'months',
        regex: /(^|[\s,\.-])(آوریل)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 4
        }]
    },
    {
        // may
        example: 'مه',
        category: 'months',
        regex: /(^|[\s,\.-])(مه)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
        }]
    },
    {
        // june
        example: 'ژوئن',
        category: 'months',
        regex: /(^|[\s,\.-])(ژوئن)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
        }]
    },
    {
        // july
        example: 'ژوئیه',
        category: 'months',
        regex: /(^|[\s,\.-])(ژوئیه)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 7
        }]
    },
    {
        // august
        example: 'اوت',
        category: 'months',
        regex: /(^|[\s,\.-])(اوت)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 8
        }]
    },
    {
        // september
        example: 'سِپتامبر',
        category: 'months',
        regex: /(^|[\s,\.-])(سِپتامبر|سپتام|سپتامبر)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
        }]
    },
    {
        // october
        example: 'اُکتُبر',
        category: 'months',
        regex: /(^|[\s,\.-])(اُکتُبر|اکتبر)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
        }]
    },
    {
        // november
        example: 'نُوامبر',
        category: 'months',
        regex: /(^|[\s,\.-])(نوامبر|نُوامبر)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 11
        }]
    },
    {
        // december
        example: 'ديسمبر',
        category: 'months',
        regex: /(^|[\s,\.-])(دِسامبر|دسامبر)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }]; // Until next year*/