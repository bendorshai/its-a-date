var itsadate = require('./index.js');

// YOOO!
var yo = itsadate.parse("5 years ago at 15:44")
yo = itsadate.parse("3 months after 11/01/1990")

// Test function
function test(expected, name)
{
    if (!expected)
    {
        console.log('ERROR: in ' + name)
    }
    else
    {
        console.log('Green , . , . ')
    }
}

test(itsadate.parse("jan").getMonth() == 0,'jan');
test(itsadate.parse("feb").getMonth() == 1,'feb');
test(itsadate.parse("mar").getMonth() == 2,'mar');
test(itsadate.parse("apr").getMonth() == 3,'apr');
test(itsadate.parse("may").getMonth() == 4,'may');
test(itsadate.parse("jun").getMonth() == 5,'jun');
test(itsadate.parse("july").getMonth() == 6,'july');
test(itsadate.parse("aug").getMonth() == 7,'aug');
test(itsadate.parse("sep").getMonth() == 8,'sep');
test(itsadate.parse("oct").getMonth() == 9,'oct');
test(itsadate.parse("nov").getMonth() == 10,'nov');
test(itsadate.parse("dec").getMonth() == 11,'dec');
test(itsadate.parse("31 dec 1945").getDate() == 31,'31');
test(itsadate.parse("31th dec 1945").getDate() == 31,'31th');
test(itsadate.parse("31th dec 1945").getFullYear() == 1945,'1945');

test(itsadate.parse("11/1/1990").getFullYear() == 1990,'1990');
test(itsadate.parse("11/1/1990").getMonth() == 0,'January');
test(itsadate.parse("11/1/1990").getDate() == 11,'11');

test(itsadate.parse("16:20").getHours() == 16,'16:00');
test(itsadate.parse("16:20").getMinutes() == 20,'20 minutes');

