var consts = require('../../consts.js')

exports.tokens = [
    {
        // January
        example: 'Ocak',
        category: 'months',
        regex: /(^|\b)(ocak|Ocak)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
        }]
    },
    {
        // February
        example: 'Şubat',
        category: 'months',
        regex: /(^|\b)(şubat|Şubat)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 2
        }]
    },
    {
        // March
        example: 'Mart',
        category: 'months',
        regex: /(^|\b)(mart|Mart)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 3
        }]
    },
    {
        // April
        example: 'Nisan',
        category: 'months',
        regex: /(^|\b)(nisan|Nisan)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 4
        }]
    },
    {
        // May
        example: 'Mayıs',
        category: 'months',
        regex: /(^|\b)(mayıs|Mayıs)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
        }]
    },
    {
        // June
        example: 'Haziran',
        category: 'months',
        regex: /(^|\b)(haziran|Haziran)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
        }]
    },
    {
        // July
        example: 'Temmuz',
        category: 'months',
        regex: /(^|\b)(temmuz|Temmuz)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 7
        }]
    },
    {
        // August
        example: 'Ağustos',
        category: 'months',
        regex: /(^|\b)(ağustos|Ağustos)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 8
        }]
    },
    {
        // September
        example: 'Eylül',
        category: 'months',
        regex: /(^|\b)(eylül|Eylül)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
        }]
    },
    {
        // October
        example: 'Ekim',
        category: 'months',
        regex: /(^|\b)(ekim|Ekim)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
        }]
    },
    {
        // November
        example: 'Kasım',
        category: 'months',
        regex: /(^|\b)(kasım|Kasım)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 11
        }]
    },
    {
        // December
        example: 'Aralık',
        category: 'months',
        regex: /(^|\b)(aralık|Aralık)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }];