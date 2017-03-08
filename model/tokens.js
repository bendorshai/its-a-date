var consts = require('./consts.js');

module.exports = exports = [];

var commonArray = [];
var englishArray = [];
var russianArray = [];
var arabicArray = [];
var turkishArray = [];
var spanishArray = [];
var greekArray = [];

// Common section
var date_and_year = require('./tokens/common/date&year.js');
var ddmmyyyy_and_hhmm = require('./tokens/common/ddmmyyyy&hhmm.js');

commonArray = commonArray.concat(date_and_year.tokens).concat(ddmmyyyy_and_hhmm.tokens);

// English section
var en_now = require('./tokens/english/now.js');
var en_months = require('./tokens/english/months.js');
var en_facebook = require('./tokens/english/facebook.js');
var en_last_next = require('./tokens/english/last&next.js');
var en_ago_and_since = require('./tokens/english/ago&since.js');
var en_special_hours = require('./tokens/english/special_hours.js');
var en_yesterday_and_tomorrow = require('./tokens/english/yesterday&tomorrow.js');

englishArray = englishArray.concat(en_now.tokens).concat(en_months.tokens)
    .concat(en_facebook.tokens).concat(en_last_next.tokens)
    .concat(en_ago_and_since.tokens).concat(en_special_hours.tokens)
    .concat(en_yesterday_and_tomorrow.tokens);


// Russian section
var ru_months = require('./tokens/russian/months.js');
var ru_last_next = require('./tokens/russian/last&next.js');
var ru_ago_and_since = require('./tokens/russian/ago&since.js');
var ru_yesterday_and_tomorrow = require('./tokens/russian/yesterday&tomorrow.js');

russianArray = russianArray.concat(ru_months.tokens).concat(ru_last_next.tokens)
    .concat(ru_ago_and_since.tokens).concat(ru_yesterday_and_tomorrow.tokens);

// Arabic section
var ar_months = require('./tokens/arabic/months.js');
var ar_ago_and_since = require('./tokens/arabic/ago&since.js');
var ar_last_next = require('./tokens/arabic/last&next.js');

arabicArray = arabicArray.concat(ar_months.tokens).concat(ar_ago_and_since.tokens)
    .concat(ar_last_next.tokens);

// Turkish section
var tr_months = require('./tokens/turkish/months.js');
var tr_ago_and_since = require('./tokens/turkish/ago&since.js');
var tr_yesterday_and_tomorrow = require('./tokens/turkish/yesterday&tomorrow.js');

turkishArray = turkishArray.concat(tr_months.tokens).concat(tr_ago_and_since.tokens)
    .concat(tr_yesterday_and_tomorrow.tokens);

// Spanish section
var sp_months = require('./tokens/spanish/months.js');
var sp_last_next = require('./tokens/spanish/last&next.js');
var sp_ago_and_since = require('./tokens/spanish/ago&since.js');
var sp_yesterday_and_tomorrow = require('./tokens/spanish/yesterday&tomorrow.js');

spanishArray = spanishArray.concat(sp_months.tokens).concat(sp_last_next.tokens)
    .concat(sp_ago_and_since.tokens).concat(sp_yesterday_and_tomorrow.tokens);

// Greek section
var gr_months = require('./tokens/greek/months.js');
var gr_last_next = require('./tokens/greek/last&next.js');
var gr_ago_and_since = require('./tokens/greek/ago&since.js');
var gr_ddmmyyyy_and_hhmm = require('./tokens/greek/ddmmyyyy&hhmm.js');
var gr_yesterday_and_tomorrow = require('./tokens/greek/yesterday&tomorrow.js');

greekArray = greekArray.concat(gr_months.tokens).concat(gr_last_next.tokens)
    .concat(gr_ago_and_since.tokens).concat(gr_ddmmyyyy_and_hhmm.tokens).concat(gr_yesterday_and_tomorrow.tokens);

exports.push.apply(exports, commonArray);
exports.push.apply(exports, englishArray);
exports.push.apply(exports, russianArray);
exports.push.apply(exports, arabicArray);
exports.push.apply(exports, turkishArray);
exports.push.apply(exports, spanishArray);
exports.push.apply(exports, greekArray);

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
        // The following languages are not supported YET
        case 'pes':
            return null;
    }

    return returnLanguages;
}