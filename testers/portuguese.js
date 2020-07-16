const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

test('Portuguese dates tests', t => {
    t.equal(parse("janeiro").getMonth(), 0, 'Sp jan');
    t.equal(parse("fevereiro").getMonth(), 1, 'Sp feb');
    t.equal(parse("março").getMonth(), 2, 'Sp mar');
    t.equal(parse("abril").getMonth(), 3, 'Sp apr');
    t.equal(parse("maio").getMonth(), 4, 'Sp may');
    t.equal(parse("junho").getMonth(), 5, 'Sp jun');
    t.equal(parse("julho").getMonth(), 6, 'Sp jul');
    t.equal(parse("agosto").getMonth(), 7, 'Sp aug');
    t.equal(parse("setembro").getMonth(), 8, 'Sp sep');
    t.equal(parse("outubro").getMonth(), 9, 'Sp oct');
    t.equal(parse("novembro").getMonth(), 10, 'Sp nov');
    t.equal(parse("dezembro").getMonth(), 11, 'Sp dec');

    wrapper('Sp 10 hours ago', (t, m) => {
        t.equal(parse('há 10 horas').getHours(), m.add(-10, 'hour').hours());
        t.equal(parse('10 horas atrás').getHours(), m.add(-10, 'hour').hours());
    });

    wrapper('Sp An hour ago', (t, m) => {
        t.equal(parse('Há uma hora').getHours(), m.add(-1, 'hour').hours());
    });

    wrapper('Sp 10 minutes ago', (t, m) => {
        t.equal(parse('Há 10 minutos').getMinutes(), m.add(-10, 'minute').minute());
    });

    wrapper('Sp 4 days ago', (t, m) => {
        const fourDaysAgo = m.add(-4, 'day').toDate().getDate();
        t.equal(parse('Há 4 dias').getDate(), fourDaysAgo);
    });

    wrapper('Sp 1 week ago', (t, m) => {
        t.equal(parse("Há uma semana").getDate(), m.add(-7, 'd').date());
    });

    wrapper('Sp tomorrow at 15:15', (t, m) => {
        t.equal(parse('Amanhã às 15:15').getDate(), m.add(1, 'd').date());
    });

    wrapper('Sp yesterday', (t, m) => {
        const yesterDate = m.add(-1, 'day').toDate().getDate();
        t.equal(parse('Ontem às 23:20').getDate(), yesterDate, 'Sp yesterday at 23:20');
    });

    wrapper('Sp today at 06:14', (t, m) => {
        t.equal(parse('Hoje às 06:14').getHours(), 6);
    });

    // These tests are tricky and require manual check 
    parse('Domingo às 19:35');
    parse('Segunda às 19:35');
    parse('Terça às 19:35');
    parse('Quarta às 19:35');
    parse('Quinta às 19:35');
    parse('Sexta às 19:35');
    parse('Sábado às 19:35');

    t.end();
});