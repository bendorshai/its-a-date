const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

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