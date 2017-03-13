var franc = require('franc');
var languageManager = require('../../languageManager.js');

exports.detect = function (dateString) {
    return franc.all(dateString, {
        'whitelist': languageManager.getSupportedLangCodes(),
        'minLength': 3
    });
}