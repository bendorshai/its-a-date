var tokens = require('./tokens.js');

exports.parseLangTokens = function (dateString, langTokens) {
    
    var of_the_jedi = [];

    for (var token of langTokens) {

        var match = token.regex.exec(dateString);

        // If token appears in date string
        if (match) {
            of_the_jedi.push(token);
        }
    }

    return of_the_jedi;
}