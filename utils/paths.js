"use strict";
exports.__esModule = true;
var path_1 = require("path");
var rootDir_1 = require("./rootDir");
exports["default"] = {
    root: rootDir_1["default"],
    github: path_1["default"].join(rootDir_1["default"], '.github'),
    config: path_1["default"].join(rootDir_1["default"], 'config'),
    dist: path_1["default"].join(rootDir_1["default"], 'dist'),
    gulp: path_1["default"].join(rootDir_1["default"], 'gulp'),
    lib: path_1["default"].join(rootDir_1["default"], 'lib'),
    src: path_1["default"].join(rootDir_1["default"], 'src'),
    utils: path_1["default"].join(rootDir_1["default"], 'utils'),
    script: path_1["default"].join(rootDir_1["default"], 'script')
};
