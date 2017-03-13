const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

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