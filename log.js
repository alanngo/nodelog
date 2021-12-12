"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
// fatal 
var BG_RED = '\x1b[41m';
var BLACK = '\x1b[30m';
// error
var RED = '\x1b[31m';
// warning
var YELLOW = '\x1b[33m';
// info
var BLUE = '\x1b[34m';
// debug
var GREEN = '\x1b[32m';
// other
var WHITE = '\x1b[37m';
var BG_BLACK = '\x1b[40m';
// DO NOT EXPORT
var LOG = function (arg, color, type) {
    var PREFIX = type + ' ' + new Date().toLocaleString();
    fs_1.default.appendFile('debug.log', PREFIX + arg + '\n', function (err) {
        if (err)
            throw err;
        console.log(BG_BLACK + color + PREFIX + WHITE + ':' + color, arg, BG_BLACK + WHITE);
    });
};
var debug = function (arg) { return LOG(arg, GREEN, 'DEBUG'); };
var info = function (arg) { return LOG(arg, BLUE, 'INFO'); };
var warn = function (arg) { return LOG(arg, YELLOW, 'WARNING'); };
var err = function (arg) { return LOG(arg, RED, 'ERROR'); };
var fatal = function (arg) { return LOG(arg, BG_RED + BLACK, 'FATAL'); };
exports.default = { debug: debug, info: info, warn: warn, err: err, fatal: fatal };
