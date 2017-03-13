const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

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