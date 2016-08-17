var consts = require ('../consts.js');
var _ = require('underscore');
var ago_and_since = require('./ago&since.js');

exports.tokens = [ {
        // Example 1945
        regex: /(?:^|\s)(\d{4})(?:$|\s)/,
        affects: [
            {
                timeType: consts.timeTypes.year,
                affectType: consts.reltivity.absolute
            }
        ]
    },
    {
        // Example 31th
        regex: /(?:^|\s)(\d{1,2})(?:th|st|nd|rd)?(?:$|\s)/,
        affects: [
            {
                timeType: consts.timeTypes.date,
                affectType: consts.reltivity.absolute
            }
        ],
        // only if verifier returns true the affects take place
        verifier: function(match, dateString, state) {
            
            // Verify that this number doesn't relate to 'ago', exmaple: 4 days ago
            var components = dateString.split(' ');
            
            // tri, all
            components = _.map(components, function(comp) {
                return comp.trim();
            });
            
            // for each component index except last two 
            for (var i = 0; i < components.length-2; i++)
            {
                var comp = components[i];
                var nextNext = components[i+2];
                
                // if component doesn't equal to what matched (example 15)
                if (comp != match[1]) {
                    continue;
                }
                
                // If nextNext can't be found in since/ago relative words
                if (ago_and_since.relativeWords.indexOf(nextNext) == -1) {
                    continue;
                }
               
                // Matched value does not relate to a date its the variable X in: X ____ ago (e.g., 5 months ago)
                return false;
            }
            
            return true;
        }
    }];