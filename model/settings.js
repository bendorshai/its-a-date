function Settings(_alternativeSettings) {
    
    // Settings that affect its-a-date actions, if alternative settings provided use them
    this.settings = _alternativeSettings || {
        format_hits: [{
                day_before_month: true,
                desc : 'when true then its-a-date expects dd/mm/yyyy, otherwise mm/dd/yyyy'
            }]
        };  
}

module.exports = exports = Settings;

// Get a specific setting by name
Settings.prototype.get = function(name)
{
    if (name == undefined) {
        return this.settings;
    }
    
    return traverseSettingByNameRecursive(name, this.settings);
}

// Set a multiple settings {name:value, name:value}
Settings.prototype.set = function(nameValue)
{
    var keys = Object.keys(nameValue)
    
    for(var key of keys) {
        traverseSettingByNameRecursive(key, this.settings,  nameValue[key]);
    }
}

// Get a specific setting by name
Settings.prototype.restoreDefault = function() {
    this.settings = (new Settings()).settings;
}

/* 
 Gets or sets a setting, recursivly.
 If value is assigned then value of setting is altered
 */ 
function traverseSettingByNameRecursive (name, settings, value) {
    for (var key in settings) {
        
        if (key == name) {
            
            if (value != undefined) {
                settings[key] = value;
            }
            
            return settings[key];
        }
        
        // If current property is traversable
        if(settings.propertyIsEnumerable(key)) {
            
            // Traverse trhough it
            var setting = traverseSettingByNameRecursive(name, settings[key] , value);
            
            // If we got answer return it
            if (setting != undefined) {
                return setting;
            }
        }
    }
    
    return undefined;
}
