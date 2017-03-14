var consts = require('../../consts.js');

exports.tokens = [
    {
        example: '1:55pm',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2})[:\.](\d{1,2})(?::\d{1,2})?\s*(πμ|μμ|π\.μ\.|μ\.μ\.)/,
        variables: {
            hour: 1,
            minute: 2,
            ampm: 3
        },
        affectsGenerator: function (match) {
            var hour = match[this.variables.hour];
            amPmMatch = match[this.variables.ampm];

            // If pm, add 12 only if the hour is until 11
            if ((amPmMatch == 'μμ' || amPmMatch == 'μ.μ.' || amPmMatch == 'μ.μ') && hour <= 11) {
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
                    value: match[this.variables.minute]
                }]
        }
    }];