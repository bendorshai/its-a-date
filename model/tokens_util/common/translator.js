var utils = require('../../../utils.js')
var languageManager = require('../../languageManager.js');

// all translators from all languages
var translators = languageManager.getTranslators();

exports.translate = (word) => utils.translate(word, translators)
