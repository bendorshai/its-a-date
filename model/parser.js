var tokens = require('./tokens.js');

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