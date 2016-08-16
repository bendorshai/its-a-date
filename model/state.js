var consts = require('./consts.js');
var _ = require('underscore');
const absolute = consts.reltivity.absolute;

// Init date as current
var date = new Date();

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

exports.calculateModifications = function()
{
    // Foreach time type
    for (var timeTypeIdx in consts.timeTypes)
    {
        var timeType = consts.timeTypes[timeTypeIdx];
        
        // Execute it's modification queue, this affects the date object
        executeModificationsQueue(modificationQueues[timeType], timeType);
    }
}

exports.getDate = function()
{
    return date;
}

// Not finished...
function executeModificationsQueue(modifications, timeType)
{
    if (modifications.length == 0) {
        return;
    }
    
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
    if (absoluteCount == 1 && modifications.length > 1)
    {
        modifications = _.sortBy(modifications, function(mod) {
           // Absolute will be first
           return mod.affectType == absolute ? 1 : 2;
        });
    }
    
    // Execute all modifications
    for (var modification of modifications)
    {
        executeModification(modification, timeType);
    }
}
 
function executeModification(modification, timeType)
{
    // If avsolute
    if (modification.affectType == absolute)
    {
        var value = modification.value;
        
        switch (timeType)
        {
            case consts.timeTypes.year:
                date.setFullYear(value);
                return;
            case consts.timeTypes.month:
                date.setMonth(value-1); // Months are wierd in js
                return;
            case consts.timeTypes.date:
                date.setDate(value);
                return;
            case consts.timeTypes.hour:
                date.setHour(value);
                return;
            case consts.timeTypes.minute:
                date.setMinutes(value);
                return;
            default: 
                throw 'ERROR: Unknown time type in modification excecute';
        }
    }
}  
