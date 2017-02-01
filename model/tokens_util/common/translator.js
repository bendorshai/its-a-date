var arabic = require('../arabic/translator');
var russian = require('../russian/translator');
var utils = require('../../../utils.js')

// all translators from all languages
var translators = arabic.concat(russian); 

exports.translate = (word) => utils.translate(word, translators)
