var consts = require('../../consts.js')

exports.tokens = [
    {
        // january
        example: 'يناير',
        category: 'months',
        regex: /(^|[\s,\.-])(يناير|جانفي)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
        }]
    },
    {
        // february
        example: 'فبراير',
        category: 'months',
        regex: /(^|[\s,\.-])(فبراير|فيفري)([\s,\.-]|$)/,
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
        example: 'أبريل',
        category: 'months',
        regex: /(^|[\s,\.-])(أبريل|إبريل|أفريل)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 4
        }]
    },
    {
        // may
        example: 'مايو',
        category: 'months',
        regex: /(^|[\s,\.-])(مايو|ماي)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
        }]
    },
    {
        // june
        example: 'يونيو',
        category: 'months',
        regex: /(^|[\s,\.-])(يونيو|يونية|جوان)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
        }]
    },
    {
        // july
        example: 'يوليو',
        category: 'months',
        regex: /(^|[\s,\.-])(يوليو|يولية|جويلية|يوليوز)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 7
        }]
    },
    {
        // august
        example: 'أغسطس',
        category: 'months',
        regex: /(^|[\s,\.-])(أغسطس|أوت|غشت)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 8
        }]
    },
    {
        // september
        example: 'سبتمبر',
        category: 'months',
        regex: /(^|[\s,\.-])(سبتمبر|شتمبر)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
        }]
    },
    {
        // october
        example: 'أكتوبر',
        category: 'months',
        regex: /(^|[\s,\.-])(أكتوبر)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
        }]
    },
    {
        // november
        example: 'نوفمبر',
        category: 'months',
        regex: /(^|[\s,\.-])(نوفمبر|نونبر)([\s,\.-]|$)/,
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
        regex: /(^|[\s,\.-])(ديسمبر|دجمبر)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }]; // Until next year*/