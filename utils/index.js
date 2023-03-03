"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.rootDir = exports.paths = void 0;
var paths_1 = require("./paths");
__createBinding(exports, paths_1, "default", "paths");
var rootDir_1 = require("./rootDir");
__createBinding(exports, rootDir_1, "default", "rootDir");
// DO NOT ADD EXPORT OF typeCheckFunctions here - it will make Rollup try to resolve path and process core Node.js modules
