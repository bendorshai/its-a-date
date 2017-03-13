var consts = require('./consts.js');

module.exports = exports = [];

// Common section
var commonArray = [
    require('./tokens/common/date&year.js').tokens,
    require('./tokens/common/ddmmyyyy&hhmm.js').tokens
];
commonArray = [].concat.apply([], commonArray);

// English section
var englishArray = [
    require('./tokens/english/now.js').tokens,
    require('./tokens/english/months.js').tokens,
    require('./tokens/english/facebook.js').tokens,
    require('./tokens/english/last&next.js').tokens,
    require('./tokens/english/ago&since.js').tokens,
    require('./tokens/english/special_hours.js').tokens,
    require('./tokens/english/yesterday&tomorrow.js').tokens
];
englishArray = [].concat.apply([], englishArray);

// Russian section
var russianArray = [
    require('./tokens/russian/months.js').tokens,
    require('./tokens/russian/last&next.js').tokens,
    require('./tokens/russian/ago&since.js').tokens,
    require('./tokens/russian/yesterday&tomorrow.js').tokens
];
russianArray = [].concat.apply([], russianArray);

// Arabic section
var arabicArray = [
    require('./tokens/arabic/months.js').tokens,
    require('./tokens/arabic/ago&since.js').tokens,
    require('./tokens/arabic/last&next.js').tokens,
];
arabicArray = [].concat.apply([], arabicArray);

// Turkish section
var turkishArray = [
    require('./tokens/turkish/months.js').tokens,
    require('./tokens/turkish/ago&since.js').tokens,
    require('./tokens/turkish/last&next.js').tokens,
    require('./tokens/turkish/yesterday&tomorrow.js').tokens,
];
turkishArray = [].concat.apply([], turkishArray);

// Spanish section
var spanishArray = [
    require('./tokens/spanish/months.js').tokens,
    require('./tokens/spanish/last&next.js').tokens,
    require('./tokens/spanish/ago&since.js').tokens,
    require('./tokens/spanish/yesterday&tomorrow.js').tokens
];
spanishArray = [].concat.apply([], spanishArray);

// Greek section
var greekArray = [
    require('./tokens/greek/months.js').tokens,
    require('./tokens/greek/last&next.js').tokens,
    require('./tokens/greek/ago&since.js').tokens,
    require('./tokens/greek/ddmmyyyy&hhmm.js').tokens,
    require('./tokens/greek/yesterday&tomorrow.js').tokens
];
greekArray = [].concat.apply([], greekArray);

// Persian section
var persianArray = [
    require('./tokens/persian/months.js').tokens,
    require('./tokens/persian/ago&since.js').tokens,
    require('./tokens/persian/last&next.js').tokens
];
persianArray = [].concat.apply([], persianArray);

var merged = [commonArray, englishArray, russianArray, arabicArray,
    turkishArray, spanishArray, greekArray, persianArray];
merged = [].concat.apply([], merged);
exports.push.apply(exports, merged);

// Return the language tokens given its code.
// Common tokens are always returned in addition to the actual language
exports.getLangTokens = function (langCode) {

    // English - eng, Arabic - urd, Russian - rus, Greek - ell, Persian - pes, Spanish - spa, Turkish - tur
    switch (langCode) {
        // Undefined
        case 'und':
            return exports;
        case 'eng':
            return commonArray.concat(englishArray);
            break;
        case 'urd':
            return commonArray.concat(arabicArray);
            break;
        case 'rus':
            return commonArray.concat(russianArray);
            break;
        case 'tur':
            return commonArray.concat(turkishArray);
            break;
        case 'spa':
            return commonArray.concat(spanishArray);
        case 'ell':
            return commonArray.concat(greekArray);
        case 'pes':
            return commonArray.concat(persianArray);
    }

    return returnLanguages;
}