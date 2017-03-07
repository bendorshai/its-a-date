var consts = require('../../consts.js')

exports.tokens = [
    {
        // january
        example: 'enero',
        category: 'months',
        regex: /(^|\b)(enero)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
        }]
    },
    {
        // february
        example: 'febrero',
        category: 'months',
        regex: /(^|\b)(febrero)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 2
        }]
    },
    {
        // march
        example: 'marzo',
        category: 'months',
        regex: /(^|\b)(marzo)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 3
        }]
    },
    {
        // april
        example: 'abril',
        category: 'months',
        regex: /(^|\b)(abril)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 4
        }]
    },
    {
        // may
        example: 'mayo',
        category: 'months',
        regex: /(^|\b)(mayo)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
        }]
    },
    {
        // june
        example: 'junio',
        category: 'months',
        regex: /(^|\b)(junio)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
        }]
    },
    {
        // july
        example: 'julio',
        category: 'months',
        regex: /(^|\b)(julio)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 7
        }]
    },
    {
        // august
        example: 'agosto',
        category: 'months',
        regex: /(^|\b)(agosto)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 8
        }]
    },
    {
        // september
        example: 'septiembre',
        category: 'months',
        regex: /(^|\b)(septiembre)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
        }]
    },
    {
        // october
        example: 'octubre',
        category: 'months',
        regex: /(^|\b)(octubre)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
        }]
    },
    {
        // november
        example: 'noviembre',
        category: 'months',
        regex: /(^|\b)(noviembre)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 11
        }]
    },
    {
        // december
        example: 'diciembre',
        category: 'months',
        regex: /(^|\b)(diciembre)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }]; // Until next year*/