var monthsTokens = require('./months.js');
var consts = require('../../consts.js');

exports.tokens = [{
    example: '28-Jun-2018',
    category: 'ddmmyyyy & hhmm',
    // \u2027 stands for russian dot :/
    regex: /(?:^|\b)(\d{1,2})[\u2027\/\\.-]([a-zA-Z]{1,9})[\u2027\/\\.-](\d{2}|\d{4})(?:$|\b)/,
    verifier: function (match, dateString, state, settings, token) {

        const monthIdx = 2;
        var month = match[monthIdx];
    
        // should contain 1 value
        var matchedMonthTokens = [];

         matchedMonthTokens = monthsTokens.tokens.filter(
             (token) => month.match(token.regex)
         );

// handle cases of 0 matches or more then 1 match
        
        if (matchedMonthTokens.length === 0 || matchedMonthTokens.length > 1 ) {
           return false;
        }
        else return true;
    },
    affectsGenerator: function (match, settings) {

         const yearIdx = 3;
         var year = match[yearIdx];
        
        // A two-digit year?
        // Note: if year is 95 then it is probably 1995, if year is 16 then it is probably 2016 
        if (year && year.length == 2) {
            year = parseInt(year);

            // Get current year
            var currentYear = new Date().getFullYear().toString();

            // Remove first two digits
            currentYear = currentYear.substr(2, currentYear.toString().length);

            // If current year is greater than given year, it's century 21, otherwise it's century 20...'
            year = parseInt(currentYear) >= year ? parseInt("20" + year.toString()) : parseInt("19" + year.toString());
        }

        return [
            // First capture group
            {
                timeType: consts.timeTypes.day,
                affectType: consts.reltivity.absolute,
            },
            // Third capture group
            {
                timeType: consts.timeTypes.year,
                affectType: consts.reltivity.absolute,
                value: year
            }]         
    }
}];