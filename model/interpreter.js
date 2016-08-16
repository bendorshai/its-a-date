var consts = require('./consts.js');

// Execute every given token onto the state
exports.executeToken = function(token, dateString, state) {
    
    var match = token.regex.exec(dateString);
    
    // For each matching group
    for (var idx = 0; idx < match.length-1; idx++) {
        
        // The group matched, the affect related to it
        var captured = match[idx+1]; // first idx isnt a group
        var affect = token.affects[idx];
        
        // Push the affection as a modification to the state
        state.pushModification(affect.timeType, 
        {
            affectType: affect.affectType,
            value: captured
        });
    }
}