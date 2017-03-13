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

exports.calculateDate = function (dateString, matches, settings) {

    if (!matches || matches.length == 0) {
        throw 'ERROR: No token matched the string'
    }

    // New state each time
    var state = new State();

    for (var match of matches) {

        // Execute the token from the dateString onto the state
        interpreter.executeToken(match, dateString, state, settings);
    }

    // Caculate the state
    state.calculateModifications();

    // Get value, convert moment object to native js date object
    return state.date.toDate();
}