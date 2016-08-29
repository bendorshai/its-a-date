var itsadate = require('./index.js');
var moment = require('moment')

var failCount = 0;
var successCount = 0;

// example
itsadate.parse('yesterday at 16:20');

// YOOO!
var yo = itsadate.parse("5 years ago at 15:44")
yo = itsadate.parse("3 months after 11/01/1990")

// Test function
function test(expected, name) {
    if (!expected) {
        failCount++;
        console.log('ERROR: in ' + name)
    }
    else {
        successCount++;
        console.log('Green , . , . ' + name)
    }
}

itsadate.brag();

console.log('--------------------------------------------------------Tester--------------------------------------------------------');


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
var momentDate = m.add(-1, 'hour').date();
test(itsadate.parse("a hour ago").getDate() == momentDate, 'a hour ago');

m = moment(new Date());
var momentDate = m.add(-7, 'd').date();
test(itsadate.parse("a week ago").getDate() == momentDate, 'a week ago');

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

itsadate.settings({ 'day_before_month': false });
test(itsadate.parse("11/1/1990").getFullYear() == 1990, 'day_before_mont 1990');
test(itsadate.parse("11/1/1990").getMonth() == 10, 'day_before_mont November');
test(itsadate.parse("11/1/1990").getDate() == 1, 'day_before_mont 1st');
itsadate.settings().restore();
test(itsadate.parse("11/1/1990").getFullYear() == 1990, 'setting restore 1990');
test(itsadate.parse("11/1/1990").getMonth() == 0, 'setting restore January');
test(itsadate.parse("11/1/1990").getDate() == 11, 'setting restore 11');

test(itsadate.parse('now').getHours() == (new Date()).getHours(), 'hours of now');

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

test(itsadate.parse('вчера в 22:50').getDate() == yesterDate, 'Ru yesterday at 22:50');

m = moment(new Date());
momentDate = m.add(1, 'd').date();
test(itsadate.parse('завтра в 18:58').getDate() == momentDate, 'Ru tomorrow at 18:58');

test(itsadate.parse('1 день назад').getDate() == yesterDate, 'Ru 1 day ago');

m = moment(now);
test(itsadate.parse('1 МИНУТУ НАЗАД').getMinutes() == m.add(-1, 'minute').minute(), 'Ru 1 min ago');

m = moment(now);
test(itsadate.parse('25 минут назад').getMinutes() == m.add(-25, 'minute').minute(), 'Ru 25 mins ago');

m = moment(now);
test(itsadate.parse('1 час назад').getHours() == m.add(-1, 'hours').hours(), 'Ru 1 hour ago');

m = moment(now);
test(itsadate.parse('13 часов назад').getHours() == m.add(-13, 'hours').hours(), 'Ru 13 hours ago');

m = moment(now);
test(itsadate.parse('23 часа назад').getHours() == m.add(-23, 'hours').hours(), 'Ru 23 hours ago');

m = moment(now);
var fourDaysAgo = m.add(-4, 'day').toDate().getDate();
test(itsadate.parse('4 дня назад').getDate() == fourDaysAgo, 'Ru 4 days ago');

m = moment(now);
var fiveDaysAgo = m.add(-5, 'day').toDate().getDate();
test(itsadate.parse('5 дней назад').getDate() == fiveDaysAgo, 'Ru 5 days ago');

test(itsadate.parse("Дек 19, 2015").getDate() == 19, 'Ru December 19 2016 - first check');
test(itsadate.parse("Дек 19, 2015").getMonth() == 11, 'Ru December 19 2016 - second check');

test(itsadate.parse("Ноя 30, 2015").getDate() == 30, 'Ru Novermber 30 2016 - first check');
test(itsadate.parse("Ноя 30, 2015").getMonth() == 10, 'Ru Novermber 30 2016 - second check');

test(itsadate.parse("Окт 30, 2015").getDate() == 30, 'Ru October 30 2016 - first check');
test(itsadate.parse("Окт 30, 2015").getMonth() == 9, 'Ru October 30 2016 - second check');

test(itsadate.parse("Сен 22, 2015").getDate() == 22, 'Ru September 22 2016 - first check');
test(itsadate.parse("Сен 22, 2015").getMonth() == 8, 'Ru September 22 2016 - second check');

