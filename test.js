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
	t.equal(parse('27-08-17 06:14').getFullYear(), 2017, '2017');
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

	// These tests are tricky and require manual check 
	parse('this tuesday');
	parse('Last friday');
	parse('Next sunday');

	wrapper('Last year', (t, m) => {
		t.equal(parse("Last year").getFullYear(), m.add(-1, 'year').year());
	});
	wrapper('Last month', (t, m) => {
		t.equal(parse("Last month").getMonth(), m.add(-1, 'month').month());
	});
	wrapper('Last week', (t, m) => {
		t.equal(parse("Last week").getDate(), m.add(-7, 'd').date());
	});
	wrapper('Last day', (t, m) => {
		t.equal(parse("Last day").getDate(), m.add(-1, 'd').date());
	});
	wrapper('Last hour', (t, m) => {
		t.equal(parse("Last hour").getHours(), m.add(-1, 'hour').hours());
	});
	wrapper('Last minute', (t, m) => {
		t.equal(parse("Last minute").getMinutes(), m.add(-1, 'minute').minute());
	});

	wrapper('Next year', (t, m) => {
		t.equal(parse("Next year").getFullYear(), m.add(1, 'year').year());
	});
	wrapper('Next month', (t, m) => {
		t.equal(parse("Next month").getMonth(), m.add(1, 'month').month());
	});
	wrapper('Next week', (t, m) => {
		t.equal(parse("Next week").getDate(), m.add(7, 'd').date());
	});
	wrapper('Next day', (t, m) => {
		t.equal(parse("Next day").getDate(), m.add(1, 'd').date());
	});
	wrapper('Next hour', (t, m) => {
		t.equal(parse("Next hour").getHours(), m.add(1, 'hour').hours());
	});
	wrapper('Next minute', (t, m) => {
		t.equal(parse("Next minute").getMinutes(), m.add(1, 'minute').minute());
	});

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

	t.equal(parse('2 day before 11/1/1990').getDate(), 9, '2 days before a 11/1/1990');
	t.equal(parse('2 months before 11/1/1990').getMonth(), 10, '2 month before 11/1/1990');
	t.equal(parse('2 years before 11/1/1990').getFullYear(), 1988, '2 year before 11/1/1990');

	t.equal(parse('1/1/1990 at midnight').getHours(), 0, 'Midnight');

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

	wrapper('Ru 43 mins ago', (t, m) => {
		t.equal(parse('43 мин. назад').getMinutes(), m.add(-43, 'minute').minute());
	});

	wrapper('Ru today at 10:07', (t, m) => {
		t.equal(parse('Сегодня, в 10:07').getHours(), 10);
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

	wrapper('Ru a week ago', (t, m) => {
		const sevenDaysAgo = m.add(-7, 'day').toDate().getDate();
		t.equal(parse('1 неделю назад').getDate(), sevenDaysAgo);
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

	// These tests are tricky and require manual check 
	parse('Воскресенье в 18:37');
	parse('Понедельник в 18:37');
	parse('Вторник в 18:37');
	parse('Среда в 18:37');
	parse('Четверг в 18:37');
	parse('Пятница в 18:37');
	parse('Суббота в 18:37');

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

	wrapper('Ar a week ago', (t, m) => {
		const sevenDaysAgo = m.add(-7, 'day').toDate().getDate();
		t.equal(parse('قبل أسبوع').getDate(), sevenDaysAgo);
	});

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

	// These tests are tricky and require manual check 
	parse('يوم الأحد في 13:15');
	parse('يوم الاثنين عند الساعة 13:15');
	parse('يوم الثلاثاء في 13:15');
	parse('يوم الأربعاء في الساعة 13:15');
	parse('يوم الخميس في الساعة 13:15');
	parse('يوم الجمعة في الساعة 13:15');
	parse('يوم السبت في الساعة 13:15');

	t.end();
});

test('Turkish dates tests', t => {
	t.equal(parse("Ocak").getMonth(), 0, 'Tr jan');
	t.equal(parse("Şubat").getMonth(), 1, 'Tr feb');
	t.equal(parse("Mart").getMonth(), 2, 'Tr mar');
	t.equal(parse("Nisan").getMonth(), 3, 'Tr apr');
	t.equal(parse("Mayıs").getMonth(), 4, 'Tr may');
	t.equal(parse("Haziran").getMonth(), 5, 'Tr jun');
	t.equal(parse("Temmuz").getMonth(), 6, 'Tr jul');
	t.equal(parse("Ağustos").getMonth(), 7, 'Tr aug');
	t.equal(parse("Eylül").getMonth(), 8, 'Tr sep');
	t.equal(parse("Ekim").getMonth(), 9, 'Tr oct');
	t.equal(parse("Kasım").getMonth(), 10, 'Tr nov');
	t.equal(parse("Aralık").getMonth(), 11, 'Tr dec');

	wrapper('Tr 10 hours ago', (t, m) => {
		t.equal(parse('10 saat önce').getHours(), m.add(-10, 'hour').hours());
	});

	wrapper('Tr An hour ago', (t, m) => {
		t.equal(parse('Bir saat önce').getHours(), m.add(-1, 'hour').hours());
	});

	wrapper('Tr 10 minutes ago', (t, m) => {
		t.equal(parse('10 dakika önce').getMinutes(), m.add(-10, 'minute').minute());
	});

	wrapper('Tr 4 days ago', (t, m) => {
		const fourDaysAgo = m.add(-4, 'day').toDate().getDate();
		t.equal(parse('4 gün önce').getDate(), fourDaysAgo);
	});

	wrapper('Tr 1 week ago', (t, m) => {
		t.equal(parse("1 Hafta önce").getDate(), m.add(-7, 'd').date());
	});

	wrapper('Tr tomorrow at 15:15', (t, m) => {
		t.equal(parse('Yarın sabah 15:15\'te').getDate(), m.add(1, 'd').date());
	});

	wrapper('Tr yesterday', (t, m) => {
		const yesterDate = m.add(-1, 'day').toDate().getDate();
		t.equal(parse('Dün saat 5:18 PM').getDate(), yesterDate, 'Tr yesterday at 17:18');
	});

	wrapper('Tr today at 9:32', (t, m) => {
		t.equal(parse('Bugün saat 9:32 AM').getHours(), 9);
	});

	t.end();
});

test('Spanish dates tests', t => {
	t.equal(parse("enero").getMonth(), 0, 'Sp jan');
	t.equal(parse("febrero").getMonth(), 1, 'Sp feb');
	t.equal(parse("marzo").getMonth(), 2, 'Sp mar');
	t.equal(parse("abril").getMonth(), 3, 'Sp apr');
	t.equal(parse("mayo").getMonth(), 4, 'Sp may');
	t.equal(parse("junio").getMonth(), 5, 'Sp jun');
	t.equal(parse("julio").getMonth(), 6, 'Sp jul');
	t.equal(parse("agosto").getMonth(), 7, 'Sp aug');
	t.equal(parse("septiembre").getMonth(), 8, 'Sp sep');
	t.equal(parse("octubre").getMonth(), 9, 'Sp oct');
	t.equal(parse("noviembre").getMonth(), 10, 'Sp nov');
	t.equal(parse("diciembre").getMonth(), 11, 'Sp dec');

	wrapper('Sp 10 hours ago', (t, m) => {
		t.equal(parse('hace 10 horas').getHours(), m.add(-10, 'hour').hours());
	});

	wrapper('Sp An hour ago', (t, m) => {
		t.equal(parse('Hace una hora').getHours(), m.add(-1, 'hour').hours());
	});

	wrapper('Sp 10 minutes ago', (t, m) => {
		t.equal(parse('Hace 10 minutos').getMinutes(), m.add(-10, 'minute').minute());
	});

	wrapper('Sp 4 days ago', (t, m) => {
		const fourDaysAgo = m.add(-4, 'day').toDate().getDate();
		t.equal(parse('Hace 4 días').getDate(), fourDaysAgo);
	});

	wrapper('Sp 1 week ago', (t, m) => {
		t.equal(parse("Hace una semana").getDate(), m.add(-7, 'd').date());
	});

	wrapper('Sp tomorrow at 15:15', (t, m) => {
		t.equal(parse('Mañana a las 15:15').getDate(), m.add(1, 'd').date());
	});

	wrapper('Sp yesterday', (t, m) => {
		const yesterDate = m.add(-1, 'day').toDate().getDate();
		t.equal(parse('Ayer a las 23:20').getDate(), yesterDate, 'Sp yesterday at 23:20');
	});

	wrapper('Sp today at 06:14', (t, m) => {
		t.equal(parse('Hoy a las 06:14').getHours(), 6);
	});

	// These tests are tricky and require manual check 
	parse('Domingo a las 19:35');
	parse('Lunes a las 19:35');
	parse('Martes a las 19:35');
	parse('Miércoles a las 19:35');
	parse('Jueves a las 19:35');
	parse('Viernes a las 19:35');
	parse('Sábado a las 19:35');

	t.end();
});

test('Greek dates tests', t => {
	t.equal(parse("ΙΑΝΟΥΑΡΙΟΣ").getMonth(), 0, 'Gr jan');
	t.equal(parse("Φεβρουάριος").getMonth(), 1, 'Gr feb');
	t.equal(parse("Μάρτιος").getMonth(), 2, 'Gr mar');
	t.equal(parse("Απρίλης").getMonth(), 3, 'Gr apr');
	t.equal(parse("Μάι").getMonth(), 4, 'Gr may');
	t.equal(parse("Ιούν").getMonth(), 5, 'Gr jun');
	t.equal(parse("Ιούλ").getMonth(), 6, 'Gr jul');
	t.equal(parse("Αύγουστος").getMonth(), 7, 'Gr aug');
	t.equal(parse("Σεπτέμβριος").getMonth(), 8, 'Gr sep');
	t.equal(parse("Οκτώβριος").getMonth(), 9, 'Gr oct');
	t.equal(parse("Νοέμβριος").getMonth(), 10, 'Gr nov');
	t.equal(parse("Δεκέμβριος").getMonth(), 11, 'Gr dec');

	wrapper('Gr 6 hours ago', (t, m) => {
		t.equal(parse('6 ώρες πριν').getHours(), m.add(-6, 'hour').hours());
	});
	wrapper('Gr 6 hours ago', (t, m) => {
		t.equal(parse('Πριν από 6 ώρες').getHours(), m.add(-6, 'hour').hours());
	});
	wrapper('Gr 6 hours ago', (t, m) => {
		t.equal(parse('Πριν 6 ώρες').getHours(), m.add(-6, 'hour').hours());
	});
	wrapper('Gr 6 hours ago', (t, m) => {
		t.equal(parse('6 ώρες πριν').getHours(), m.add(-6, 'hour').hours());
	});
	wrapper('Gr An hour ago', (t, m) => {
		t.equal(parse('πριν από μία ώρα').getHours(), m.add(-1, 'hour').hours());
	});
	wrapper('Gr 1 hour ago', (t, m) => {
		t.equal(parse('Πριν από 1 ώρα').getHours(), m.add(-1, 'hour').hours());
	});
	wrapper('Gr 4 minutes ago', (t, m) => {
		t.equal(parse('Πριν από 4 λεπτά').getMinutes(), m.add(-4, 'minute').minute());
	});
	wrapper('Gr 2 minutes ago', (t, m) => {
		t.equal(parse('Πριν από 2 λεπτά').getMinutes(), m.add(-2, 'minute').minute());
	});
	wrapper('Gr 1 minute ago', (t, m) => {
		t.equal(parse('1 λεπτό πριν').getMinutes(), m.add(-1, 'minute').minute());
	});
	wrapper('Gr a minute ago', (t, m) => {
		t.equal(parse('πριν από ένα λεπτό').getMinutes(), m.add(-1, 'minute').minute());
	});
	wrapper('Gr 4 days ago', (t, m) => {
		const fourDaysAgo = m.add(-4, 'day').toDate().getDate();
		t.equal(parse('Πριν από 4 ημέρες').getDate(), fourDaysAgo);
	});
	wrapper('Gr 2 days ago', (t, m) => {
		const twoDaysAgo = m.add(-2, 'day').toDate().getDate();
		t.equal(parse('2 ημέρες πριν').getDate(), twoDaysAgo);
	});
	wrapper('Gr 1 day ago', (t, m) => {
		const oneDayAgo = m.add(-1, 'day').toDate().getDate();
		t.equal(parse('Πριν από 1 ημέρα').getDate(), oneDayAgo);
	});
	wrapper('Gr 4 weeks ago', (t, m) => {
		t.equal(parse("Πριν από 4 εβδομάδες").getDate(), m.add(-28, 'd').date());
	});
	wrapper('Gr 2 weeks ago', (t, m) => {
		t.equal(parse("πριν 2 εβδομάδες").getDate(), m.add(-14, 'd').date());
	});
	wrapper('Gr 1 week ago', (t, m) => {
		t.equal(parse("Πριν από 1 εβδομάδα").getDate(), m.add(-7, 'd').date());
	});
	wrapper('Gr a week ago', (t, m) => {
		t.equal(parse("πριν από μία εβδομάδα").getDate(), m.add(-7, 'd').date());
	});
	wrapper('Gr tomorrow at 09:09 AM', (t, m) => {
		t.equal(parse('αύριο στις 09:09 π.μ.').getDate(), m.add(1, 'd').date());
	});

	wrapper('Gr Yesterday at 12:33 PM', (t, m) => {
		const yesterDate = m.add(-1, 'day').toDate().getDate();
		t.equal(parse('Εχθές at 12:33 μμ').getDate(), yesterDate, 'Gr Yesterday at 12:33 PM');
	});
	wrapper('Gr today at 9:15 AM', (t, m) => {
		t.equal(parse('σήμερα στις 9.15 π.μ.').getHours(), 9);
	});
	wrapper('Gr today at 9:15 PM', (t, m) => {
		t.equal(parse('σήμερα στις 9.15 μ.μ.').getHours(), 21);
	});

	// These tests are tricky and require manual check 
	parse('την περασμένη Κυριακή στις 15:15');
	parse('την περασμένη Δευτέρα στις 15:15');
	parse('την περασμένη Τρίτη στις 15:15');
	parse('την περασμένη Τετάρτη στις 15:15');
	parse('την περασμένη Πέμπτη στις 15:15');
	parse('την περασμένη Παρασκευή στις 15:15');
	parse('το περασμένο Σάββατο στις 15:15');

	t.end();
});

test('Persian dates tests', t => {
	t.equal(parse("ژانوِیه").getMonth(), 0, 'Pr jan');
	t.equal(parse("فِورِیه").getMonth(), 1, 'Pr feb');
	t.equal(parse("مارس").getMonth(), 2, 'Pr mar');
	t.equal(parse("آوریل").getMonth(), 3, 'Pr apr');
	t.equal(parse("مايو").getMonth(), 4, 'Pr may');
	t.equal(parse("يونيو").getMonth(), 5, 'Pr jun');
	t.equal(parse("يوليو").getMonth(), 6, 'Pr jul');
	t.equal(parse("أغسطس").getMonth(), 7, 'Pr aug');
	t.equal(parse("سبتمبر").getMonth(), 8, 'Pr sep');
	t.equal(parse("أكتوبر").getMonth(), 9, 'Pr oct');
	t.equal(parse("نوفمبر").getMonth(), 10, 'Pr nov');
	t.equal(parse("ديسمبر").getMonth(), 11, 'Pr dec');

	wrapper('Ar a week ago', (t, m) => {
		const sevenDaysAgo = m.add(-7, 'day').toDate().getDate();
		t.equal(parse('یک هفته قبل').getDate(), sevenDaysAgo);
	});
	wrapper('Pr 2 weeks ago', (t, m) => {
		const fourteenDaysAgo = m.add(-14, 'day').toDate().getDate();
		t.equal(parse('2 هفته قبل').getDate(), fourteenDaysAgo);
		t.equal(parse('2 هفته پیش').getDate(), fourteenDaysAgo);
	});

	wrapper('Pr 2 days ago', (t, m) => {
		const twoDaysAgo = m.add(-2, 'day').toDate().getDate();
		t.equal(parse('2 روز قبل').getDate(), twoDaysAgo);
	});

	wrapper('Pr 1 day ago', (t, m) => {
		const oneDayAgo = m.add(-1, 'day').toDate().getDate();
		t.equal(parse('یک روز پیش').getDate(), oneDayAgo);
	});

	wrapper('Pr 10 hours ago', (t, m) => {
		const tenHoursAgo = m.add(-10, 'hour').hours();
		t.equal(parse('10 ساعت پیش').getHours(), tenHoursAgo);
		t.equal(parse('10 ساعت قبل').getHours(), tenHoursAgo);
	});

	wrapper('Pr an hour ago', (t, m) => {
		t.equal(parse('یک ساعت پیش').getHours(), m.add(-1, 'hour').hours());
	});

	wrapper('Pr a minute ago', (t, m) => {
		t.equal(parse('یک دقیقه پیش').getMinutes(), m.add(-1, 'minute').minute());
	});

	wrapper('Pr 2 minutes ago', (t, m) => {
		t.equal(parse('2 دقیقه پیش').getMinutes(), m.add(-2, 'minute').minute());
	});

	t.equal(parse("2016 دسامبر 26").getDate(), 26, 'Pr December 26 2016 - first check');
	t.equal(parse("2016 دسامبر 26").getMonth(), 11, 'Pr December 26 2016 - second check');
	t.equal(parse("2016 دِسامبر 26").getDate(), 26, 'Pr December 26 2016 - third check');
	t.equal(parse("2016 دِسامبر 26").getMonth(), 11, 'Pr December 26 2016 - fourth check');

	t.equal(parse("2016 نوامبر 26").getDate(), 26, 'Pr November 26 2016 - first check');
	t.equal(parse("2016 نوامبر 26").getMonth(), 10, 'Pr November 26 2016 - second check');
	t.equal(parse("2016 نُوامبر 26").getDate(), 26, 'Pr November 26 2016 - third check');
	t.equal(parse("2016 نُوامبر 26").getMonth(), 10, 'Pr November 26 2016 - fourth check');

	t.equal(parse("2016 اکتبر 26").getDate(), 26, 'Pr October 26 2016 - first check');
	t.equal(parse("2016 اکتبر 26").getMonth(), 9, 'Pr October 26 2016 - second check');
	t.equal(parse("2016 اُکتُبر 26").getDate(), 26, 'Pr October 26 2016 - third check');
	t.equal(parse("2016 اُکتُبر 26").getMonth(), 9, 'Pr October 26 2016 - fourth check');

	t.equal(parse("2016 سپتامبر 26").getDate(), 26, 'Pr September 26 2016 - first check');
	t.equal(parse("2016 سپتامبر 26").getMonth(), 8, 'Pr September 26 2016 - second check');
	t.equal(parse("2016 سِپتامبر 26").getDate(), 26, 'Pr September 26 2016 - third check');
	t.equal(parse("2016 سِپتامبر 26").getMonth(), 8, 'Pr September 26 2016 - fourth check');
	t.equal(parse("2016 سپتام 26").getDate(), 26, 'Pr September 26 2016 - fifth check');
	t.equal(parse("2016 سپتام 26").getMonth(), 8, 'Pr September 26 2016 - sixth check');

	t.equal(parse("2016 اوت 26").getDate(), 26, 'Pr August 26 2016 - first check');
	t.equal(parse("2016 اوت 26").getMonth(), 7, 'Pr August 26 2016 - second check');

	t.equal(parse("2016 ژوئیه 26").getDate(), 26, 'Pr July 26 2016 - first check');
	t.equal(parse("2016 ژوئیه 26").getMonth(), 6, 'Pr July 26 2016 - second check');

	t.equal(parse("2016 ژوئن 26").getDate(), 26, 'Pr June 26 2016 - first check');
	t.equal(parse("2016 ژوئن 26").getMonth(), 5, 'Pr June 26 2016 - second check');

	t.equal(parse("مه 26 2016").getDate(), 26, 'Pr May 26 2016 - first check');
	t.equal(parse("مه 26 2016").getMonth(), 4, 'Pr May 26 2016 - second check');

	t.equal(parse("2016 آوریل 26").getDate(), 26, 'Pr April 26 2016 - first check');
	t.equal(parse("2016 آوریل 26").getMonth(), 3, 'Pr April 26 2016 - second check');

	t.equal(parse("2016 مارس 26").getDate(), 26, 'Pr March 26 2016 - first check');
	t.equal(parse("2016 مارس 26").getMonth(), 2, 'Pr March 26 2016 - second check');

	t.equal(parse("2016 فوریه 26").getDate(), 26, 'Pr February 26 2016 - first check');
	t.equal(parse("2016 فوریه 26").getMonth(), 1, 'Pr February 26 2016 - second check');
	t.equal(parse("2016 فِورِیه 26").getDate(), 26, 'Pr February 26 2016 - third check');
	t.equal(parse("2016 فِورِیه 26").getMonth(), 1, 'Pr February 26 2016 - fourth check');

	t.equal(parse("2016 ژانوِیه 26").getDate(), 26, 'Pr January 26 2016 - first check');
	t.equal(parse("2016 ژانوِیه 26").getMonth(), 0, 'Pr January 26 2016 - second check');
	t.equal(parse("2016 ژانویه 26").getDate(), 26, 'Pr January 26 2016 - third check');
	t.equal(parse("2016 ژانویه 26").getMonth(), 0, 'Pr January 26 2016 - fourth check');

	// These tests are tricky and require manual check 
	parse('آخرین یکشنبه در 15:15');
	parse('آخرین دوشنبه در 15:15');
	parse('سه شنبه گذشته در 15:15');
	parse('چهارشنبه گذشته در 15:15');
	parse('آخرین پنجشنبه ساعت 15:15');
	parse('جمعه گذشته در 15:15');
	parse('آخرین شنبه در 15:15');

	t.end();
});


test('alternative settings day', t => {
	const actual = parse("11/1/1990", { 'day_before_month': false }).getDate();
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
	settings({ 'day_before_month': false });
	test(parse('02.05.2015, 12:13').getMonth(), 1, 'feb bug');

	settings({ 'day_before_month': false });
	t.equal(parse('2015-11-2').getDate(), 2, 'day before month dd/mm/yyyy');

	settings().restore();
	//    /(?:^|\b)(\d{1,2}):(\d{1,2})(?::\d{1,2})?\s*(am|pm)?(?:$|\b)/
	t.equal(parse("16:29:15").getMinutes(), 29, ' minutes');
	t.equal(parse("16:29").getMinutes(), 29, ' minutes');

	settings({ 'day_before_month': false });
	t.equal(parse("2015.11.08 04:09:46").getDate(), 08, ' minutes');
	settings().restore();

	t.end();
});

test('Doron test', t => {
	t.equal(parse('2 days before 1 days after tomorrow').getDate(), parse('now').getDate());

	t.end();
});


test('auto hint switch', t => {
	// Doesn't work according to day_before_month hint, but because it is not in strict mode, it will try the other way around
	t.equal(parse('2016-09-21').getDate(), 21);
	t.end();
});

// var undef = itsadate.parse('11/01/1990 12/01/1991');

function wrapper(description, fn) {
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