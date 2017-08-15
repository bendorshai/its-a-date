![alt tag](https://github.com/bendorshai/its-a-date/blob/master/logo.png?raw=true)

When given a Date description, it returns a Date object.
No need to know exact date format.

Currently supporting languages:
* English
* Russian
* Arabic 
* Persian
* Turkish
* Greek
* Spanish
* French

## Installation

```
$ npm install its-a-date --save
```
## Code Example

```js
var itsadate = require('its-a-date');

// Mon May 02 2016 05:48:00 GMT+0300 (Jerusalem Daylight Time)`
itsadate.parse("May 2 05:48:29 2016");

// Wed Apr 11 1990 00:45:00 GMT+0300 (Jerusalem Daylight Time)
itsadate.parse("3 months after 11/01/1990");

// Sat Aug 26 1989 02:43:00 GMT+0300 (Jerusalem Daylight Time)
itsadate.parse("10000 days before 11/01/2017")
```
## More Code Examples

### Parse Hour & Date

```js
// Fri Aug 19 2016 11:47:00 GMT+0300 (Jerusalem Daylight Time) 
itsadate.parse("11:47");

// Tue Mar 27 2012 14:05:00 GMT+0200 (Jerusalem Standard Time)
itsadate.parse("27.3.2012");

// Tue Mar 27 2012 12:00:00 GMT+0200 (Jerusalem Standard Time)
itsadate.parse("27/3/2012 12:00");
```

### Parse Relatives 

```js
// Thu Aug 18 2016 14:05:00 GMT+0300 (Jerusalem Daylight Time)
itsadate.parse("yesterday");

// Thu Aug 18 2016 16:20:00 GMT+0300 (Jerusalem Daylight Time)
itsadate.parse("yesterday at 16:20");

//Fri Aug 19 2011 14:05:00 GMT+0300 (Jerusalem Daylight Time)
itsadate.parse("5 years ago");

// Fri Aug 19 2011 15:44:00 GMT+0300 (Jerusalem Daylight Time)
itsadate.parse("5 years ago at 15:44");
```
### Parse the Extreme (Not Recommended) 

When its-a-date doesn't know what date it is, it will return undefined. 
However many times it surprises.

```js
// Sun Jan 01 1984 14:05:00 GMT+0200 (Jerusalem Standard Time)
itsadate.parse('it was on the 1st of January, ' +
                    'the dark cold winter of 1984');

// undefined
itsadate.parse("pikachu");
```
### Settings, Formats & Time Differences

Use settings to alter the format expected

```js
// Hint its-a-date to prefer mm/dd/yyyy over dd/mm/yyyy
itsadate.settings({'day_before_month':false});

// Thu Nov 01 1990 01:55:00 GMT+0200 (Jerusalem Standard Time)
itsadate.parse("11/1/1990");
```

```js
// Don't allow its-a-date to guess any other format than specified (day MUST be before month or vise-versa)
itsadate.settings({'strict':true});
```

You can prevent changing the settings globaly, by delivering it as a second parameter

```js
// November 3rd 2014
itsadate.parse("11-3-2014",{'day_before_month':false});

// Doesn't use prev settings March 11th 2014 
itsadate.parse("11-3-2014");
```

Restore settings to default

```js
// Restore setting back to default (day_before_month=true)
itsadate.settings().restore();

// Thu Jan 11 1990 01:55:00 GMT+0200 (Jerusalem Standard Time)
itsadate.parse("11/1/1990");
```

Alter GMT to overcome time difference
```js
// Set GMT+5.5, Mumbai India
itsadate.settings({gmt: 5.5});
itsadate.parse("now");
```

### Learn More

Hit brag() to console out examples of any token implemented

```js
itsadate.brag();
```

Hit settings() to get settings object with configutations you can alter. descriptions included.

```js
itsadate.settings();
```

### No Exceptions

When date description has inner conflicts it resolves to undefined

```js
// undefined
itsadate.parse('1st of november 02/03/2000')
```

## Motivation

1. Allows a user to type a date more naturally in a web page or social media.
2. Allows crawlers to parse relative dates easily.

## Strategy (How it works?)

A micro-compiler is implemented. It parses date part tokens &
interpret them as modifications on the perceived date.

## Upcoming Features
1. Custom token insertion
2. More Languages perhaps

## Git

https://github.com/bendorshai/its-a-date

## How it works?

Read the [post](http://edge64.net/?p=21) I wrote about this project
