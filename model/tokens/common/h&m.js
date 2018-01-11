var _ = require('lodash');
var consts = require('../../consts.js');
var languageManager = require('../../language_manager.js');

var ddmmyyyy_and_hhmm = require('./ddmmyyyy&hhmm.js');

var fullDateTokens = [
    ddmmyyyy_and_hhmm.tokens[0],
    ddmmyyyy_and_hhmm.tokens[1],
    ddmmyyyy_and_hhmm.tokens[2]];

exports.tokens = [
    {
        example: '23h',
        category: 'h&m',
        regex: /(?:^|[\s,])(\d{1,2})([mh])(?:$|[\s,.])/,
        affectsGenerator: function (match, settings) {
            
            var affectType = undefined;

            if (match[2] == 'm') {
                affectType = consts.timeTypes.minute;
            } else if (match[2] == 'h') {
                affectType = consts.timeTypes.hour;
            } else {
                throw new Error('Unexpected token');
            }

            return [{
                timeType: affectType,
                affectType: consts.reltivity.relative,
                value: -match[1]
            }];
        }
    }]