var tokens = require('./tokens.js');

// If false, the input string will be parsed as little-endian formt (day, month, year), e.g. 22/04/96.
// If true as middle-endian format (month, day, year), e.g. 04/22/96.
var middle_endian_format = false; 

// Get all token that appear in date string
exports.getTokens = function (dateString) {
    
    var of_the_jedi = [];
    
    for (var token of tokens) {
        
        var match = token.regex.exec(dateString);
        
        // If token appears in date string
        if (match) {
            of_the_jedi.push(token);
        }
    }
    
    return of_the_jedi;
}

this.setMiddleEndianFormat = function () {
    
    this.middle_endian_format = true;
}