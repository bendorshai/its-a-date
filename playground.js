var itsadate = require('./index.js');

// Playground starts here --->
var currentDate = new Date(2010, 10, 10)
var settings = {
    format_hints: {
            day_before_month: true,
            desc : 'When true then its-a-date expects dd/mm/yyyy, otherwise mm/dd/yyyy'
    },
    hint_strict: {
        strict: false,
        desc: 'when not strict, its-a-date will try different formats to prevent error'
    },
    timezone : {
        gmt: 'auto',
        desc: 'The GMT offset to add to the date in hours (e.g. -3)'
    },
    base_date : {
        base_date: currentDate,
        desc: 'What is the date from which you wish to calculate a relative date? (yesterday for 2010/10/10 != yesterday for today)'
    },
    restore: function() {
        that.set({'gmt':'auto',
                  'day_before_month':true,
                  'strict':false,
                  'base_date':new Date()});
    }
}; 

var s = itsadate.parse('Только что', settings);

console.log(s);

