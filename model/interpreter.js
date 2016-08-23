var consts = require('./consts.js');

// Execute every given token onto the state
exports.executeToken = function (token, dateString, state, settings) {

    var match = token.regex.exec(dateString);

    // If token has a verifier
    if (token.verifier) {

        // If verifier doesn't indicate true, break token
        if (!token.verifier(match, dateString, state, settings, token)) {
            return;
        }
    }

    var affects = [];

    // If token doesn't have predefined affects
    if (!token.affects) {

        // Call affects generator, to create affects
        affects = token.affectsGenerator(match, settings);
    }
    // If it does have, store them in local
    else {
        affects = token.affects;
    }

    var captureGroup = 1;

    // For each affect
    for (var idx = 0; idx < affects.length; idx++) {

        var affect = affects[idx];
        var calculatedValue = null;

        // If affect have predefined value, use it
        if (affect.value != undefined) {
            calculatedValue = affect.value;
        }
        // Otherwise use, what's captured
        else {
            calculatedValue = match[captureGroup];
            captureGroup++;
        }

        // Push the affection as a modification to the state
        state.pushModification(affect.timeType,
            {
                affectType: affect.affectType,
                value: calculatedValue
            });
    }
}