var greek = require('../greek/translator');
var arabic = require('../arabic/translator');
var russian = require('../russian/translator');
var turkish = require('../turkish/translator');
var spanish = require('../spanish/translator');
var persian = require('../persian/translator');
var utils = require('../../../utils.js')

// all translators from all languages
var translators = [arabic, russian, turkish, spanish, greek, persian];            

exports.translate = (word) => utils.translate(word, translators)
