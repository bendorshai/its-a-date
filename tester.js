var itsadate = require('./index.js');
var moment = require('moment')

// YOOO!
var yo = itsadate.parse("5 years ago at 15:44")
yo = itsadate.parse("3 months after 11/01/1990")

// Test function
function test(expected, name) {
    if (!expected) {
        console.log('ERROR: in ' + name)
    }
    else {
        console.log('Green , . , . ' + name)
    }
}

itsadate.brag();

console.log('-------------------Tester-------------------');


test(itsadate.parse('now').getHours() == (new Date()).getHours(), 'hours of now');


// English dates tests
test(itsadate.parse("jan").getMonth() == 0, 'jan');
test(itsadate.parse("feb").getMonth() == 1, 'feb');
test(itsadate.parse("mar").getMonth() == 2, 'mar');
test(itsadate.parse("apr").getMonth() == 3, 'apr');
test(itsadate.parse("may").getMonth() == 4, 'may');
test(itsadate.parse("jun").getMonth() == 5, 'jun');
test(itsadate.parse("july").getMonth() == 6, 'july');
test(itsadate.parse("aug").getMonth() == 7, 'aug');
test(itsadate.parse("sep").getMonth() == 8, 'sep');
test(itsadate.parse("oct").getMonth() == 9, 'oct');
test(itsadate.parse("nov").getMonth() == 10, 'nov');
test(itsadate.parse("dec").getMonth() == 11, 'dec');
test(itsadate.parse("31 dec 1945").getDate() == 31, '31');
test(itsadate.parse("31th dec 1945").getDate() == 31, '31th');
test(itsadate.parse("31th dec 1945").getFullYear() == 1945, '1945');

test(itsadate.parse("11/1/1990").getFullYear() == 1990, '1990');
test(itsadate.parse("11/1/1990").getMonth() == 0, 'January');
test(itsadate.parse("11/1/1990").getDate() == 11, '11');
test(itsadate.parse("23-5-1983").getDate() == 23, '23');


test(itsadate.parse("1:00pm").getHours() == 13, '1:00pm');
test(itsadate.parse("16:20").getHours() == 16, '16:00');
test(itsadate.parse("16:20").getMinutes() == 20, '20 minutes');

var now = new Date();
var m = moment(now);

var yesterDate = m.add(-1, 'day').toDate().getDate();
test(itsadate.parse("yesterday").getDate() == yesterDate, 'yesterDate');

m = moment(now);
test(itsadate.parse("3 mins").getMinutes() == m.add(-3, 'minute').minute(), '3 mins');

m = moment(now);
test(itsadate.parse("3 hrs").getHours() == m.add(-3, 'hour').hours(), '3 hrs');

m = moment(now);
test(itsadate.parse("1 min").getMinutes() == m.add(-1, 'minute').minute(), '1 min');

m = moment(now);
test(itsadate.parse("1 hr").getHours() == m.add(-1, 'hours').hours(), '3 hr');

m = moment(new Date());
var momentDate = m.add(-14, 'd').date();
test(itsadate.parse("2 weeks ago").getDate() == momentDate, '2 weeks ago');

m = moment(new Date());
momentDate = m.add(-7, 'd').date();
test(itsadate.parse("1 week ago").getDate() == momentDate, '1 week ago');

test(itsadate.parse("askdjasd") == undefined, 'undefined');
test(itsadate.parse('1st of november 02/03/2000') == undefined, 'conflict');

var now1 = itsadate.parse("now");
var now2 = new Date();

test(now1.getMinutes() == now2.getMinutes(), 'now minutes');
test(now1.getHours() == now2.getHours(), 'now hours');
test(now1.getDate() == now2.getDate(), 'now day');
test(now1.getMonth() == now2.getMonth(), 'now month');
test(now1.getFullYear() == now2.getFullYear(), 'now YEARRR');

itsadate.settings({'day_before_month':false});
test(itsadate.parse("11/1/1990").getFullYear() == 1990,'day_before_mont 1990');
test(itsadate.parse("11/1/1990").getMonth() == 10,'day_before_mont November');
test(itsadate.parse("11/1/1990").getDate() == 1,'day_before_mont 1st');
itsadate.settings().restore();
test(itsadate.parse("11/1/1990").getFullYear() == 1990,'setting restore 1990');
test(itsadate.parse("11/1/1990").getMonth() == 0,'setting restore January');
test(itsadate.parse("11/1/1990").getDate() == 11,'setting restore 11');

