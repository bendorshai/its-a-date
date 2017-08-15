const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

test('French dates tests', t => {
    t.equal(parse("janv").getMonth(), 0, 'Fr jan');
    t.equal(parse("janvier").getMonth(), 0, 'Fr jan');
    t.equal(parse("févr").getMonth(), 1, 'Fr feb');
    t.equal(parse("février").getMonth(), 1, 'Fr feb');
    t.equal(parse("mars").getMonth(), 2, 'Fr mar');
    t.equal(parse("avril").getMonth(), 3, 'Fr apr');
    t.equal(parse("mai").getMonth(), 4, 'Fr may');
    t.equal(parse("juin").getMonth(), 5, 'Fr jun');
    t.equal(parse("juil").getMonth(), 6, 'Fr jul');
    t.equal(parse("juillet").getMonth(), 6, 'Fr jul');
    t.equal(parse("août").getMonth(), 7, 'Fr aug');
    t.equal(parse("sept").getMonth(), 8, 'Fr sep');
    t.equal(parse("septembre").getMonth(), 8, 'Fr sep');
    t.equal(parse("oct").getMonth(), 9, 'Fr oct');
    t.equal(parse("octobre").getMonth(), 9, 'Fr oct');
    t.equal(parse("nov").getMonth(), 10, 'Fr nov');
    t.equal(parse("novembre").getMonth(), 10, 'Fr nov');
    t.equal(parse("déc").getMonth(), 11, 'Fr dec');
    t.equal(parse("décembre").getMonth(), 11, 'Fr dec');

    wrapper('Fr tomorrow at 15:15', (t, m) => {
        t.equal(parse('Demain à 15h15').getDate(), m.add(1, 'd').date());
    });

    wrapper('Fr yesterday', (t, m) => {
        const yesterDate = m.add(-1, 'day').toDate().getDate();
        t.equal(parse('Hier à 15h15').getDate(), yesterDate, 'Fr yesterday at 15:15');
    });

    wrapper('Fr yesterday at 20:20', (t, m) => {
        t.equal(parse("Hier à 20:20").getHours(), 20, '20:20');
    });

    wrapper('Fr yesterday at 20:20', (t, m) => {
        t.equal(parse("Hier à 20:20").getMinutes(), 20, '20:20');
    });

    wrapper('Fr yesterday at 15:15', (t, m) => {
        t.equal(parse("15h15").getHours(), 15, '15:00pm');
    });

    wrapper('Fr yesterday at 15:15', (t, m) => {
        t.equal(parse("15h17").getMinutes(), 17, '15:17');
    });

    wrapper('Fr today at 3 AM', (t, m) => {
        t.equal(parse('Aujourd\'hui à 3 heures du matin').getHours(), 3);
    });

    wrapper('Fr today at 3 PM', (t, m) => {
        t.equal(parse('Aujourd\'hui à 15 heures').getHours(), 15);
    });

    wrapper('Fr 10 hours ago', (t, m) => {
        t.equal(parse('il y a 10 heures').getHours(), m.add(-10, 'hour').hours());
    });

    wrapper('Fr An hour ago', (t, m) => {
        t.equal(parse('Il y a une heure').getHours(), m.add(-1, 'hour').hours());
    });

    wrapper('Fr 10 minutes ago', (t, m) => {
        t.equal(parse('il y a 10 minutes').getMinutes(), m.add(-10, 'minute').minute());
    });

    wrapper('Fr 4 days ago', (t, m) => {
        const fourDaysAgo = m.add(-4, 'day').toDate().getDate();
        t.equal(parse('il y a 4 jours').getDate(), fourDaysAgo);
    });

    wrapper('Fr a week ago', (t, m) => {
        t.equal(parse("il y a une semaine").getDate(), m.add(-7, 'd').date());
    });

    // These tests are tricky and require manual check 
    parse('Dimanche dernier 3:15');
    parse('Lundi dernier 3:15');
    parse('Mardi dernier 3:15');
    parse('Mercredi dernier 3:15');
    parse('Jeudi dernier 3:15');
    parse('Vendredi dernier 3:15');
    parse('Samedi dernier, 3:15');

    t.end();
});