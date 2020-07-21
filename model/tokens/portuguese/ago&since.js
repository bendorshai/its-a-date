var consts = require('../../consts.js');
var translator = require('../../tokens_util/portuguese/translator.js');
var converter = require('words-to-numbers');
var patterns = require('../../patterns/portuguese/numbers');

exports.tokens = [
    {
        // Examples: 10 hours ago
        example: 'há 10 horas',
        category: 'ago since before & after',
        regex: new RegExp(`(?:\\b|^)(?:(?:h[aá]|faz|fazem)\\s)?(${patterns.numbers})\\s+(?:de\\s)?(dia|mes|mês|ano|semana|hora|minuto)(?:s|es)?\\s?(atr[aá]s|antes|passado)?(?:\\b|$)`),
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            // Convert to a known english convention
            var timeType = translator.portugueseToEnglish(match[this.variables.timeType]);
        
            var calculated = match[this.variables.value]
            if(!/\d+/.test(calculated)){
                calculated = calculated.split(' ').map(translator.portugueseToEnglish).join(' ')        
                calculated = converter.wordsToNumbers(calculated)
            }
            calculated = calculated * -1;

            if (timeType == 'week') {
                timeType = 'day';
                calculated *= 7;
            }

            return [{
                timeType: consts.timeTypes[timeType],
                affectType: consts.reltivity.relative,
                value: calculated
            }]
        }
    }
];