// Russian dates tests
test(itsadate.parse("Янв").getMonth() == 0, 'Ru jan');
test(itsadate.parse("Фев").getMonth() == 1, 'Ru feb');
test(itsadate.parse("Мар").getMonth() == 2, 'Ru mar');
test(itsadate.parse("Апр").getMonth() == 3, 'Ru apr');
test(itsadate.parse("Май").getMonth() == 4, 'Ru may');
test(itsadate.parse("Июн").getMonth() == 5, 'Ru jun');
test(itsadate.parse("Июл").getMonth() == 6, 'Ru jul');
test(itsadate.parse("Авг").getMonth() == 7, 'Ru aug');
test(itsadate.parse("Сен").getMonth() == 8, 'Ru sep');
test(itsadate.parse("Окт").getMonth() == 9, 'Ru oct');
test(itsadate.parse("Ноя").getMonth() == 10, 'Ru nov');
test(itsadate.parse("Дек").getMonth() == 11, 'Ru dec');

test(itsadate.parse('1 день назад').getDate() == yesterDate, 'Ru yesterDate');

m = moment(now);
var fourDaysAgo = m.add(-4, 'day').toDate().getDate();
test(itsadate.parse('4 дня назад').getDate() == fourDaysAgo, 'Ru fourDaysAgo');

m = moment(now);
var fiveDaysAgo = m.add(-5, 'day').toDate().getDate();
test(itsadate.parse('5 дней назад').getDate() == fiveDaysAgo, 'Ru fiveDaysAgo');

test(itsadate.parse('now').getHours() == (new Date()).getHours(), 'hours of now');

test(itsadate.parse("Дек 19, 2015").getDate() == 19, '19');
test(itsadate.parse("Дек 19, 2015").getMonth() == 11, '11');

test(itsadate.parse("Ноя 30, 2015").getDate() == 30, '30');
test(itsadate.parse("Ноя 30, 2015").getMonth() == 10, '10');

test(itsadate.parse("Окт 30, 2015").getDate() == 30, '30');
test(itsadate.parse("Окт 30, 2015").getMonth() == 9, '9');

test(itsadate.parse("Сен 22, 2015").getDate() == 22, '22');
test(itsadate.parse("Сен 22, 2015").getMonth() == 8, '8');

test(itsadate.parse("Авг 13, 2016").getDate() == 13, '13');
test(itsadate.parse("Авг 13, 2016").getMonth() == 7, '7');

test(itsadate.parse("Июл 29, 2016").getDate() == 29, '29');
test(itsadate.parse("Июл 29, 2016").getMonth() == 6, '6');

test(itsadate.parse("Июн 28, 2016").getDate() == 28, '28');
test(itsadate.parse("Июн 28, 2016").getMonth() == 5, '5');

test(itsadate.parse("Май 25, 2016").getDate() == 25, '25');
test(itsadate.parse("Май 25, 2016").getMonth() == 4, '4');

test(itsadate.parse("Апр 28, 2016").getDate() == 28, '28');
test(itsadate.parse("Апр 28, 2016").getMonth() == 3, '3');

test(itsadate.parse("Мар 29, 2016").getDate() == 29, '29');
test(itsadate.parse("Мар 29, 2016").getMonth() == 2, '2');

test(itsadate.parse("Фев 26, 2016").getDate() == 26, '26');
test(itsadate.parse("Фев 26, 2016").getMonth() == 1, '1');

test(itsadate.parse("Янв 26, 2016").getDate() == 26, '26');
test(itsadate.parse("Янв 26, 2016").getMonth() == 0, '0');

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

itsadate.settings({'gmt':'auto'});
test(itsadate.parse("11:00 PM").getHours() == 23, 'am/pm 11 pm');
test(itsadate.parse("12:00 PM").getHours() == 12, 'am/pm 12 pm');

test(itsadate.parse("June 18, 2015").getDate() == 18, 'June 18, 2015');

itsadate.settings({'gmt':3});
itsadate.settings().restore();
var gmt = itsadate.settings('gmt');
test(gmt == 'auto', 'resote settings')

test(itsadate.parse('now').getHours() == (new Date()).getHours(), 'hours of now');

console.log('finished testing.');

