const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

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