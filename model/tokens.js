var consts = require ('./consts.js');
var ddmmyyyy_and_hhmm = require('./tokens/english/ddmmyyyy&hhmm.js')
var ago_and_sice = require('./tokens/english/ago&since.js');
var months = require('./tokens/english/months.js');
var date_and_year = require('./tokens/english/date&year.js');
var yesterday_and_tomorrow = require('./tokens/english/yesterday&tomorrow.js');
var facebook = require('./tokens/english/facebook.js');
var now = require('./tokens/english/now.js');

module.exports = exports = [];
 
exports.push.apply(exports, ddmmyyyy_and_hhmm.tokens);
exports.push.apply(exports, ago_and_sice.tokens);
exports.push.apply(exports, months.tokens);
exports.push.apply(exports, date_and_year.tokens);
exports.push.apply(exports, yesterday_and_tomorrow.tokens);
exports.push.apply(exports, facebook.tokens);
exports.push.apply(exports, now.tokens);


