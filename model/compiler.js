var parser = require('./parser.js');
var interpreter = require('./interpreter.js')
var State = require('./state.js');

exports.getDateFromString = function (dateString, settings) {
    // New state each time
    var state = new State();

    // Get all tokens found in date string
    var tokens = parser.getTokens(dateString);

    if (tokens.length == 0) {
        throw 'ERROR: No token matched the string'
    }

    // Execute all tokens
    for (var token of tokens) {

        // Execute the token from the dateString onto the state
        interpreter.executeToken(token, dateString, state, settings);
    }

    // Caculate the state
    state.calculateModifications();

    // Get value, convert moment object to native js date object
    return state.date.toDate();
}