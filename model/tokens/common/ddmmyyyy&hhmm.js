var consts = require('../../consts.js');

exports.tokens = [{
    example: '11.1.1990',
    category: 'ddmmyyyy & hhmm',
    // \u2027 stands for russian dot :/
    regex: /(?:^|\b)(\d{1,2})[\u2027\/\\.-](\d{1,2})[\u2027\/\\.-](\d{2}|\d{4})(?:$|\b)/,
    variables: {
        year: 3,
    },
    affectsGenerator: function (match, settings) {

        var day_before_month = settings.get('day_before_month');

        var year = match[this.variables.year];

        // A two-digit year?
        // Note: if year is 95 then it is probably 1995, if year is 16 then it is probably 2016 
        if (year && year.length == 2) {
            year = parseInt(year);

            // Get current year
            var currentYear = new Date().getFullYear().toString();

            // Remove first two digits
            currentYear = currentYear.substr(2, currentYear.toString().length);

            // If current year is greater than given year, it's century 21, otherwise it's century 20...'
            year = parseInt(currentYear) > year ? parseInt("20" + year.toString()) : parseInt("19" + year.toString()); 
        }

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
                    affectType: consts.reltivity.absolute,
                    value: year
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
        example: '1990.1.11',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{4})[\u2027\/\\.-](\d{1,2})[\u2027\/\\.-](\d{1,2})(?:$|\b)/,
        affectsGenerator: function (match, settings) {

            var day_before_month = settings.get('day_before_month');

            // If the middle endian format flag is on,
            // Set first capture group as month and second as day
            if (!day_before_month) {
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
        example: '1:55pm',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2}):(\d{1,2})(?::\d{1,2})?\s*(am|pm)?(?:$|\b)/,
        variables: {
            hour: 1,
            minute: 2,
            ampm: 3
        },
        affectsGenerator: function (match) {

            var hour = match[this.variables.hour];

            // If pm, add 12 only if the hour is until 11
            if (match[this.variables.ampm] == 'pm' && hour <= 11) {
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