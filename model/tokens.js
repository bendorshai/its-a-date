var consts = require('./consts.js');

module.exports = exports = [];

var ddmmyyyy_and_hhmm = require('./tokens/common/ddmmyyyy&hhmm.js')
var en_ago_and_sice = require('./tokens/english/ago&since.js');
var en_months = require('./tokens/english/months.js');
var date_and_year = require('./tokens/common/date&year.js');
var en_yesterday_and_tomorrow = require('./tokens/english/yesterday&tomorrow.js');
var en_facebook = require('./tokens/english/facebook.js');
var en_now = require('./tokens/english/now.js');

exports.push.apply(exports, ddmmyyyy_and_hhmm.tokens);
exports.push.apply(exports, en_ago_and_sice.tokens);
exports.push.apply(exports, en_months.tokens);
exports.push.apply(exports, date_and_year.tokens);
exports.push.apply(exports, en_yesterday_and_tomorrow.tokens);
exports.push.apply(exports, en_facebook.tokens);
exports.push.apply(exports, en_now.tokens);

// Russian section
var ru_months = require('./tokens/russian/months.js');
var ru_ago_and_sice = require('./tokens/russian/ago&since.js');

exports.push.apply(exports, ru_months.tokens);
exports.push.apply(exports, ru_ago_and_sice.tokens);