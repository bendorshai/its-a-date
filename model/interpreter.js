var consts = require('./consts.js');

// Execute every given token onto the state
exports.executeToken = function(token, dateString, state) {
    
    var match = token.regex.exec(dateString);
    
    for (var groupIdx in match) {
        
        // The group matched, the affect related to it
        var captured = match[groupIdx];
        var affect = token.affects[groupIdx];
        
        // Push the affection as a modification to the state
        state.pushModification(affect.timeType, 
        {
            affectType: affect.affectType,
            value: captured
        });
    }
}