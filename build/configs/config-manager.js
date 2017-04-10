"use strict";
var ConfigManager = (function () {
    function ConfigManager() {
    }
    ConfigManager.get = function (key) {
        var env = process.env;
        console.log('ENVIRONMENT', env);
    };
    return ConfigManager;
}());
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=config-manager.js.map