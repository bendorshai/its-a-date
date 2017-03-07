var arabic = require('../arabic/translator');
var russian = require('../russian/translator');
var turkish = require('../turkish/translator');
var spanish = require('../spanish/translator');
var utils = require('../../../utils.js')

// all translators from all languages
var translators = arabic.concat(russian).concat(turkish).concat(spanish); 

exports.translate = (word) => utils.translate(word, translators)
