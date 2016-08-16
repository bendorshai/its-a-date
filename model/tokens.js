var consts = require ('./consts.js');

module.exports = exports = [{
        regex: /(\d{1,2})[\/\\.,](\d{1,2})[\/\\.,](\d{4})/,
        // Token affects are date modifications =]
        affects: [
            // First capture group
            {
                timeType: consts.timeTypes.date,
                affectType: consts.reltivity.absolute
            },
            // Second capture group
            {
                timeType: consts.timeTypes.month,
                affectType: consts.reltivity.absolute
            },
            // Third capture group
            {
                timeType: consts.timeTypes.year,
                affectType: consts.reltivity.absolute
            }
        ]
    }
]