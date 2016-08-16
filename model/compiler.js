var parser = require('./parser.js');
var interpreter = require('./interpreter.js')
var state = require('./state.js');

exports.getDateFromString = function(dateString)
{
    // Get all tokens found in date string
    var tokens = parser.getTokens(dateString);
    
    // Execute all tokens
    for (var token in tokens) {
        
        // Execute the token from the dateString onto the state
        interpreter.executeToken(token, dateString, state);
    }
}
