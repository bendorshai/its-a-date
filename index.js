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
exports.parse = function (dateString, alternativeSettings) {

    // Lower
    dateString = dateString.toLowerCase();

    var of_the_king;

    // Init fallback settings
    var currentSettings = settings;

    // If user requested to use alternative settings, create an object
    if (alternativeSettings) {
        currentSettings.set(alternativeSettings);
    }

    try {
        // Run compiler with aleternative settings if provided, otherwise with default settings
        of_the_king = compiler.getDateFromString(dateString, currentSettings);
        
        // Gmt fix
        of_the_king = gmtFix(of_the_king, currentSettings);
        
        // Finish
        return of_the_king;
    }
    catch (e) {

        // If in strict mode
        if (currentSettings.get('strict')) {
            // Compiler didn't succeed
            return undefined;
        }
    }

    // Flip hint because strick is false
    var normal = currentSettings.get('day_before_month');
    var flipped = !normal;
    currentSettings.set({'day_before_month':flipped});

    try {

        // Run compiler with aleternative settings if provided, otherwise with default settings
        of_the_king = compiler.getDateFromString(dateString, settings);
        
        // Gmt fix
        of_the_king = gmtFix(of_the_king, currentSettings);
    }
    catch (e) {
        return undefined;
    }

    // If all is well
    return of_the_king;
}


function gmtFix(date, settings) {
    
    // calculate GMT
    var gmt = settings.get('gmt');
        
    if (gmt != 'auto') {
        date = utils.calculateGMT(date, gmt);
    }

    return date;
}

// Expose all tokens and what they can do to you!
exports.brag = function () {

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
exports.settings = function (query) {

    // Return all if no parameter sent
    if (query == undefined) {
        return settings.get();
    }
    // if an object sent then update
    else if (typeof(query) == 'object')
    {
        settings.set(query);
    }
    // parameter is not an object
    else 
    {
        return settings.get(query);
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
