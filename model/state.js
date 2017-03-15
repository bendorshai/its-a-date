var consts = require('./consts.js');
var _ = require('lodash');
var moment = require('moment');

const absolute = consts.reltivity.absolute;

// ctor
function State() {

    // Init date as current
    this.date = moment();
    this.date.seconds(0);
    this.date.milliseconds(0);

    // Init the modification queue that logs the modification on each date part
    this.modificationQueues = [];
    this.modificationQueues[consts.timeTypes.year] = [];
    this.modificationQueues[consts.timeTypes.month] = [];
    this.modificationQueues[consts.timeTypes.week] = [];
    this.modificationQueues[consts.timeTypes.day] = [];
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
State.prototype.pushModification = function (timeType, modification) {
    this.modificationQueues[timeType].push(modification);
}

State.prototype.calculateModifications = function () {
    // Foreach time type, from the biggest to the small (IMPORTANT)
    for (var timeTypeIdx in consts.timeTypes) {
        var timeType = consts.timeTypes[timeTypeIdx];

        // Execute it's modification queue, this affects the date object
        executeModificationsQueue(this.modificationQueues[timeType], timeType, this);
    }
}

function executeModificationsQueue(modifications, timeType, context) {
    if (modifications.length == 0) {
        return;
    }

    // Count the absolute affect types (allowed between 1-0)
    var affectTypes = _.map(modifications, 'affectType');
    var counts = _.countBy(affectTypes, function (type) {
        return type == absolute ? absolute : 'other';
    });

    var absoluteCount = counts[absolute];

    // More than one absolute count is allowed only if the value is the same.
    if (absoluteCount > 1) {
        throw 'ERROR: Two or more absolute modifications are not allowed on the same date entity';
    }

    // If there is one absolute I want to calculate it first, so I sort by it
    if (absoluteCount == 1 && modifications.length > 1) {
        modifications = _.sortBy(modifications, function (mod) {
            // Absolute will be first
            return mod.affectType == absolute ? 1 : 2;
        });
    }

    // Execute all modifications
    for (var modification of modifications) {
        executeModification(modification, timeType, context);
    }
}

function executeModification(modification, timeType, context) {
    var value = modification.value;
    value = parseInt(value);

    // Throw exception if there is an error
    modificationVerifier(modification.affectType, timeType, value);

    // If avsolute
    if (modification.affectType == absolute) {
        switch (timeType) {
            case consts.timeTypes.year:
                context.date.year(value);
                return;
            case consts.timeTypes.month:
                context.date.month(value - 1);
                return;
            case consts.timeTypes.day:
                context.date.date(value);
                return;
            case consts.timeTypes.hour:
                context.date.hours(value);
                return;
            case consts.timeTypes.minute:
                context.date.minutes(value);
                return;
            default:
                throw 'ERROR: Unknown time type in modification excecution';
        }
    }
    // If relative
    else if (modification.affectType == consts.reltivity.relative) {

        // Convert to moment time type, lol
        var momentTimeType = timeType;

        context.date.add(value, momentTimeType);
    }
}


function modificationVerifier(affectType, timeTypes, value) {

    // Only absolutes can be not verified
    if (affectType != absolute) {
        return true;
    }

    if (timeTypes == consts.timeTypes.minute && value > 60) {
        throw 'ERROR: Invalid value for minutes';
    }

    if (timeTypes == consts.timeTypes.hour && value > 60) {
        throw 'ERROR: Invalid value for hours';
    }

    if (timeTypes == consts.timeTypes.day && value > 31) {
        throw 'ERROR: Invalid value for day';
    }

    if (timeTypes == consts.timeTypes.month && value > 12) {
        throw 'ERROR: Invalid value for month';
    }
}