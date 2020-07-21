var consts = require('../../consts.js');

// Converts a portuguese word convention to one of our english conventions
exports.portugueseToEnglish = function (portugueseConvention) {

    // Year conventions
    if (portugueseConvention == 'ano') {
        return consts.timeTypes[consts.timeTypes.year];
    }

    // Month conventions
    if (portugueseConvention == 'mes' || portugueseConvention == 'mês') {
        return consts.timeTypes[consts.timeTypes.month];
    }

    // Week conventions
    if (portugueseConvention == 'semana') {
        return consts.timeTypes[consts.timeTypes.week];
    }

    // Day conventions
    if (portugueseConvention == 'dia') {
        return consts.timeTypes[consts.timeTypes.day];
    }

    // Seconds conventions
    if (portugueseConvention == 'segundo') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Minute conventions
    if (portugueseConvention == 'minuto') {
        return consts.timeTypes[consts.timeTypes.minute];
    }

    // Hour conventions
    if (portugueseConvention == 'hora') {
        return consts.timeTypes[consts.timeTypes.hour];
    }

    // Number convetions
    switch (portugueseConvention) {
        case 'zero':
            return 'zero';
        case 'um':
            return 'one';
        case 'uma':
            return 'one';
        case 'dois':
            return 'two';
        case 'duas':
            return 'two';
        case 'três':
            return 'three'
        case 'quatro':
            return 'four';
        case 'cinco':
            return 'five';
        case 'seis':
            return 'six';
        case 'sete':
            return 'seven';
        case 'oito':
            return 'eight';
        case 'nove':
            return 'nine';
        case 'dez':
            return 'ten';
        case 'onze':
            return 'eleven';
        case 'doze':
            return 'twelve';
        case 'treze':
            return 'thirteen';
        case 'quatorze':
            return 'fourteen';
        case 'quinze':
            return 'fifteen';
        case 'dezesseis':
            return 'sixteen';
        case 'dezessete':
            return 'seventeen';
        case 'dezoito':
            return 'eighteen';
        case 'dezenove':
            return 'nineteen';
        case 'vinte':
            return 'twenty';
        case 'trinta':
            return 'thirty';
        case 'quarenta':
            return 'forty';
        case 'cinquenta':
            return 'fifty';
        case 'sessenta':
            return 'sixty';
        case 'setenta':
            return 'seventy';
        case 'oitenta':
            return 'eighty';
        case 'noventa':
            return 'ninety';
        case 'cem':
            return 'one hundred';
        case 'duzentos':
            return 'two hundred';
        case 'trezentos':
            return 'three hundred';
        case 'quatrocentos':
            return 'four hundred';
        case 'quinhentos':
            return 'five hundred';
        case 'seiscentos':
            return 'six hundred';
        case 'setecentos':
            return 'seven hundred';
        case 'oitocentos':
            return 'eight hundred';
        case 'novecentos':
            return 'nine hundred';
        case 'mil':
            return 'thousand';
        case 'milhão':
            return 'million';
        case 'bilhão':
            return 'billion';
        case 'trilhão':
            return 'trillion';
        case 'quadrilhão':
            return 'quadrillion';
    }

    return undefined;
}


exports.translators = [exports.portugueseToEnglish]