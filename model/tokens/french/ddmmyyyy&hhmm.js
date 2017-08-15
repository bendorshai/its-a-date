var consts = require('../../consts.js');

exports.tokens = [
    {
        // today at 3 PM
        example: 'Aujourd\'hui à 15 heures',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b) à (\d{1,2})?\s*(heures|du matin)/,
        variables: {
            hour: 1,
        },
        affectsGenerator: function (match) {
            var hour = match[this.variables.hour];

            return [
                {
                    timeType: consts.timeTypes.hour,
                    affectType: consts.reltivity.absolute,
                    value: hour
                }]
        }
    },
    {
        example: 'Hier à 15h15',
        category: 'ddmmyyyy & hhmm',
        regex: /(?:^|\b)(\d{1,2})[h](\d{1,2})/,
        variables: {
            hour: 1,
            minute: 2,
        },
        affectsGenerator: function (match) {
            var hour = match[this.variables.hour];

            return [
                {
                    timeType: consts.timeTypes.hour,
                    affectType: consts.reltivity.absolute,
                    value: hour
                },
                {
                    timeType: consts.timeTypes.minute,
                    affectType: consts.reltivity.absolute,
                    value: match[this.variables.minute]
                }]
        }
    }
];