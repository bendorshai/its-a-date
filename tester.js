var itsadate = require('./index.js');
var moment = require('moment')
// YOOO!

var yo = itsadate.parse("5 years ago at 15:44")
yo = itsadate.parse("3 months after 11/01/1990")

// Test function
function test(expected, name)
{
    if (!expected)
    {
        console.log('ERROR: in ' + name)
    }
    else
    {
        console.log('Green , . , . ' + name)
    }
}

itsadate.brag();


test(itsadate.parse("jan").getMonth() == 0,'jan');
test(itsadate.parse("feb").getMonth() == 1,'feb');
test(itsadate.parse("mar").getMonth() == 2,'mar');
test(itsadate.parse("apr").getMonth() == 3,'apr');
test(itsadate.parse("may").getMonth() == 4,'may');
test(itsadate.parse("jun").getMonth() == 5,'jun');
test(itsadate.parse("july").getMonth() == 6,'july');
test(itsadate.parse("aug").getMonth() == 7,'aug');
test(itsadate.parse("sep").getMonth() == 8,'sep');
test(itsadate.parse("oct").getMonth() == 9,'oct');
test(itsadate.parse("nov").getMonth() == 10,'nov');
test(itsadate.parse("dec").getMonth() == 11,'dec');
test(itsadate.parse("31 dec 1945").getDate() == 31,'31');
test(itsadate.parse("31th dec 1945").getDate() == 31,'31th');
test(itsadate.parse("31th dec 1945").getFullYear() == 1945,'1945');

test(itsadate.parse("11/1/1990").getFullYear() == 1990,'1990');
test(itsadate.parse("11/1/1990").getMonth() == 0,'January');
test(itsadate.parse("11/1/1990").getDate() == 11,'11');
test(itsadate.parse("23-5-1983").getDate() == 23,'23');


test(itsadate.parse("1:00pm").getHours() == 13,'1:00pm');
test(itsadate.parse("16:20").getHours() == 16,'16:00');
test(itsadate.parse("16:20").getMinutes() == 20,'20 minutes');

var now = new Date();
var m = moment(now);

var yesterDate = m.add(-1,'day').toDate().getDate();
test(itsadate.parse("yesterday").getDate() == yesterDate ,'yesterDate');

m = moment(now);
test(itsadate.parse("3 mins").getMinutes() == m.add(-3,'minute').minute() ,'3 mins');

m = moment(now);
test(itsadate.parse("3 hrs").getHours() == m.add(-3,'hour').hours() ,'3 hrs');

m = moment(now);
test(itsadate.parse("1 min").getMinutes() == m.add(-1,'minute').minute() ,'1 min');

m = moment(now);
test(itsadate.parse("1 hr").getHours() == m.add(-1,'hours').hours() ,'3 hr');

m = moment(new Date());
var momentDate = m.add(-14,'d').date();
test(itsadate.parse("2 weeks ago").getDate() == momentDate ,'2 weeks ago');

m = moment(new Date());
momentDate = m.add(-7,'d').date();
test(itsadate.parse("1 week ago").getDate() ==  momentDate, '1 week ago');

test(itsadate.parse("askdjasd") == undefined, 'undefined');
test(itsadate.parse('1st of november 02/03/2000') == undefined, 'conflict');

var now1 = itsadate.parse("now");
var now2 = new Date();

test(now1.getMinutes() == now2.getMinutes() ,'now minutes');
test(now1.getHours() == now2.getHours() ,'now hours');
test(now1.getDate() == now2.getDate() ,'now day');
test(now1.getMonth() == now2.getMonth(),'now month');
test(now1.getFullYear() == now2.getFullYear(),'now YEARRR');

itsadate.settings({'day_before_month':false});
test(itsadate.parse("11/1/1990").getFullYear() == 1990,'day_before_mont 1990');
test(itsadate.parse("11/1/1990").getMonth() == 10,'day_before_mont November');
test(itsadate.parse("11/1/1990").getDate() == 1,'day_before_mont 1st');
itsadate.settings().restore();
test(itsadate.parse("11/1/1990").getFullYear() == 1990,'setting restore 1990');
test(itsadate.parse("11/1/1990").getMonth() == 0,'setting restore January');
test(itsadate.parse("11/1/1990").getDate() == 11,'setting restore 11');


test(itsadate.parse("11/1/1990",{
        format_hits: [{
                day_before_month: false,
                desc : 'when true then its-a-date expects dd/mm/yyyy, otherwise mm/dd/yyyy'
            }]
        }).getDate() == 1, 'alternative settings day')

// GMT Testss
itsadate.settings().restore();
var date = new Date();
var ilNow = itsadate.parse("now")
test(date.getHours() == ilNow.getHours(),'auto gmt');

itsadate.settings({gmt:-2.5});
var gmt_minus_5_halfs = itsadate.parse("now")

itsadate.settings({gmt:1.5});
var gmt_plus_3_halfs = itsadate.parse("now")

test(gmt_minus_5_halfs.getHours() == gmt_plus_3_halfs.getHours()-4,'gmt -2.5 & +1.5');

console.log('finished testing.');