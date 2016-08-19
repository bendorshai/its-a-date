var compiler = require('./model/compiler.js');

exports.parse = function(dateString) {
    
    // Lower
    dateString = dateString.toLowerCase();
    
    return compiler.getDateFromString(dateString);
}

/* todo: add settings function for this module.
 settings will include:
 - base format: day before month or vise versa
 - utc change */
 
 // add custom tokens?