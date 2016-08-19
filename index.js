var compiler = require('./model/compiler.js');
var tokens = require('./model/tokens.js');

exports.parse = function(dateString) {
    
    // Lower
    dateString = dateString.toLowerCase();
    
    return compiler.getDateFromString(dateString);
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
 
 // add custom tokens?