test(itsadate.parse("Авг 13, 2016").getDate() == 13, 'Ru August 13 2016 - first check');
test(itsadate.parse("Авг 13, 2016").getMonth() == 7, 'Ru August 13 2016 - second check');

test(itsadate.parse("Июл 29, 2016").getDate() == 29, 'Ru July 29 2016 - first check');
test(itsadate.parse("Июл 29, 2016").getMonth() == 6, 'Ru July 29 2016 - second check');

test(itsadate.parse("Июн 28, 2016").getDate() == 28, 'Ru 28 June 2016 - first check');
test(itsadate.parse("Июн 28, 2016").getMonth() == 5, 'Ru 28 June 2016 - second check');

test(itsadate.parse("Май 25, 2016").getDate() == 25, 'Ru May 25 2016 - first check');
test(itsadate.parse("Май 25, 2016").getMonth() == 4, 'Ru May 25 2016 - second check');

test(itsadate.parse("Апр 28, 2016").getDate() == 28, 'Ru April 28 2016 - first check');
test(itsadate.parse("Апр 28, 2016").getMonth() == 3, 'Ru April 28 2016 - second check');

test(itsadate.parse("Мар 29, 2016").getDate() == 29, 'Ru March 29 2016 - first check');
test(itsadate.parse("Мар 29, 2016").getMonth() == 2, 'Ru March 29 2016 - second check');

test(itsadate.parse("Фев 26, 2016").getDate() == 26, 'Ru February 26 2016 - first check');
test(itsadate.parse("Фев 26, 2016").getMonth() == 1, 'Ru February 26 2016 - second check');

test(itsadate.parse("Янв 26, 2016").getDate() == 26, 'Ru January 26 2016 - first check');
test(itsadate.parse("Янв 26, 2016").getMonth() == 0, 'Ru January 26 2016 - second check');

// Arabic dates tests
test(itsadate.parse("يناير").getMonth() == 0, 'Ar jan');
test(itsadate.parse("فبراير").getMonth() == 1, 'Ar feb');
test(itsadate.parse("مارس").getMonth() == 2, 'Ar mar');
test(itsadate.parse("أبريل").getMonth() == 3, 'Ar apr');
test(itsadate.parse("مايو").getMonth() == 4, 'Ar may');
test(itsadate.parse("يونيو").getMonth() == 5, 'Ar jun');
test(itsadate.parse("يوليو").getMonth() == 6, 'Ar jul');
test(itsadate.parse("أغسطس").getMonth() == 7, 'Ar aug');
test(itsadate.parse("سبتمبر").getMonth() == 8, 'Ar sep');
test(itsadate.parse("أكتوبر").getMonth() == 9, 'Ar oct');
test(itsadate.parse("نوفمبر").getMonth() == 10, 'Ar nov');
test(itsadate.parse("ديسمبر").getMonth() == 11, 'Ar dec');

m = moment(now);
test(itsadate.parse('قبل 10 ساعات').getHours() == m.add(-10, 'hour').hours(), 'Ar 10 hours ago');

m = moment(now);
test(itsadate.parse('قبل 12 ساعة').getHours() == m.add(-12, 'hour').hours(), 'Ar 12 hours ago');

m = moment(now);
test(itsadate.parse('قبل ساعتين').getHours() == m.add(-2, 'hour').hours(), 'Ar 2 hours ago');

m = moment(now);
test(itsadate.parse('قبل ساعة').getHours() == m.add(-1, 'hour').hours(), 'Ar an hour ago');

m = moment(now);
test(itsadate.parse('قبل ساعة واحدة').getHours() == m.add(-1, 'hour').hours(), 'Ar 1 hour ago');

m = moment(now);
test(itsadate.parse('قبل 53 دقيقة').getMinutes() == m.add(-53, 'minute').minute(), 'Ar 53 minutes ago');

m = moment(now);
test(itsadate.parse('قبل 6 دقائق').getMinutes() == m.add(-6, 'minute').minute(), 'Ar 6 minutes ago');

m = moment(now);
test(itsadate.parse('قبل دقيقتين').getMinutes() == m.add(-2, 'minute').minute(), 'Ar 2 minutes ago');

