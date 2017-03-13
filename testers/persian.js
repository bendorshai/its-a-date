const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

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