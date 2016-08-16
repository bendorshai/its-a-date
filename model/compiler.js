var parser = require('./parser.js');
var interpreter = require('./interpreter.js')
var state = require('./state.js');

exports.getDateFromString = function(dateString)
{
    // New state each time
     state = require('./state.js');
    
    // Get all tokens found in date string
    var tokens = parser.getTokens(dateString);
    
    // Execute all tokens
    for (var token of tokens) {
        
        // Execute the token from the dateString onto the state
        interpreter.executeToken(token, dateString, state);
    }
    
    // Caculate the state
    state.calculateModifications();
    
    // Get value
    return state.getDate();
}

// TODO: catch errors?