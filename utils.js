exports.calculateGMT = function(date, gmt) {
    
    var MILISECONDS_IN_1_MIN = 60 * 1000;
    var MILISECONDS_IN_1_HOUR = 60 * 60 * 1000;
    
    // convert to msec
    // add local time zone offset 
    // get UTC time in msec
    var utc = date.getTime() + (date.getTimezoneOffset() * MILISECONDS_IN_1_MIN);
    
    // create new Date object for different city
    // using supplied offset
    date = new Date(utc + (MILISECONDS_IN_1_HOUR * gmt));
    
    return date;
}


   
