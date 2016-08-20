var compiler = require('./model/compiler.js');
var tokens = require('./model/tokens.js');
var parser = require('./model/parser.js');

exports.parse = function(dateString) {
    
    // Lower
    dateString = dateString.toLowerCase();
    
    return compiler.getDateFromString(dateString);
}

// Parse and return in UnixTimestamp format
exports.parseToUnixTimestamp = function(dateString) {
     
    return this.parse(dateString).getTime()/1000;
}

// Define the base format of the input string,
// The default format is little-endian (day, month, year), e.g. 22/04/96.
// This method will set it to middle-endian (month, day, year), e.g. 04/22/96.
exports.setMiddleEndianFormat = function() {

    parser.setMiddleEndianFormat();
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
 
 // todo: add custom tokens?
 
 
 
 // todo: improve verifiers readabillity & responsibillity:
 /* Tokens should be prioritized over one another. should think of a system to implement this:
 1. verify from bottom-up: like now but add option for token to directly operate other token by requiring it...
 2. verify from up-botton: a single verifier object will prioritize all tokens. */
  