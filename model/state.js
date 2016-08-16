var consts = require('./consts.js');
var _ = require('underscore');
const absolute = consts.reltivity.absolute;

// ctor
function State() {
    
    // Init date as current
    this.date = new Date();
    this.date.setSeconds(0);
    
    // Init the modification queue that logs the modification on each date part
    this.modificationQueues = [];
    this.modificationQueues[consts.timeTypes.year] = [];
    this.modificationQueues[consts.timeTypes.month] = [];
    this.modificationQueues[consts.timeTypes.date] = [];
    this.modificationQueues[consts.timeTypes.hour] = [];
    this.modificationQueues[consts.timeTypes.minute] = [];
}

module.exports = exports = State;

// Pushes a modification to acertain time type
// Example of use:
/*
  state.pushModification('year', 
        {
            affectType: 'absolute',
            value: 1993
        });
*/
State.prototype.pushModification = function(timeType, modification)
{
    this.modificationQueues[timeType].push(modification);
}

State.prototype.calculateModifications = function()
{
    // Foreach time type
    for (var timeTypeIdx in consts.timeTypes)
    {
        var timeType = consts.timeTypes[timeTypeIdx];
        
        // Execute it's modification queue, this affects the date object
        executeModificationsQueue(this.modificationQueues[timeType], timeType, this);
    }
}

// Not finished...
function executeModificationsQueue(modifications, timeType, context)
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
        executeModification(modification, timeType, context);
    }
}
 
function executeModification(modification, timeType, context)
{
    var value = modification.value;
    
    // If avsolute
    if (modification.affectType == absolute)
    {
        switch (timeType)
        {
            case consts.timeTypes.year:
                context.date.setFullYear(value);
                return;
            case consts.timeTypes.month:
                context.date.setMonth(value-1); // Months are wierd in js
                return;
            case consts.timeTypes.date:
                context.date.setDate(value);
                return;
            case consts.timeTypes.hour:
                context.date.setHours(value);
                return;
            case consts.timeTypes.minute:
                context.date.setMinutes(value);
                return;
            default: 
                throw 'ERROR: Unknown time type in modification excecute';
        }
    }
    // If relative
    else if (modification.affectType == consts.reltivity.relative)
    {        
        switch (timeType)
        {
            case consts.timeTypes.year:
                context.date.setFullYear(context.date.getFullYear() + value);
                return;
            case consts.timeTypes.month:
                context.date.setMonth(context.date.getMonth() + value);
                return;
            case consts.timeTypes.date:
                context.date.setDate(context.date.getDate() + value);
                return;
            case consts.timeTypes.hour:
                context.date.setHours(context.date.getHours() + value);
                return;
            case consts.timeTypes.minute:
                context.date.setMinutes(context.getMinutes() + value);
                return;
            default: 
                throw 'ERROR: Unknown time type in modification excecute';
        }
    }
}  
