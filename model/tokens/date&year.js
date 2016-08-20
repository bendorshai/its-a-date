var consts = require('../consts.js');
var _ = require('underscore');
var ago_and_since = require('./ago&since.js');

exports.tokens = [
    {
    example: '1945',
    category: 'year & date',
    regex: /(?:^|\s)(\d{4})(?:$|\s)/,
    affects: [{
        timeType: consts.timeTypes.year,
        affectType: consts.reltivity.absolute
    }]
    }, 
    {
    example: '1st',
    category: 'year & date',
    regex: /(?:^|\s)(\d{1,2})(?:th|st|nd|rd)?(?:$|\s)/,
    affects: [{
        timeType: consts.timeTypes.day,
        affectType: consts.reltivity.absolute
    }],
    variables: {
        day: 1
    },
    // only if verifier returns true the affects take place
    // Verify that this number doesn't relate to 'ago', exmaple: '4 days ago', 4 is not the number of the date
    verifier: function(match, dateString, state) {
        
        const AGO = 0;
        const SINCE = 1;
        
        var collisionMatch = []
        
        collisionMatch[AGO] = ago_and_since.tokens[AGO].regex.exec(dateString);
        collisionMatch[SINCE] = ago_and_since.tokens[SINCE].regex.exec(dateString);
        
        // If both didn't match, it is safe to continue
        if (!collisionMatch[AGO] && !collisionMatch[SINCE]) {
            return true;
        }
        
        // Assume that only one should match
        if (collisionMatch[AGO]) {
            collisionMatch = collisionMatch[AGO];
        }
        else {
             collisionMatch = collisionMatch[SINCE];
        }
        
        // Note: this is true for both AGO & SINCE tokens...
        var valueIdx = ago_and_since.tokens[AGO].variables.value;
        
        var date = match[this.variables.day];
        
        // If the ago relate to the same value of date
        if (collisionMatch[valueIdx] != date) {
            return true;
        }
        else {
            // Matched value does not relate to a date its the variable X in: X ____ ago (e.g., 5 months ago)
            return false;
        }
    }
}];