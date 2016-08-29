var consts = require('./consts.js');

module.exports = exports = [];

// Common section
var date_and_year = require('./tokens/common/date&year.js');
var ddmmyyyy_and_hhmm = require('./tokens/common/ddmmyyyy&hhmm.js')

exports.push.apply(exports, date_and_year.tokens);
exports.push.apply(exports, ddmmyyyy_and_hhmm.tokens);

// English section
var en_now = require('./tokens/english/now.js');
var en_months = require('./tokens/english/months.js');
var en_facebook = require('./tokens/english/facebook.js');
var en_ago_and_sice = require('./tokens/english/ago&since.js');
var en_yesterday_and_tomorrow = require('./tokens/english/yesterday&tomorrow.js');

exports.push.apply(exports, en_now.tokens);
exports.push.apply(exports, en_months.tokens);
exports.push.apply(exports, en_facebook.tokens);
exports.push.apply(exports, en_ago_and_sice.tokens);
exports.push.apply(exports, en_yesterday_and_tomorrow.tokens);

// Russian section
var ru_months = require('./tokens/russian/months.js');
var ru_ago_and_sice = require('./tokens/russian/ago&since.js');
var ru_yesterday_and_tomorrow = require('./tokens/russian/yesterday&tomorrow.js');

exports.push.apply(exports, ru_months.tokens);
exports.push.apply(exports, ru_ago_and_sice.tokens);
exports.push.apply(exports, ru_yesterday_and_tomorrow.tokens);

// Arabic section
var ar_months = require('./tokens/arabic/months.js');
var ar_ago_and_sice = require('./tokens/arabic/ago&since.js');

exports.push.apply(exports, ar_months.tokens);
exports.push.apply(exports, ar_ago_and_sice.tokens);