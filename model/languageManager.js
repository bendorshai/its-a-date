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
    return commonTokens;
}

var englishtokens = [
    require('./tokens/english/now.js').tokens,
    require('./tokens/english/months.js').tokens,
    require('./tokens/english/facebook.js').tokens,
    require('./tokens/english/last&next.js').tokens,
    require('./tokens/english/ago&since.js').tokens,
    require('./tokens/english/special_hours.js').tokens,
    require('./tokens/english/yesterday&tomorrow.js').tokens
];
exports.getEnglishTokens = function () {
    return englishtokens;
}

var russianTokens = [
    require('./tokens/russian/months.js').tokens,
    require('./tokens/russian/last&next.js').tokens,
    require('./tokens/russian/ago&since.js').tokens,
    require('./tokens/russian/yesterday&tomorrow.js').tokens
];
exports.getRussianTokens = function () {
    return russianTokens;
}

var arabicTokens = [
    require('./tokens/arabic/months.js').tokens,
    require('./tokens/arabic/ago&since.js').tokens,
    require('./tokens/arabic/last&next.js').tokens,
];
exports.getArabicTokens = function () {
    return arabicTokens;
}

var turkishTokens = [
    require('./tokens/turkish/months.js').tokens,
    require('./tokens/turkish/ago&since.js').tokens,
    require('./tokens/turkish/last&next.js').tokens,
    require('./tokens/turkish/yesterday&tomorrow.js').tokens,
];
exports.getTurkishTokens = function () {
    return turkishTokens;
}

var spanishTokens = [
    require('./tokens/spanish/months.js').tokens,
    require('./tokens/spanish/last&next.js').tokens,
    require('./tokens/spanish/ago&since.js').tokens,
    require('./tokens/spanish/yesterday&tomorrow.js').tokens
];
exports.getSpanishTokens = function () {
    return spanishTokens;
}

var greekTokens = [
    require('./tokens/greek/months.js').tokens,
    require('./tokens/greek/last&next.js').tokens,
    require('./tokens/greek/ago&since.js').tokens,
    require('./tokens/greek/ddmmyyyy&hhmm.js').tokens,
    require('./tokens/greek/yesterday&tomorrow.js').tokens
];
exports.getGreekTokens = function () {
    return greekTokens;
}

var persianTokens = [
    require('./tokens/persian/months.js').tokens,
    require('./tokens/persian/ago&since.js').tokens,
    require('./tokens/persian/last&next.js').tokens
];
exports.getPersianTokens = function () {
    return persianTokens;
}

exports.getAllTokens = function () {
    var commonArray = [].concat.apply([], this.getCommonTokens());
    var englishArray = [].concat.apply([], this.getEnglishTokens());
    var russianArray = [].concat.apply([], this.getRussianTokens());
    var arabicArray = [].concat.apply([], this.getArabicTokens());
    var turkishArray = [].concat.apply([], this.getTurkishTokens());
    var spanishArray = [].concat.apply([], this.getSpanishTokens());
    var greekArray = [].concat.apply([], this.getGreekTokens());
    var persianArray = [].concat.apply([], this.getPersianTokens());

    var merged = [commonArray, englishArray, russianArray, arabicArray,
        turkishArray, spanishArray, greekArray, persianArray];
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
    return ['eng', 'urd', 'rus', 'ell', 'pes', 'spa', 'tur'];
}