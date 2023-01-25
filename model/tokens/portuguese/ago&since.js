var consts = require('../../consts.js');
var translator = require('../../tokens_util/portuguese/translator.js');
var converter = require('words-to-numbers');
var patterns = require('../../patterns/portuguese/numbers');

exports.tokens = [
    {
        // Examples: 10 hours ago
        example: 'há 10 horas',
        category: 'ago since before & after',
        regex: new RegExp(`(?:\\b|^)(?:(?:h[aá]|faz|fazem)\\s)?(${patterns.numbers})\\s+(?:de\\s)?(dia|mes|mês|ano|semana|hora|minuto|segundo)(?:s|es)?\\s?(e\\s+(${patterns.numbers})\\s+(dia|mes|mês|anos|semana|horas|minuto|segundo)s?\\s+)?(atr[aá]s|antes|passado)?(?:\\b|$)`),
        // The indexes of capturing gorups in the match
        variables: {
            value: 1,
            timeType: 2
        },
        affectsGenerator: function (match) {
            console.log(match)

            // Convert to a known english convention
            var timeType = translator.portugueseToEnglish(match[this.variables.timeType]);

            // Group Indexes
            const valueIdx = 1;
            const timeTypeIdx = 2;
            // Example :.. and 4 days...
            const extensionToRelativenessIdx = 3;
            const secondaryValueIdx = 4;
            const secondaryTimeType = 5;

            const affects = [];

            // Handle first term and convert to a known english convention
            var timeType = translator.portugueseToEnglish(match[timeTypeIdx]);
            var firstValue = match[valueIdx];
            if (!/\d+/.test(firstValue)) {
                firstValue = firstValue.split(' ').map(translator.portugueseToEnglish).join(' ')
                firstValue = converter.wordsToNumbers(firstValue)
            }
            firstValue = firstValue * (-1);

            affects.push(
                pasrseToAffect(timeType, firstValue)
            );

            // Do we have a secondary term?
            // Meaning:3 weeks >>>and 7 days<<< ago
            if (match[extensionToRelativenessIdx]) {

                var timeType = translator.portugueseToEnglish(match[secondaryTimeType]);

                var firstValue = match[secondaryValueIdx]
                if (!/\d+/.test(firstValue)) {
                    firstValue = firstValue.split(' ').map(translator.portugueseToEnglish).join(' ')
                    firstValue = converter.wordsToNumbers(firstValue)
                }
                firstValue = firstValue * (-1);

                affects.push(
                    pasrseToAffect(timeType, firstValue)
                );
            }

            return affects;

        }
    }
];

/**
* 
* @param {*} timeType 
* @param {*} value 
* @returns Object with new timeType and Value
*/
function pasrseToAffect(timeTypeName, value) {
    if (timeTypeName == 'week') {
        timeTypeName = 'day';
        value *= 7;
    }

    return {
        timeType: consts.timeTypes[timeTypeName],
        affectType: consts.reltivity.relative,
        value: value
    };
}