"use strict";
exports.__esModule = true;
// DO NOT IMPORT FROM "../utils" this makes Rollup try to resolve core Node.js modules like path and process
var typeCheckFunctions_1 = require("../utils/typeCheckFunctions");
var default_1 = /** @class */ (function () {
    function default_1(envConfigObject) {
        this.envConfigObject = envConfigObject;
    }
    default_1.prototype.has = function (key) {
        return !!this.envConfigObject[key];
    };
    default_1.prototype.get = function (key) {
        return this.envConfigObject[key];
    };
    default_1.prototype.getEnvConfigObject = function () {
        return this.envConfigObject;
    };
    default_1.prototype.getTypedEnvVar = function (key, isOfType) {
        var val = this.get(key);
        if (!isOfType(val))
            throw new Error();
        return val;
    };
    default_1.prototype.getString = function (key) {
        try {
            return this.getTypedEnvVar(key, typeCheckFunctions_1.isString);
        }
        catch (_a) {
            throw new Error("".concat(key, " has invalid type - expected string but got ").concat(typeof this.envConfigObject[key]));
        }
    };
    return default_1;
}());
exports["default"] = default_1;
