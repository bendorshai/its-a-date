var consts = require('../../consts.js')

exports.tokens = [
    {
        // january
        example: 'enero',
        category: 'months',
        regex: /(^|\b)(ene|enero)(\b|$)/,
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
        regex: /(^|\b)(feb|febrero)(\b|$)/,
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
        regex: /(^|\b)(mar|marzo)(\b|$)/,
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
        regex: /(^|\b)(abr|abril)(\b|$)/,
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
        regex: /(^|\b)(may|mayo)(\b|$)/,
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
        regex: /(^|\b)(jun|junio)(\b|$)/,
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
        regex: /(^|\b)(jul|julio)(\b|$)/,
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
        regex: /(^|\b)(ago|agosto)(\b|$)/,
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
        regex: /(^|\b)(sep|septiembre)(\b|$)/,
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
        regex: /(^|\b)(oct|octubre)(\b|$)/,
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
        regex: /(^|\b)(nov|noviembre)(\b|$)/,
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
        regex: /(^|\b)(dic|diciembre)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }]; // Until next year*/