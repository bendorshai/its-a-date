const concatArray = require('../utils.js').concatArray;
const _ = require('lodash');
const franc = require('franc');

// Public section

exports.getTranslators = function () {
    return translators;
}

exports.getDayConvertors = function () {
    return dayConvertors;
}

exports.getCommonTokens = function () {
    return concatArray(commonTokens);
}

exports.getEnglishTokens = function () {
    var englishArray = concatArray(englishTokens);
    return this.getCommonTokens().concat(englishArray);
}

exports.getRussianTokens = function () {
    var russianArray = concatArray(russianTokens);
    return this.getCommonTokens().concat(russianArray);
}

exports.getArabicTokens = function () {
    var arabicArray = concatArray(arabicTokens);
    return this.getCommonTokens().concat(arabicArray);
}

exports.getTurkishTokens = function () {
    var turkishArray = concatArray(turkishTokens);
    return this.getCommonTokens().concat(turkishArray);
}

exports.getSpanishTokens = function () {
    var spanishArray = concatArray(spanishTokens);
    return this.getCommonTokens().concat(spanishArray);
}

exports.getGreekTokens = function () {
    var commonTokens = _.clone(this.getCommonTokens());

    // In Greek language we'd like to use its own file and not the common one
    for (var i = 0; i < commonTokens.length; i++) {
        var currentRegex = commonTokens[i].regex;
        var matchIndex = currentRegex.source.indexOf("am|pm");

        if (matchIndex && matchIndex != -1) {
            commonTokens.splice(i,1);
        }
    }

    var greekArray = concatArray(greekTokens);
    return commonTokens.concat(greekArray);
}

exports.getPersianTokens = function () {
    var persianArray = concatArray(persianTokens);
    return this.getCommonTokens().concat(persianArray);
}

exports.getFrenchTokens = function () {
    var frenchArray = concatArray(frenchTokens);
    return this.getCommonTokens().concat(frenchArray);
}

exports.getAllTokens = function () {
    var merged = [commonTokens, englishTokens, russianTokens, arabicTokens,
        turkishTokens, spanishTokens, greekTokens, persianTokens, frenchTokens];
    merged = concatArray(merged);
    merged = concatArray(merged);

    return merged;
}

exports.getAllAgoAndSince = function () {
    return [
        require('./tokens/english/ago&since.js'),
        require('./tokens/russian/ago&since.js'),
        require('./tokens/arabic/ago&since.js'),
        require('./tokens/turkish/ago&since.js'),
        require('./tokens/spanish/ago&since.js'),
        require('./tokens/greek/ago&since.js'),
        require('./tokens/persian/ago&since.js'),
        require('./tokens/french/ago&since.js')
    ];
}

exports.getSupportedLangCodes = function () {
    // English - eng, Arabic - urd, Russian - rus, Greek - ell, 
    // Persian - pes, Spanish - spa, Turkish - tur, French - fra
    return ['eng', 'urd', 'rus', 'ell', 'pes', 'spa', 'tur', 'fra'];
}

exports.detect = function (dateString) {
    return franc.all(dateString, {
        'whitelist': this.getSupportedLangCodes(),
        'minLength': 3
    });
}

// Private section

// Translators Section
var translators = [
    require('./tokens_util/arabic/translator'),
    require('./tokens_util/russian/translator'),
    require('./tokens_util/turkish/translator'),
    require('./tokens_util/spanish/translator'),
    require('./tokens_util/greek/translator'),
    require('./tokens_util/persian/translator'),
    require('./tokens_util/french/translator')
];

var dayConvertors = [
    require('./tokens_util/russian/converter.js').dayOfWeekToNum,
    require('./tokens_util/english/converter.js').dayOfWeekToNum,
    require('./tokens_util/arabic/converter.js').dayOfWeekToNum,
    require('./tokens_util/turkish/converter.js').dayOfWeekToNum,
    require('./tokens_util/spanish/converter.js').dayOfWeekToNum,
    require('./tokens_util/greek/converter.js').dayOfWeekToNum,
    require('./tokens_util/persian/converter.js').dayOfWeekToNum,
    require('./tokens_util/french/converter.js').dayOfWeekToNum
];

var commonTokens = [
    require('./tokens/common/date&year.js').tokens,
    require('./tokens/common/ddmmyyyy&hhmm.js').tokens
];

var englishTokens = [
    require('./tokens/english/now.js').tokens,
    require('./tokens/english/months.js').tokens,
    require('./tokens/english/facebook.js').tokens,
    require('./tokens/english/last&next.js').tokens,
    require('./tokens/english/ago&since.js').tokens,
    require('./tokens/english/special_hours.js').tokens,
    require('./tokens/english/yesterday&tomorrow.js').tokens
];

var russianTokens = [
    require('./tokens/russian/months.js').tokens,
    require('./tokens/russian/last&next.js').tokens,
    require('./tokens/russian/ago&since.js').tokens,
    require('./tokens/russian/yesterday&tomorrow.js').tokens
];

var arabicTokens = [
    require('./tokens/arabic/months.js').tokens,
    require('./tokens/arabic/ago&since.js').tokens,
    require('./tokens/arabic/last&next.js').tokens,
];

var turkishTokens = [
    require('./tokens/turkish/months.js').tokens,
    require('./tokens/turkish/ago&since.js').tokens,
    require('./tokens/turkish/last&next.js').tokens,
    require('./tokens/turkish/yesterday&tomorrow.js').tokens,
];

var spanishTokens = [
    require('./tokens/spanish/months.js').tokens,
    require('./tokens/spanish/last&next.js').tokens,
    require('./tokens/spanish/ago&since.js').tokens,
    require('./tokens/spanish/yesterday&tomorrow.js').tokens
];

var greekTokens = [
    require('./tokens/greek/months.js').tokens,
    require('./tokens/greek/last&next.js').tokens,
    require('./tokens/greek/ago&since.js').tokens,
    require('./tokens/greek/ddmmyyyy&hhmm.js').tokens,
    require('./tokens/greek/yesterday&tomorrow.js').tokens
];

var persianTokens = [
    require('./tokens/persian/months.js').tokens,
    require('./tokens/persian/ago&since.js').tokens,
    require('./tokens/persian/last&next.js').tokens
];

var frenchTokens = [
    require('./tokens/french/months.js').tokens,
    require('./tokens/french/ago&since.js').tokens,
    require('./tokens/french/last&next.js').tokens,
    require('./tokens/french/ddmmyyyy&hhmm.js').tokens,
    require('./tokens/french/yesterday&tomorrow.js').tokens
];