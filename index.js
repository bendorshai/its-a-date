var compiler = require('./model/compiler.js');
var tokens = require('./model/tokens.js');
var parser = require('./model/parser.js');
var Settings = require('./model/settings.js');
var utils = require('./utils.js')

// Init a setting object
var settings = new Settings();

/* parse the string,
alternativeSettings is optional parameter. 
*/
exports.parse = function(dateString, alternativeSettings) {
    
    // Lower
    dateString = dateString.toLowerCase();
    
    var of_the_king;
    
    try {

        // If user requested to use alternative settings, create an object
        if (alternativeSettings) {
            alternativeSettings = new Settings(alternativeSettings);
        }

        // Run compiler with aleternative settings if provided, otherwise with default settings
        of_the_king = compiler.getDateFromString(dateString, alternativeSettings || settings);
        
        // calculate GMT
        var gmt = settings.get('gmt');
        
        if (gmt != 'auto') {
            of_the_king = utils.calculateGMT(of_the_king, gmt);
        }
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
        
        console.log(token.example + ' --> ' + compiler.getDateFromString(token.example, settings))
    }
}

/* get or set setting object
examples:  
    settings('def') --> returns the setting named def
    settings({'def':4}) -- > sets def to 5
 */
exports.settings = function(query) {
    if (query == undefined) {
        return settings.get();
    }
    else {
        settings.set(query);
    }
}



/* todo: add settings function for this module.
 settings will include:
 - utc change */
 
 // todo: add custom tokens?
 
 
 
 // todo: improve verifiers readabillity & responsibillity:
 /* Tokens should be prioritized over one another. should think of a system to implement this:
 1. verify from bottom-up: like now but add option for token to directly operate other token by requiring it...
 2. verify from up-botton: a single verifier object will prioritize all tokens. */
  