var consts = require('../../consts.js')

exports.tokens = [
    {
        // january
        example: 'janeiro',
        category: 'months',
        regex: /(^|\b)(jan|janeiro)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
        }]
    },
    {
        // february
        example: 'fevereiro',
        category: 'months',
        regex: /(^|\b)(fev|fevereiro)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 2
        }]
    },
    {
        // march
        example: 'março',
        category: 'months',
        regex: /(^|\b)(mar|março)(\b|$)/,
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
        example: 'maio',
        category: 'months',
        regex: /(^|\b)(mai|maio)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
        }]
    },
    {
        // june
        example: 'junho',
        category: 'months',
        regex: /(^|\b)(jun|junho)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
        }]
    },
    {
        // july
        example: 'julho',
        category: 'months',
        regex: /(^|\b)(jul|julho)(\b|$)/,
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
        }],
                // Note: only if verifier returns true the affects take place
        verifier: function (match, dateString, state, settings, token) {
            // Make sure this ago is for the spanish month and not relative dating in english  
            var patterns = require('../../patterns/english/numbers')
            var regex = new RegExp(`(?:\\b|^)(${patterns.numbers})\\s+(day|month|year|week|hour|minute|min|second|sec)s?`)
            
            return true;
        }
    },
    {
        // september
        example: 'setembro',
        category: 'months',
        regex: /(^|\b)(set|setembro)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
        }]
    },
    {
        // october
        example: 'outubro',
        category: 'months',
        regex: /(^|\b)(out|outubro)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
        }]
    },
    {
        // november
        example: 'novembro',
        category: 'months',
        regex: /(^|\b)(nov|novembro)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 11
        }]
    },
    {
        // december
        example: 'dezembro',
        category: 'months',
        regex: /(^|\b)(dez|dezembro)(\b|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }]; // Until next year*/