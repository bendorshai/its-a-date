var consts = require('../../consts.js')

exports.tokens = [
    {
        // january
        example: 'ιανουαριος',
        category: 'months',
        regex: /(^|[\s,\.-])(ιαν|ιανουαριος|ιανουάριος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 1
        }]
    },
    {
        // february
        example: 'φεβρουάριος',
        category: 'months',
        regex: /(^|[\s,\.-])(φεβ|φεβρουάριος|φλεβάρης|φεβρουαριος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 2
        }]
    },
    {
        // march
        example: 'μάρτης',
        category: 'months',
        regex: /(^|[\s,\.-])(μαρ|μάρ|μάρτιος|μάρτης|μαρτιος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 3
        }]
    },
    {
        // april
        example: 'απρίλης',
        category: 'months',
        regex: /(^|[\s,\.-])(απρ|απρίλιος|απρίλης|απριλιος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 4
        }]
    },
    {
        // may
        example: 'ενδέχεται',
        category: 'months',
        regex: /(^|[\s,\.-])(μαΐου|μάιος|μάι|ενδέχεται|μάης|μαίος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 5
        }]
    },
    {
        // june
        example: 'ιούνης',
        category: 'months',
        regex: /(^|[\s,\.-])(ιούνη|ιούν|ιούνιος|ιούνης|ιουνιος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 6
        }]
    },
    {
        // july
        example: 'ιούλης',
        category: 'months',
        regex: /(^|[\s,\.-])(ιουλίου|ιούλ|ιούλιος|ιούλης|ιουλιος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 7
        }]
    },
    {
        // august
        example: 'αύγουστος',
        category: 'months',
        regex: /(^|[\s,\.-])(αυγ|αύγ|αύγουστος|αυγουστος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 8
        }]
    },
    {
        // september
        example: 'σεπτέμβρης',
        category: 'months',
        regex: /(^|[\s,\.-])(σεπτεμβρίου|σεπτέμβριος|σεπ|σεπτέμβρης|σεπτεμβριος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 9
        }]
    },
    {
        // october
        example: 'οκτώβρης',
        category: 'months',
        regex: /(^|[\s,\.-])(οκτώβρη|οκτώβριος|οκτ|οκτώβρης|οκτωβριος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 10
        }]
    },
    {
        // november
        example: 'νοέμβριος',
        category: 'months',
        regex: /(^|[\s,\.-])(νοέμβρη|νοέμβριος|νοέ|νοέμβρης|νοεμβριος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 11
        }]
    },
    {
        // december
        example: 'δεκέμβρης',
        category: 'months',
        regex: /(^|[\s,\.-])(δεκεμβρίου|δεκέμβριος|δεκ|δεκέμβρης|δεκεμβριος)([\s,\.-]|$)/,
        affects: [{
            timeType: consts.timeTypes.month,
            affectType: consts.reltivity.absolute,
            value: 12
        }]
    }]; // Until next year*/