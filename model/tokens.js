var consts = require('./consts.js');
var languageManager = require('./languageManager.js');

module.exports = exports = [];
exports.push.apply(exports, languageManager.getAllTokens());

// Return the language tokens given its code.
// Common tokens are always returned in addition to the actual language
exports.getLangTokens = function (langCode) {
    var commonArray = [].concat.apply([], languageManager.getCommonTokens());

    // English - eng, Arabic - urd, Russian - rus, Greek - ell, Persian - pes, Spanish - spa, Turkish - tur
    switch (langCode) {
        // Undefined
        case 'und':
            return exports;
        case 'eng':
            var englishArray = [].concat.apply([], languageManager.getEnglishTokens());
            return commonArray.concat(englishArray);
        case 'urd':
            var arabicArray = [].concat.apply([], languageManager.getArabicTokens());
            return commonArray.concat(arabicArray);
        case 'rus':
            var russianArray = [].concat.apply([], languageManager.getRussianTokens());
            return commonArray.concat(russianArray);
        case 'tur':
            var turkishArray = [].concat.apply([], languageManager.getTurkishTokens());
            return commonArray.concat(turkishArray);
        case 'spa':
            var spanishArray = [].concat.apply([], languageManager.getSpanishTokens());
            return commonArray.concat(spanishArray);
        case 'ell':
            var greekArray = [].concat.apply([], languageManager.getGreekTokens());
            return commonArray.concat(greekArray);
        case 'pes':
            var persianArray = [].concat.apply([], languageManager.getPersianTokens());
            return commonArray.concat(persianArray);
    }

    return returnLanguages;
}