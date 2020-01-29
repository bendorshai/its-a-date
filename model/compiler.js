var parser = require('./parser.js');
var interpreter = require('./interpreter.js')
var State = require('./state.js');
var tokens = require('./tokens.js');

exports.getStringMatches = function (dateString, currLang) {

    // Attempt to find tokens based on current language
    var languageTokens = tokens.getLangTokens(currLang);

    // Failed to get language tokens? Return null, otherwise parse by langugage tokens
    var matches = !languageTokens ? null : parser.parseLangTokens(dateString, languageTokens);

    return matches;
}

exports.calculateDate = function (dateString, /* tokens (according to detected languge) */matches, settings) {

    if (!matches || matches.length == 0) {
        throw 'ERROR: No token matched the string'
    }

    // New state each time
    var state = new State(settings);    
    var matchesWithCollsion = 0;

    for (var match of matches) {

        // Execute the token from the dateString onto the state and count collisions
        success = interpreter.executeToken(match, dateString, state, settings);
        if (!success){
            matchesWithCollsion++;
        }
    }

    // If all matches have a collision throw and try the next language
    if (matches.length == matchesWithCollsion){
        throw 'ERROR: All tokens contain collisions with other languages'
    }

    // Caculate the state
    state.calculateModifications();

    // Get value, convert moment object to native js date object
    return state.date.toDate();
}