var compiler = require('./model/compiler.js');
var tokens = require('./model/tokens.js');
var parser = require('./model/parser.js');
var Settings = require('./model/settings.js');
var utils = require('./utils.js');
var langManager = require('./model/language_manager.js');

// Init a setting object
var settings = new Settings();

/* parse the string,
alternativeSettings is optional parameter. 
*/
exports.parse = function (dateString, alternativeSettings) {

    // Lower
    dateString = dateString.toLowerCase();

    var ofTheKing;

    var langMatches = getStringMatches(dateString);

    for (var i = 0; i < langMatches.length; i++) {
        var langMatch = langMatches[i];

        // Copy settings
        var currentSettings = new Settings();
        var getter = {
            day_before_month: settings.get('day_before_month'),
            strict: settings.get('strict'),
            gmt: settings.get('gmt'),
        }
        currentSettings.set(getter);

        // If user requested to use alternative settings, create an object
        if (alternativeSettings) {
            currentSettings.set(alternativeSettings);
        }

        try {
            // Run compiler with aleternative settings if provided, otherwise with default settings
            ofTheKing = compiler.calculateDate(dateString, langMatch.matches, currentSettings);

            // Gmt fix
            ofTheKing = gmtFix(ofTheKing, currentSettings);

            // Finish
            return ofTheKing;
        }
        catch (e) {
            // If in strict mode and loop has ended
            if (currentSettings.get('strict') && i + 1 == langMatches.length) {
                // Compiler didn't succeed
                return undefined;
            }
        }

        // Flip hint because strick is false
        var normal = currentSettings.get('day_before_month');
        var flipped = !normal;
        currentSettings.set({ 'day_before_month': flipped });

        try {

            // Run compiler with aleternative settings if provided, otherwise with default settings
            ofTheKing = compiler.calculateDate(dateString, langMatch.matches, currentSettings);

            // Gmt fix
            ofTheKing = gmtFix(ofTheKing, currentSettings);
        }
        catch (e) {
            // Loop not ended yet?
            if (i + 1 < langMatches.length) {
                continue;
            }

            return undefined;
        }
    }

    // If all is well
    return ofTheKing;
}


function gmtFix(date, settings) {

    // calculate GMT
    var gmt = settings.get('gmt');

    if (gmt != 'auto') {
        date = utils.calculateGMT(date, gmt);
    }

    return date;
}

function getStringMatches(dateString) {

    var langMatches = [];

    // Detect string's language
    var languagesDetected = langManager.detect(dateString);

    for (var i = 0; i < languagesDetected.length; i++) {
        var currLang = languagesDetected[i];

        langMatches.push({
            "langName": currLang[0],
            "langProb": currLang[1],
            "matches": compiler.getStringMatches(dateString, currLang[0]),
        });
    }

    // At this point we have all the matches, sort them by number of matches and then by language probability
    langMatches.sort(
        function (a, b) {
            var aMatches = a.matches == null ? 0 : a.matches.length;
            var bMatches = b.matches == null ? 0 : b.matches.length;

            if (aMatches < bMatches) return 1;
            if (aMatches > bMatches) return -1;

            if (a.langProb < b.langProb) return 1;
            if (b.langProb > b.langProb) return -1;

            return 0;
        });

    return langMatches;
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
    else if (typeof (query) == 'object') {
        settings.set(query);
    }
    // parameter is not an object
    else {
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


// TODO:
// instead of token's verifiers that cancel out each other. 
// I need to think of a better system to prioratize them...