test(itsadate.parse("صباح 26 ديسمبر 2016").getDate() == 26, 'Ar December 26 2016 - first check');
test(itsadate.parse("صباح 26 ديسمبر 2016").getMonth() == 11, 'Ar December 26 2016 - second check');
test(itsadate.parse("صباح 26 دجمبر 2016").getDate() == 26, 'Ar December 26 2016 - third check');
test(itsadate.parse("صباح 26 دجمبر 2016").getMonth() == 11, 'Ar December 26 2016 - fourth check');

test(itsadate.parse("صباح 26 نوفمبر 2016").getDate() == 26, 'Ar November 26 2016 - first check');
test(itsadate.parse("صباح 26 نوفمبر 2016").getMonth() == 10, 'Ar November 26 2016 - second check');
test(itsadate.parse("صباح 26 نونبر 2016").getDate() == 26, 'Ar November 26 2016 - third check');
test(itsadate.parse("صباح 26 نونبر 2016").getMonth() == 10, 'Ar November 26 2016 - fourth check');

test(itsadate.parse("صباح 26 أكتوبر 2016").getDate() == 26, 'Ar October 26 2016 - first check');
test(itsadate.parse("صباح 26 أكتوبر 2016").getMonth() == 9, 'Ar October 26 2016 - second check');

test(itsadate.parse("صباح 26 سبتمبر 2016").getDate() == 26, 'Ar September 26 2016 - first check');
test(itsadate.parse("صباح 26 سبتمبر 2016").getMonth() == 8, 'Ar September 26 2016 - second check');
test(itsadate.parse("صباح 26 شتمبر 2016").getDate() == 26, 'Ar September 26 2016 - third check');
test(itsadate.parse("صباح 26 شتمبر 2016").getMonth() == 8, 'Ar September 26 2016 - fourth check');

test(itsadate.parse("صباح 26 أغسطس 2016").getDate() == 26, 'Ar August 26 2016 - first check');
test(itsadate.parse("صباح 26 أغسطس 2016").getMonth() == 7, 'Ar August 26 2016 - second check');
test(itsadate.parse("صباح 26 أوت 2016").getDate() == 26, 'Ar August 26 2016 - third check');
test(itsadate.parse("صباح 26 أوت 2016").getMonth() == 7, 'Ar August 26 2016 - fourth check');
test(itsadate.parse("صباح 26 غشت 2016").getDate() == 26, 'Ar August 26 2016 - fifth check');
test(itsadate.parse("صباح 26 غشت 2016").getMonth() == 7, 'Ar August 26 2016 - sixth check');

test(itsadate.parse("صباح 26 يوليو 2016").getDate() == 26, 'Ar July 26 2016 - first check');
test(itsadate.parse("صباح 26 يوليو 2016").getMonth() == 6, 'Ar July 26 2016 - second check');
test(itsadate.parse("صباح 26 يولية 2016").getDate() == 26, 'Ar July 26 2016 - third check');
test(itsadate.parse("صباح 26 يولية 2016").getMonth() == 6, 'Ar July 26 2016 - fourth check');
test(itsadate.parse("صباح 26 جويلية 2016").getDate() == 26, 'Ar July 26 2016 - fifth check');
test(itsadate.parse("صباح 26 جويلية 2016").getMonth() == 6, 'Ar July 26 2016 - sixth check');
test(itsadate.parse("صباح 26 يوليوز 2016").getDate() == 26, 'Ar July 26 2016 - seventh check');
test(itsadate.parse("صباح 26 يوليوز 2016").getMonth() == 6, 'Ar July 26 2016 - eighth check');

test(itsadate.parse("صباح اليوم 26 يونيو 2016").getDate() == 26, 'Ar June 26 2016 - first check');
test(itsadate.parse("صباح اليوم 26 يونيو 2016").getMonth() == 5, 'Ar June 26 2016 - second check');
test(itsadate.parse("صباح اليوم 26 يونية 2016").getDate() == 26, 'Ar June 26 2016 - third check');
test(itsadate.parse("صباح اليوم 26 يونية 2016").getMonth() == 5, 'Ar June 26 2016 - fourth check');
test(itsadate.parse("صباح اليوم 26 جوان 2016").getDate() == 26, 'Ar June 26 2016 - fifth check');
test(itsadate.parse("صباح اليوم 26 جوان 2016").getMonth() == 5, 'Ar June 26 2016 - sixth check');

