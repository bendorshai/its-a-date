var consts = require ('../consts.js');

exports.tokens = [ {
        // Example 11/1/1990
        regex: /(?:^|\s)(\d{1,2})[\/\\.,](\d{1,2})[\/\\.,](\d{4})(?:$|\s)/,
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
    },
    {
        // Example 1:55
        regex: /(?:^|\s)(\d{1,2})[:](\d{1,2})(?:$|\s)/,
        affects: [
            {
                timeType: consts.timeTypes.hour,
                affectType: consts.reltivity.absolute
            },
            {
                timeType: consts.timeTypes.minute,
                affectType: consts.reltivity.absolute
            }
        ]
    }];