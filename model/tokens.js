var consts = require('./consts.js');
var languageManager = require('./language_manager.js');

module.exports = exports = [];
exports.push.apply(exports, languageManager.getAllTokens());

// Return the language tokens given its code.
// Common tokens are always returned in addition to the actual language
exports.getLangTokens = function (langCode) {
    // English - eng, Arabic - urd, Russian - rus, Greek - ell, Persian - pes, Spanish - spa, Turkish - tur
    switch (langCode) {
        // Undefined
        case 'und':
            return exports;
        case 'eng':
            return languageManager.getEnglishTokens();
        case 'urd':
            return languageManager.getArabicTokens();
        case 'rus':
            return languageManager.getRussianTokens();
        case 'tur':
            return languageManager.getTurkishTokens();
        case 'spa':
            return languageManager.getSpanishTokens();
        case 'ell':
            return languageManager.getGreekTokens();
        case 'pes':
            return languageManager.getPersianTokens();
        case 'fra':
            return languageManager.getFrenchTokens();
    }

    return returnLanguages;
}