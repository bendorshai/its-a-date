var compiler = require('./model/compiler.js');

exports.parse = function(dateString) {
    return compiler.getDateFromString(dateString);
}