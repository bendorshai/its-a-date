var franc = require('franc');

exports.detect = function (dateString) {
    return franc.all(dateString, {
        'whitelist': ['eng', 'urd', 'rus', 'ell', 'pes', 'spa', 'tur'],
        'minLength': 3
    });
}