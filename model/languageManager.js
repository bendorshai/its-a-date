// Translators Section
var translators = [
    require('./tokens_util/arabic/translator'),
    require('./tokens_util/russian/translator'),
    require('./tokens_util/turkish/translator'),
    require('./tokens_util/spanish/translator'),
    require('./tokens_util/greek/translator'),
    require('./tokens_util/persian/translator')];

exports.getTranslators = function () {
    return translators;
}

// Convertors Section
var dayConvertors = [
    require('./tokens_util/russian/converter.js').dayOfWeekToNum,
    require('./tokens_util/english/converter.js').dayOfWeekToNum,
    require('./tokens_util/arabic/converter.js').dayOfWeekToNum,
    require('./tokens_util/turkish/converter.js').dayOfWeekToNum,
    require('./tokens_util/spanish/converter.js').dayOfWeekToNum,
    require('./tokens_util/greek/converter.js').dayOfWeekToNum,
    require('./tokens_util/persian/converter.js').dayOfWeekToNum];

exports.getDayConvertors = function () {
    return dayConvertors;
}

// Tokens Section
var commonTokens = [
    require('./tokens/common/date&year.js').tokens,
    require('./tokens/common/ddmmyyyy&hhmm.js').tokens
];
exports.getCommonTokens = function () {
    return [].concat.apply([], commonTokens);
}

var englishTokens = [
    require('./tokens/english/now.js').tokens,
    require('./tokens/english/months.js').tokens,
    require('./tokens/english/facebook.js').tokens,
    require('./tokens/english/last&next.js').tokens,
    require('./tokens/english/ago&since.js').tokens,
    require('./tokens/english/special_hours.js').tokens,
    require('./tokens/english/yesterday&tomorrow.js').tokens
];
exports.getEnglishTokens = function () {
    var englishArray = [].concat.apply([], englishTokens);
    return this.getCommonTokens().concat(englishArray);
}

var russianTokens = [
    require('./tokens/russian/months.js').tokens,
    require('./tokens/russian/last&next.js').tokens,
    require('./tokens/russian/ago&since.js').tokens,
    require('./tokens/russian/yesterday&tomorrow.js').tokens
];
exports.getRussianTokens = function () {
    var russianArray = [].concat.apply([], russianTokens);
    return this.getCommonTokens().concat(russianArray);
}

var arabicTokens = [
    require('./tokens/arabic/months.js').tokens,
    require('./tokens/arabic/ago&since.js').tokens,
    require('./tokens/arabic/last&next.js').tokens,
];
exports.getArabicTokens = function () {
    var arabicArray = [].concat.apply([], arabicTokens);
    return this.getCommonTokens().concat(arabicArray);
}

var turkishTokens = [
    require('./tokens/turkish/months.js').tokens,
    require('./tokens/turkish/ago&since.js').tokens,
    require('./tokens/turkish/last&next.js').tokens,
    require('./tokens/turkish/yesterday&tomorrow.js').tokens,
];
exports.getTurkishTokens = function () {
    var turkishArray = [].concat.apply([], turkishTokens);
    return this.getCommonTokens().concat(turkishArray);
}

var spanishTokens = [
    require('./tokens/spanish/months.js').tokens,
    require('./tokens/spanish/last&next.js').tokens,
    require('./tokens/spanish/ago&since.js').tokens,
    require('./tokens/spanish/yesterday&tomorrow.js').tokens
];
exports.getSpanishTokens = function () {
    var spanishArray = [].concat.apply([], spanishTokens);
    return this.getCommonTokens().concat(spanishArray);
}

var greekTokens = [
    require('./tokens/greek/months.js').tokens,
    require('./tokens/greek/last&next.js').tokens,
    require('./tokens/greek/ago&since.js').tokens,
    require('./tokens/greek/ddmmyyyy&hhmm.js').tokens,
    require('./tokens/greek/yesterday&tomorrow.js').tokens
];
exports.getGreekTokens = function () {
    var commonTokens = this.getCommonTokens();

    // In Greek language we'd like to use its own file and not the common one
    for (var i = 0; i < commonTokens.length; i++) {
        var currentRegex = commonTokens[i].regex;
        var matchIndex = currentRegex.source.indexOf("am|pm");

        if (matchIndex && matchIndex != -1) {
            commonTokens.splice(i,1);
        }
    }

    var greekArray = [].concat.apply([], greekTokens);
    return commonTokens.concat(greekArray);
}

var persianTokens = [
    require('./tokens/persian/months.js').tokens,
    require('./tokens/persian/ago&since.js').tokens,
    require('./tokens/persian/last&next.js').tokens
];
exports.getPersianTokens = function () {
    var persianArray = [].concat.apply([], persianTokens);
    return this.getCommonTokens().concat(persianArray);
}

exports.getAllTokens = function () {
    var merged = [commonTokens, englishTokens, russianTokens, arabicTokens,
        turkishTokens, spanishTokens, greekTokens, persianTokens];
    merged = [].concat.apply([], merged);
    merged = [].concat.apply([], merged);

    return merged;
}

// Ago&since Section
exports.getAllAgoAndSince = function () {
    return [
        require('./tokens/english/ago&since.js'),
        require('./tokens/russian/ago&since.js'),
        require('./tokens/arabic/ago&since.js'),
        require('./tokens/turkish/ago&since.js'),
        require('./tokens/spanish/ago&since.js'),
        require('./tokens/greek/ago&since.js'),
        require('./tokens/persian/ago&since.js')
    ];
}

exports.getSupportedLangCodes = function () {
    // English - eng, Arabic - urd, Russian - rus, Greek - ell, Persian - pes, Spanish - spa, Turkish - tur
    return ['eng', 'urd', 'rus', 'ell', 'pes', 'spa', 'tur'];
}