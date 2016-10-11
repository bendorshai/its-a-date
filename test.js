const test = require('tape');
const itsadate = require('./index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;
const moment = require('moment');

test('hours of now', t => {
	t.plan(1);
	t.equal(parse('now').getHours(), new Date().getHours());
});

test('English dates tests', t => {
	t.equal(parse("jan").getMonth(), 0, 'jan');
	t.equal(parse("feb").getMonth(), 1, 'feb');
	t.equal(parse("mar").getMonth(), 2, 'mar');
	t.equal(parse("apr").getMonth(), 3, 'apr');
	t.equal(parse("may").getMonth(), 4, 'may');
	t.equal(parse("jun").getMonth(), 5, 'jun');
	t.equal(parse("july").getMonth(), 6, 'july');
	t.equal(parse("aug").getMonth(), 7, 'aug');
	t.equal(parse("sep").getMonth(), 8, 'sep');
	t.equal(parse("oct").getMonth(), 9, 'oct');
	t.equal(parse("nov").getMonth(), 10, 'nov');
	t.equal(parse("dec").getMonth(), 11, 'dec');
	t.equal(parse("31 dec 1945").getDate(), 31, '31');
	t.equal(parse("31th dec 1945").getDate(), 31, '31th');
	t.equal(parse("31th dec 1945").getFullYear(), 1945, '1945');

	t.equal(parse("11/1/1990").getFullYear(), 1990, '1990');
	t.equal(parse("11/1/1990").getMonth(), 0, 'January');
	t.equal(parse("11/1/1990").getDate(), 11, '11');
	t.equal(parse("23-5-1983").getDate(), 23, '23');
	t.equal(parse('27-08-11 06:14').getFullYear(), 2011, '2011');
	t.equal(parse('27-08-17 06:14').getFullYear(), 1917, '1917');
	t.equal(parse('27-08-95 06:14').getFullYear(), 1995, '1995');

	t.equal(parse("1:00pm").getHours(), 13, '1:00pm');
	t.equal(parse("16:20").getHours(), 16, '16:00');
	t.equal(parse("16:20").getMinutes(), 20, '20 minutes');

	t.equal(parse("1:00pm").getHours(), 13, '1:00pm');
	t.equal(parse("16:20").getHours(), 16, '16:00');
	t.equal(parse("16:20").getMinutes(), 20, '20 minutes');

	wrapper('yesterDate', (t, m) => {
		const yesterDate = m.add(-1, 'day').toDate().getDate();
		t.equal(parse("yesterday").getDate(), yesterDate);
	});

	wrapper('3 mins', (t, m) => {
		t.equal(parse("3 mins").getMinutes(), m.add(-3, 'minute').minute());
	});

	wrapper('3 mins', (t, m) => {
		t.equal(parse("3 mins").getMinutes(), m.add(-3, 'minute').minute());
	});

	wrapper('3 hrs', (t, m) => {
		t.equal(parse("3 hrs").getHours(), m.add(-3, 'hour').hours());
	});

	wrapper('1 min', (t, m) => {
		t.equal(parse("1 min").getMinutes(), m.add(-1, 'minute').minute());
	});

	wrapper('3 hr', (t, m) => {
		t.equal(parse("1 hr").getHours(), m.add(-1, 'hours').hours());
	});

	wrapper('a hour ago', (t, m) => {
		t.equal(parse("a hour ago").getDate(), m.add(-1, 'hour').date());
	});

	wrapper('a week ago', (t, m) => {
		t.equal(parse("a week ago").getDate(), m.add(-7, 'd').date());
	});

	wrapper('2 weeks ago', (t, m) => {
		t.equal(parse("2 weeks ago").getDate(), m.add(-14, 'd').date());
	});

	wrapper('1 week ago', (t, m) => {
		t.equal(parse("1 week ago").getDate(), m.add(-7, 'd').date());
	});

	t.equal(parse("askdjasd"), undefined, 'undefined');
	t.equal(parse('1st of november 02/03/2000'), undefined, 'conflict');

	const now1 = parse("now");
	const now2 = new Date();

	t.equal(now1.getMinutes(), now2.getMinutes(), 'now minutes');
	t.equal(now1.getHours(), now2.getHours(), 'now hours');
	t.equal(now1.getDate(), now2.getDate(), 'now day');
	t.equal(now1.getMonth(), now2.getMonth(), 'now month');
	t.equal(now1.getFullYear(), now2.getFullYear(), 'now YEARRR');

	settings({ 'day_before_month': false });
	t.equal(parse("11/1/1990").getFullYear(), 1990, 'day_before_mont 1990');
	t.equal(parse("11/1/1990").getMonth(), 10, 'day_before_mont November');
	t.equal(parse("11/1/1990").getDate(), 1, 'day_before_mont 1st');

	settings().restore();
	t.equal(parse("11/1/1990").getFullYear(), 1990, 'setting restore 1990');
	t.equal(parse("11/1/1990").getMonth(), 0, 'setting restore January');
	t.equal(parse("11/1/1990").getDate(), 11, 'setting restore 11');

	t.equal(parse('now').getHours(), (new Date()).getHours(), 'hours of now');

	t.end();
});

test('Russian dates tests', t => {
	t.equal(parse("Янв").getMonth(), 0, 'Ru jan');
	t.equal(parse("Фев").getMonth(), 1, 'Ru feb');
	t.equal(parse("Мар").getMonth(), 2, 'Ru mar');
	t.equal(parse("Апр").getMonth(), 3, 'Ru apr');
	t.equal(parse("Май").getMonth(), 4, 'Ru may');
	t.equal(parse("Июн").getMonth(), 5, 'Ru jun');
	t.equal(parse("Июл").getMonth(), 6, 'Ru jul');
	t.equal(parse("Авг").getMonth(), 7, 'Ru aug');
	t.equal(parse("Сен").getMonth(), 8, 'Ru sep');
	t.equal(parse("Окт").getMonth(), 9, 'Ru oct');
	t.equal(parse("Ноя").getMonth(), 10, 'Ru nov');
	t.equal(parse("Дек").getMonth(), 11, 'Ru dec');

	wrapper('Ru yesterday', (t, m) => {
		const yesterDate = m.add(-1, 'day').toDate().getDate();
		t.equal(parse('вчера в 22:50').getDate(), yesterDate, 'Ru yesterday at 22:50');
		t.equal(parse('1 день назад').getDate(), yesterDate, 'Ru 1 day ago');
	});

	wrapper('Ru tomorrow at 18:58', (t, m) => {
		t.equal(parse('завтра в 18:58').getDate(), m.add(1, 'd').date());
	});

	wrapper('Ru 1 min ago', (t, m) => {
		t.equal(parse('1 МИНУТУ НАЗАД').getMinutes(), m.add(-1, 'minute').minute());
	});

	wrapper('Ru 25 mins ago', (t, m) => {
		t.equal(parse('25 минут назад').getMinutes(), m.add(-25, 'minute').minute());
	});

	wrapper('Ru 1 hour ago', (t, m) => {
		t.equal(parse('1 час назад').getHours(), m.add(-1, 'hours').hours());
	});

	wrapper('Ru 13 hours ago', (t, m) => {
		t.equal(parse('13 часов назад').getHours(), m.add(-13, 'hours').hours());
	});

	wrapper('Ru 23 hours ago', (t, m) => {
		t.equal(parse('23 часа назад').getHours(), m.add(-23, 'hours').hours());
	});

	wrapper('Ru 4 days ago', (t, m) => {
		const fourDaysAgo = m.add(-4, 'day').toDate().getDate();
		t.equal(parse('4 дня назад').getDate(), fourDaysAgo);
	});

	wrapper('Ru 5 days ago', (t, m) => {
		const fiveDaysAgo = m.add(-5, 'day').toDate().getDate();
		t.equal(parse('5 дней назад').getDate(), fiveDaysAgo);
	});

	t.equal(parse("Дек 19, 2015").getDate(), 19, 'Ru December 19 2016 - first check');
	t.equal(parse("Дек 19, 2015").getMonth(), 11, 'Ru December 19 2016 - second check');

	t.equal(parse("Ноя 30, 2015").getDate(), 30, 'Ru Novermber 30 2016 - first check');
	t.equal(parse("Ноя 30, 2015").getMonth(), 10, 'Ru Novermber 30 2016 - second check');

	t.equal(parse("Окт 30, 2015").getDate(), 30, 'Ru October 30 2016 - first check');
	t.equal(parse("Окт 30, 2015").getMonth(), 9, 'Ru October 30 2016 - second check');

	t.equal(parse("Сен 22, 2015").getDate(), 22, 'Ru September 22 2016 - first check');
	t.equal(parse("Сен 22, 2015").getMonth(), 8, 'Ru September 22 2016 - second check');

	t.equal(parse("Авг 13, 2016").getDate(), 13, 'Ru August 13 2016 - first check');
	t.equal(parse("Авг 13, 2016").getMonth(), 7, 'Ru August 13 2016 - second check');

	t.equal(parse("Июл 29, 2016").getDate(), 29, 'Ru July 29 2016 - first check');
	t.equal(parse("Июл 29, 2016").getMonth(), 6, 'Ru July 29 2016 - second check');

	t.equal(parse("Июн 28, 2016").getDate(), 28, 'Ru 28 June 2016 - first check');
	t.equal(parse("Июн 28, 2016").getMonth(), 5, 'Ru 28 June 2016 - second check');

	t.equal(parse("Май 25, 2016").getDate(), 25, 'Ru May 25 2016 - first check');
	t.equal(parse("Май 25, 2016").getMonth(), 4, 'Ru May 25 2016 - second check');

	t.equal(parse("Апр 28, 2016").getDate(), 28, 'Ru April 28 2016 - first check');
	t.equal(parse("Апр 28, 2016").getMonth(), 3, 'Ru April 28 2016 - second check');

	t.equal(parse("Мар 29, 2016").getDate(), 29, 'Ru March 29 2016 - first check');
	t.equal(parse("Мар 29, 2016").getMonth(), 2, 'Ru March 29 2016 - second check');

	t.equal(parse("Фев 26, 2016").getDate(), 26, 'Ru February 26 2016 - first check');
	t.equal(parse("Фев 26, 2016").getMonth(), 1, 'Ru February 26 2016 - second check');

	t.equal(parse("Янв 26, 2016").getDate(), 26, 'Ru January 26 2016 - first check');
	t.equal(parse("Янв 26, 2016").getMonth(), 0, 'Ru January 26 2016 - second check');

	t.end();
});

test('Arabic dates tests', t => {
	t.equal(parse("يناير").getMonth(), 0, 'Ar jan');
	t.equal(parse("فبراير").getMonth(), 1, 'Ar feb');
	t.equal(parse("مارس").getMonth(), 2, 'Ar mar');
	t.equal(parse("أبريل").getMonth(), 3, 'Ar apr');
	t.equal(parse("مايو").getMonth(), 4, 'Ar may');
	t.equal(parse("يونيو").getMonth(), 5, 'Ar jun');
	t.equal(parse("يوليو").getMonth(), 6, 'Ar jul');
	t.equal(parse("أغسطس").getMonth(), 7, 'Ar aug');
	t.equal(parse("سبتمبر").getMonth(), 8, 'Ar sep');
	t.equal(parse("أكتوبر").getMonth(), 9, 'Ar oct');
	t.equal(parse("نوفمبر").getMonth(), 10, 'Ar nov');
	t.equal(parse("ديسمبر").getMonth(), 11, 'Ar dec');

	wrapper('Ar 10 hours ago', (t, m) => {
		t.equal(parse('قبل 10 ساعات').getHours(), m.add(-10, 'hour').hours());
	});

	wrapper('Ar 12 hours ago', (t, m) => {
		t.equal(parse('قبل 12 ساعة').getHours(), m.add(-12, 'hour').hours());
	});

	wrapper('Ar 2 hours ago', (t, m) => {
		t.equal(parse('قبل ساعتين').getHours(), m.add(-2, 'hour').hours());
	});

	wrapper('Ar an hour ago', (t, m) => {
		t.equal(parse('قبل ساعة').getHours(), m.add(-1, 'hour').hours());
	});

	wrapper('Ar 1 hour ago', (t, m) => {
		t.equal(parse('قبل ساعة واحدة').getHours(), m.add(-1, 'hour').hours());
	});

	wrapper('Ar 53 minutes ago', (t, m) => {
		t.equal(parse('قبل 53 دقيقة').getMinutes(), m.add(-53, 'minute').minute());
	});

	wrapper('Ar 6 minutes ago', (t, m) => {
		t.equal(parse('قبل 6 دقائق').getMinutes(), m.add(-6, 'minute').minute());
	});

	wrapper('Ar 2 minutes ago', (t, m) => {
		t.equal(parse('قبل دقيقتين').getMinutes(), m.add(-2, 'minute').minute());
	});

	t.equal(parse("صباح 26 ديسمبر 2016").getDate(), 26, 'Ar December 26 2016 - first check');
	t.equal(parse("صباح 26 ديسمبر 2016").getMonth(), 11, 'Ar December 26 2016 - second check');
	t.equal(parse("صباح 26 دجمبر 2016").getDate(), 26, 'Ar December 26 2016 - third check');
	t.equal(parse("صباح 26 دجمبر 2016").getMonth(), 11, 'Ar December 26 2016 - fourth check');

	t.equal(parse("صباح 26 نوفمبر 2016").getDate(), 26, 'Ar November 26 2016 - first check');
	t.equal(parse("صباح 26 نوفمبر 2016").getMonth(), 10, 'Ar November 26 2016 - second check');
	t.equal(parse("صباح 26 نونبر 2016").getDate(), 26, 'Ar November 26 2016 - third check');
	t.equal(parse("صباح 26 نونبر 2016").getMonth(), 10, 'Ar November 26 2016 - fourth check');

	t.equal(parse("صباح 26 أكتوبر 2016").getDate(), 26, 'Ar October 26 2016 - first check');
	t.equal(parse("صباح 26 أكتوبر 2016").getMonth(), 9, 'Ar October 26 2016 - second check');

	t.equal(parse("صباح 26 سبتمبر 2016").getDate(), 26, 'Ar September 26 2016 - first check');
	t.equal(parse("صباح 26 سبتمبر 2016").getMonth(), 8, 'Ar September 26 2016 - second check');
	t.equal(parse("صباح 26 شتمبر 2016").getDate(), 26, 'Ar September 26 2016 - third check');
	t.equal(parse("صباح 26 شتمبر 2016").getMonth(), 8, 'Ar September 26 2016 - fourth check');

	t.equal(parse("صباح 26 أغسطس 2016").getDate(), 26, 'Ar August 26 2016 - first check');
	t.equal(parse("صباح 26 أغسطس 2016").getMonth(), 7, 'Ar August 26 2016 - second check');
	t.equal(parse("صباح 26 أوت 2016").getDate(), 26, 'Ar August 26 2016 - third check');
	t.equal(parse("صباح 26 أوت 2016").getMonth(), 7, 'Ar August 26 2016 - fourth check');
	t.equal(parse("صباح 26 غشت 2016").getDate(), 26, 'Ar August 26 2016 - fifth check');
	t.equal(parse("صباح 26 غشت 2016").getMonth(), 7, 'Ar August 26 2016 - sixth check');

	t.equal(parse("صباح 26 يوليو 2016").getDate(), 26, 'Ar July 26 2016 - first check');
	t.equal(parse("صباح 26 يوليو 2016").getMonth(), 6, 'Ar July 26 2016 - second check');
	t.equal(parse("صباح 26 يولية 2016").getDate(), 26, 'Ar July 26 2016 - third check');
	t.equal(parse("صباح 26 يولية 2016").getMonth(), 6, 'Ar July 26 2016 - fourth check');
	t.equal(parse("صباح 26 جويلية 2016").getDate(), 26, 'Ar July 26 2016 - fifth check');
	t.equal(parse("صباح 26 جويلية 2016").getMonth(), 6, 'Ar July 26 2016 - sixth check');
	t.equal(parse("صباح 26 يوليوز 2016").getDate(), 26, 'Ar July 26 2016 - seventh check');
	t.equal(parse("صباح 26 يوليوز 2016").getMonth(), 6, 'Ar July 26 2016 - eighth check');

	t.equal(parse("صباح اليوم 26 يونيو 2016").getDate(), 26, 'Ar June 26 2016 - first check');
	t.equal(parse("صباح اليوم 26 يونيو 2016").getMonth(), 5, 'Ar June 26 2016 - second check');
	t.equal(parse("صباح اليوم 26 يونية 2016").getDate(), 26, 'Ar June 26 2016 - third check');
	t.equal(parse("صباح اليوم 26 يونية 2016").getMonth(), 5, 'Ar June 26 2016 - fourth check');
	t.equal(parse("صباح اليوم 26 جوان 2016").getDate(), 26, 'Ar June 26 2016 - fifth check');
	t.equal(parse("صباح اليوم 26 جوان 2016").getMonth(), 5, 'Ar June 26 2016 - sixth check');

	t.equal(parse("صباح 26 مايو 2016").getDate(), 26, 'Ar May 26 2016 - first check');
	t.equal(parse("صباح 26 مايو 2016").getMonth(), 4, 'Ar May 26 2016 - second check');
	t.equal(parse("صباح 26 ماي 2016").getDate(), 26, 'Ar May 26 2016 - third check');
	t.equal(parse("صباح 26 ماي 2016").getMonth(), 4, 'Ar May 26 2016 - fourth check');

	t.equal(parse("صباح 26 أبريل 2016").getDate(), 26, 'Ar April 26 2016 - first check');
	t.equal(parse("صباح 26 أبريل 2016").getMonth(), 3, 'Ar April 26 2016 - second check');
	t.equal(parse("صباح 26 إبريل 2016").getDate(), 26, 'Ar April 26 2016 - third check');
	t.equal(parse("صباح 26 إبريل 2016").getMonth(), 3, 'Ar April 26 2016 - fourth check');
	t.equal(parse("صباح 26 أفريل 2016").getDate(), 26, 'Ar April 26 2016 - fifth check');
	t.equal(parse("صباح 26 أفريل 2016").getMonth(), 3, 'Ar April 26 2016 - sixth check');

	t.equal(parse("صباح 26 مارس 2016").getDate(), 26, 'Ar March 26 2016 - first check');
	t.equal(parse("صباح 26 مارس 2016").getMonth(), 2, 'Ar March 26 2016 - second check');

	t.equal(parse("صباح 26 فبراير 2016").getDate(), 26, 'Ar February 26 2016 - first check');
	t.equal(parse("صباح 26 فبراير 2016").getMonth(), 1, 'Ar February 26 2016 - second check');
	t.equal(parse("صباح 26 فيفري 2016").getDate(), 26, 'Ar February 26 2016 - third check');
	t.equal(parse("صباح 26 فيفري 2016").getMonth(), 1, 'Ar February 26 2016 - fourth check');

	t.equal(parse("صباح 26 يناير 2016").getDate(), 26, 'Ar January 26 2016 - first check');
	t.equal(parse("صباح 26 يناير 2016").getMonth(), 0, 'Ar January 26 2016 - second check');
	t.equal(parse("صباح 26 جانفي 2016").getDate(), 26, 'Ar January 26 2016 - third check');
	t.equal(parse("صباح 26 جانفي 2016").getMonth(), 0, 'Ar January 26 2016 - fourth check');

	t.end();
});

test('alternative settings day', t => {
	const actual = parse("11/1/1990", {'day_before_month': false}).getDate();
	t.equal(actual, 1);
	t.end();
});

test('GMT Tests', t => {
	var date = new Date();
	var ilNow = parse("now");
	t.equal(date.getHours(), ilNow.getHours(), 'auto gmt');

	settings({ gmt: -2.5 });
	const gmt_minus_5_halfs = parse("now");

	settings({ gmt: 1.5 });
	const gmt_plus_3_halfs = parse("now");

	t.equal(gmt_minus_5_halfs.getHours(), gmt_plus_3_halfs.getHours() - 4, 'gmt -2.5 & +1.5');

	settings({ 'gmt': 'auto' });
	t.equal(parse("11:00 PM").getHours(), 23, 'am/pm 11 pm');
	t.equal(parse("12:00 PM").getHours(), 12, 'am/pm 12 pm');

	t.equal(parse("June 18, 2015").getDate(), 18, 'June 18, 2015');

	settings({ 'gmt': 3 });
	settings().restore();

	t.end();
});

test('GMT restore settings', t => {
	var gmt = settings('gmt');
	t.equal(gmt, 'auto', 'restore settings');

	t.end();
});

test('hours of now', t => {
	t.equal(parse('now').getHours(), new Date().getHours());
	t.end();
});

test('Bugs', t => {
	settings({'day_before_month': false});
	test(parse('02.05.2015, 12:13').getMonth(), 1, 'feb bug');

	settings({'day_before_month': false});
	t.equal(parse('2015-11-2').getDate(), 2, 'day before month dd/mm/yyyy');

	settings().restore();
	//    /(?:^|\b)(\d{1,2}):(\d{1,2})(?::\d{1,2})?\s*(am|pm)?(?:$|\b)/
	t.equal(parse("16:29:15").getMinutes(), 29, ' minutes');
	t.equal(parse("16:29").getMinutes(), 29, ' minutes');

	settings({'day_before_month': false});
	t.equal(parse("2015.11.08 04:09:46").getDate(), 08, ' minutes');
	settings().restore();

	t.end();
});

test('Doron test', t => {
	t.equal(parse('2 days before 1 days after tomorrow').getDate(), parse('now').getDate());

	t.end();
});


test('auto hint switch', t=> {
	// Doesn't work according to day_before_month hint, but because it is not in strict mode, it will try the other way around
	t.equal(parse('2016-09-21').getDate(), 21);
	t.end();
});





// var undef = itsadate.parse('11/01/1990 12/01/1991');

function wrapper (description, fn) {
  test(description, t => {
    const m = setup();
    fn(t, m);
    t.end();
  });
}

function setup() {
	const now = new Date();
	const date = moment(now);

  	return date;
}