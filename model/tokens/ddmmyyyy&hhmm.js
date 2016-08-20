var consts = require ('../consts.js');
var parser = require ('../parser.js');

exports.tokens = [ {
        example:'11.1.1990',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2})[-\/\\.](\d{1,2})[-\/\\.](\d{4})(?:$|\b)/,
        affectsGenerator: function() {
            // If the middle endian format flag is on,
            // Set first capture group as month and second as day
            if (parser.middle_endian_format) {
                return [
                // First capture group
                {
                    timeType: consts.timeTypes.month,
                    affectType: consts.reltivity.absolute
                },
                // Second capture group
                {
                    timeType: consts.timeTypes.day,
                    affectType: consts.reltivity.absolute
                },
                // Third capture group
                {
                    timeType: consts.timeTypes.year,
                    affectType: consts.reltivity.absolute
                }]
            }
            // Else, set first capture group as day and second as month
            else {
                return [
                // First capture group
                {
                    timeType: consts.timeTypes.day,
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
                }]
            }
        }
    },     
    {
        example:'1990.1.11',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{4})[-\/\\.](\d{1,2})[-\/\\.](\d{1,2})(?:$|\b)/,
        affectsGenerator: function() {
            // If the middle endian format flag is on,
            // Set first capture group as month and second as day
            if (parser.middle_endian_format) {
                return [
                // First capture group
                {
                    timeType: consts.timeTypes.year,
                    affectType: consts.reltivity.absolute
                },
                // Second capture group
                {
                    timeType: consts.timeTypes.day,
                    affectType: consts.reltivity.absolute
                },
                // Third capture group
                {
                    timeType: consts.timeTypes.month,
                    affectType: consts.reltivity.absolute
                }]
            }
            // Else, set first capture group as day and second as month
            else {
                return [
                // First capture group
                {
                    timeType: consts.timeTypes.year,
                    affectType: consts.reltivity.absolute
                },
                // Second capture group
                {
                    timeType: consts.timeTypes.month,
                    affectType: consts.reltivity.absolute
                },
                // Third capture group
                {
                    timeType: consts.timeTypes.day,
                    affectType: consts.reltivity.absolute
                }]
            }
        }
    },
    {
        example:'1:55pm',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2})[:](\d{1,2})(?::\d{1,2})?\s*(am|pm)?(?:$|\b)/,
        affectsGenerator: function(match) {
            
            var hour = match[1];
            
            if (match[3] == 'pm')
            {
                hour = Number(hour) + 12;
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