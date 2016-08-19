var consts = require ('../consts.js');

exports.tokens = [ {
        example:'11.1.1990',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2})[-\/\\.](\d{1,2})[-\/\\.](\d{4})(?:$|\b)/,
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
        example:'1:55pm',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2})[:](\d{1,2})(?::\d{1,2})?\s*(am|pm)?(?:$|\b)/,
        affectsGenerator: function(match) {
            
            var hour = match[1];
            
            if (match[3] == 'pm')
            {
                hour += 12;
            }
            
            return [
            {
                timeType: consts.timeTypes.hour,
                affectType: consts.reltivity.absolute,
                value: hour
            },
            {
                timeType: consts.timeTypes.minute,
                affectType: consts.reltivity.absolute,
                value: match[2]
            }]
        }
    }];