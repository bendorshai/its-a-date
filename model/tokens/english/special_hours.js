var consts = require('../../consts.js');

exports.tokens = [
    {
        // IMPORTANT - 'At' is pretty necessary in my opinion in this case, but may be deleted...
        // Example: 1/1/1990 at midnight, 2 days ago at midnight
        example: '1/1/1990 at midnight',
        category: 'special hours',
        regex: /(?:\b|^)\s*at\s+midnight(?:\b|$)/,
        affectsGenerator: function () {
            return [
                {
                    timeType: consts.timeTypes.hour,
                    affectType: consts.reltivity.absolute,
                    value: 0
                },
                {
                    timeType: consts.timeTypes.minute,
                    affectType: consts.reltivity.absolute,
                    value: 0
                }
            ];
        }
    }
];