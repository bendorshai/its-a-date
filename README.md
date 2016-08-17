# its-a-date

Parses a given English date string, absolute or relative, to a Date object. 

## Installation

```
$ npm install its-a-date
```

## Code Example

```js
var itsadate = require('its-a-date');

// Wed Aug 17 2011 15:44:00 GMT+0300 (Jerusalem Daylight Time)
console.log(itsadate.parse("5 years ago at 15:44"))

// Wed Apr 11 1990 00:45:00 GMT+0300 (Jerusalem Daylight Time)
console.log(itsadate.parse("3 months after 11/01/1990"))
```

## Motivation

1. Allows a user to type a date more naturally in a web page or social media.
2. Allows crawlers to parse relative dates easily.

## Git

https://github.com/bendorshai/its-a-date

## Note

The pakage is still at very early stages and it is not complete.

