const test = require('tape');
const itsadate = require('../index.js');
const parse = itsadate.parse;
const settings = itsadate.settings;

const common = require('./common.js');
var wrapper = common.wrapper;

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