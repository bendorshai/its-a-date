var consts = require ('../../consts.js');

exports.tokens = [ {
        example:'11.1.1990',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2})[-\/\\.](\d{1,2})[-\/\\.](\d{4})(?:$|\b)/,
        affectsGenerator: function(match, settings) {
            
            var day_before_month = settings.get('day_before_month');
            
            // If the day_before_month format flag is on,
            // set first capture group as day and second as month
            if (day_before_month) {
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
            // Set first capture group as month and second as day
            else {
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
        }
    },     
    {
        example:'1990.1.11',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{4})[-\/\\.](\d{1,2})[-\/\\.](\d{1,2})(?:$|\b)/,
        affectsGenerator: function(match, settings) {
            
            var day_before_month = settings.get('day_before_month');
            
            // If the middle endian format flag is on,
            // Set first capture group as month and second as day
            if (day_before_month) {
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
                    timeType: consts.timeTypes.day,
                    affectType: consts.reltivity.absolute
                },
                // Third capture group
                {
                    timeType: consts.timeTypes.month,
                    affectType: consts.reltivity.absolute
                }]
            }
        }
    },
    {
        example:'1:55pm',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2})[:](\d{1,2})(?::\d{1,2})?\s*(am|pm)?(?:$|\b)/,
        vaiarbles: {
            hour: 1,
            minute: 2,
            ampm: 3
        },
        affectsGenerator: function(match) {
            
            var hour = match[this.vaiarbles.hour];
            
            // If pm, add 12 only if the hour is until 11
            if (match[this.vaiarbles.ampm] == 'pm' && hour <=11)
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
                value: match[this.vaiarbles.minute]
            }]
        }
    }];