test(itsadate.parse("صباح 26 مايو 2016").getDate() == 26, 'Ar May 26 2016 - first check');
test(itsadate.parse("صباح 26 مايو 2016").getMonth() == 4, 'Ar May 26 2016 - second check');
test(itsadate.parse("صباح 26 ماي 2016").getDate() == 26, 'Ar May 26 2016 - third check');
test(itsadate.parse("صباح 26 ماي 2016").getMonth() == 4, 'Ar May 26 2016 - fourth check');

test(itsadate.parse("صباح 26 أبريل 2016").getDate() == 26, 'Ar April 26 2016 - first check');
test(itsadate.parse("صباح 26 أبريل 2016").getMonth() == 3, 'Ar April 26 2016 - second check');
test(itsadate.parse("صباح 26 إبريل 2016").getDate() == 26, 'Ar April 26 2016 - third check');
test(itsadate.parse("صباح 26 إبريل 2016").getMonth() == 3, 'Ar April 26 2016 - fourth check');
test(itsadate.parse("صباح 26 أفريل 2016").getDate() == 26, 'Ar April 26 2016 - fifth check');
test(itsadate.parse("صباح 26 أفريل 2016").getMonth() == 3, 'Ar April 26 2016 - sixth check');

test(itsadate.parse("صباح 26 مارس 2016").getDate() == 26, 'Ar March 26 2016 - first check');
test(itsadate.parse("صباح 26 مارس 2016").getMonth() == 2, 'Ar March 26 2016 - second check');

test(itsadate.parse("صباح 26 فبراير 2016").getDate() == 26, 'Ar February 26 2016 - first check');
test(itsadate.parse("صباح 26 فبراير 2016").getMonth() == 1, 'Ar February 26 2016 - second check');
test(itsadate.parse("صباح 26 فيفري 2016").getDate() == 26, 'Ar February 26 2016 - third check');
test(itsadate.parse("صباح 26 فيفري 2016").getMonth() == 1, 'Ar February 26 2016 - fourth check');

test(itsadate.parse("صباح 26 يناير 2016").getDate() == 26, 'Ar January 26 2016 - first check');
test(itsadate.parse("صباح 26 يناير 2016").getMonth() == 0, 'Ar January 26 2016 - second check');
test(itsadate.parse("صباح 26 جانفي 2016").getDate() == 26, 'Ar January 26 2016 - third check');
test(itsadate.parse("صباح 26 جانفي 2016").getMonth() == 0, 'Ar January 26 2016 - fourth check');


test(itsadate.parse("11/1/1990", {
    format_hits: [{
        day_before_month: false,
        desc: 'when true then its-a-date expects dd/mm/yyyy, otherwise mm/dd/yyyy'
    }]
}).getDate() == 1, 'alternative settings day')

// GMT Tests
itsadate.settings().restore();
var date = new Date();
var ilNow = itsadate.parse("now")
test(date.getHours() == ilNow.getHours(), 'auto gmt');

itsadate.settings({ gmt: -2.5 });
var gmt_minus_5_halfs = itsadate.parse("now")

itsadate.settings({ gmt: 1.5 });
var gmt_plus_3_halfs = itsadate.parse("now")

test(gmt_minus_5_halfs.getHours() == gmt_plus_3_halfs.getHours() - 4, 'gmt -2.5 & +1.5');

itsadate.settings({ 'gmt': 'auto' });
test(itsadate.parse("11:00 PM").getHours() == 23, 'am/pm 11 pm');
test(itsadate.parse("12:00 PM").getHours() == 12, 'am/pm 12 pm');

test(itsadate.parse("June 18, 2015").getDate() == 18, 'June 18, 2015');

itsadate.settings({ 'gmt': 3 });
itsadate.settings().restore();
var gmt = itsadate.settings('gmt');
test(gmt == 'auto', 'restore settings')

test(itsadate.parse('now').getHours() == (new Date()).getHours(), 'hours of now');


var undef = itsadate.parse('11/01/1990 12/01/1991');

// Bugs
itsadate.settings({'day_before_month': false});
test(itsadate.parse('02.05.2015, 12:13').getMonth()==1,'feb bug');

console.log('--------------------------------------------------------Finished testing--------------------------------------------------------');
console.log('-------------------------------------------------------Success count: ' + successCount + '-------------------------------------------------------');
console.log('----------------------------------------------------------Fail count: ' + failCount + '----------------------------------------------------------');





// Check that token is not twice?