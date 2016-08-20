var compiler = require('./model/compiler.js');
var tokens = require('./model/tokens.js');

exports.parse = function(dateString) {
    
    // Lower
    dateString = dateString.toLowerCase();
    
    var of_the_king;
    
    try {
        of_the_king = compiler.getDateFromString(dateString);
    }
    catch(e) {
        // If compiler didn't succeed
        return undefined;
    }
    
    // If all is well
    return of_the_king;
}

// Expose all tokens and what they can do to you!
exports.brag = function() {
    
    var category = '';
    
    for (var token of tokens) {
        
        if (token.category != category) {
            category = token.category;
            console.log(' ~ ' + category + ' ~ ');
        }
        
        console.log(token.example + ' --> ' + compiler.getDateFromString(token.example))
    }
}

/* todo: add settings function for this module.
 settings will include:
 - base format: day before month or vise versa
 - utc change */
 
 // todo: add custom tokens?
 
 
 
 // todo: improve verifiers readabillity & responsibillity:
 /* Tokens should be prioritized over one another. should think of a system to implement this:
 1. verify from bottom-up: like now but add option for token to directly operate other token by requiring it...
 2. verify from up-botton: a single verifier object will prioritize all tokens. */
  