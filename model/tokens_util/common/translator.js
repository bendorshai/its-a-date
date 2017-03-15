var utils = require('../../../utils.js')
var languageManager = require('../../language_manager.js');

// all translators from all languages
var translators = languageManager.getTranslators();

exports.translate = (word) => utils.translate(word, translators)
