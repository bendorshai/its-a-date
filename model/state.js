var consts = require('./consts.js');
var _ = require('underscore');

// Init date organism
var date = [];

// Init the modification queue that logs the modification on each date part
var modificationQueues = [];
modificationQueues[consts.timeTypes.year] = [];
modificationQueues[consts.timeTypes.month] = [];
modificationQueues[consts.timeTypes.date] = [];
modificationQueues[consts.timeTypes.hour] = [];
modificationQueues[consts.timeTypes.minute] = [];


// Pushes a modification to acertain time type
// Example of use:
/*
  state.pushModification('year', 
        {
            affectType: 'absolute',
            value: 1993
        });
*/
exports.pushModification = function(timeType, modification)
{
    modificationQueues[timeType].push(modification);
}

exports.executeModifications = function()
{
}

// Not finished...
function sumModifications(modifications, )
{
    const absolute = 'absolute'; // yo!
    
    // Count the absolute affect types (allowed between 1-0)
    var affectTypes = _.pluck(modifications, 'affectType');
    var counts = _.countBy(affectTypes, function(type) {
        return type == absolute ? absolute : 'other';
    });
    
    var absoluteCount = counts[absolute];
    
    if (absoluteCount >= 2) {
        throw 'ERROR: Two absolute modifications are not allowed on the same date entity'
    }
    
    // If there is one absolute I want to calculate it first, so I sort by it
    if (absoluteCount == 1)
    {
        modifications = _.sortBy(modifications, function(type) {
           return type == absolute ? 0 : 1;
        });
        
        var absoluteModification = modifications[0];
        
        switch (absoluteModification.timeType)
        {
            case consts.timeTypes.year:
                date.setYear()
                break;
            case consts.timeTypes.month:
                break;
            case consts.timeTypes.date:
                break;
            case consts.timeTypes.hour:
                break;
            case consts.timeTypes.minute:
                break;
        } 
    }
}

// Return a vector with date parts in different array cells
function getDateParts(date) {
    
    var parts = [];
    
    parts[consts.timeTypes.year] = date.getFullYear();
    parts[consts.timeTypes.month] = date.getMonth();
    parts[consts.timeTypes.date] = date.getDate();
    parts[consts.timeTypes.hour] = date.getUTCHours();
    parts[consts.timeTypes.minute] = date.getMinutes();
    
    return parts;
}

   
    
    