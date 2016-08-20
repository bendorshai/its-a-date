var consts = require ('./consts.js');
var ddmmyyyy_and_hhmm = require('./tokens/ddmmyyyy&hhmm.js')
var ago_and_sice = require('./tokens/ago&since.js');
var months = require('./tokens/months.js');
var date_and_year = require('./tokens/date&year.js');
var yesterday_and_tomorrow = require('./tokens/yesterday&tomorrow.js');
var facebook = require('./tokens/facebook.js');
var now = require('./tokens/now.js');

module.exports = exports = [];
 
exports.push.apply(exports, ddmmyyyy_and_hhmm.tokens);
exports.push.apply(exports, ago_and_sice.tokens);
exports.push.apply(exports, months.tokens);
exports.push.apply(exports, date_and_year.tokens);
exports.push.apply(exports, yesterday_and_tomorrow.tokens);
exports.push.apply(exports, facebook.tokens);
exports.push.apply(exports, now.tokens);


