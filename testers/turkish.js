const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

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

    // These tests are tricky and require manual check 
    parse('15:15 de son pazar');
    parse('Pazartesi günü saat 15.15\'te');
    parse('Geçen salı, 15: 15\'te');
    parse('Son çarşamba, saat 15.15\'te');
    parse('Son perşembe günü saat 15.15\'te');
    parse('Son cuma akşam 15: 15\'te');
    parse('Son cumartesi 15: 15\'te');

    t.end();
});