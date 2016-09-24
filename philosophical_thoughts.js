// Note: this file is for inner discussion of wierd/rare bugs

var moment = require('moment')

// -------- The date & month problem --------

// When trying to set invalid month, a different month is set
var d = new Date(1990, 1-1, 31)
d.setMonth(2-1);
var k = d.getDate()

// When trying to set invalid date, nothing happens
var d = new Date(2015, 2-1, 28)
d.setDate(29);
var k = d.getMonth()

// When trying to set invalid month, day is altered, month is correct
console.log(moment(new Date(1990, 1-1, 31)).month(2-1).date());

// When trying to set invalid day, month is altered (day becomes delta)
console.log(moment(new Date(2015, 2-1, 28)).date(29).month());

// Conclusion, if i change from big to little things should work fine