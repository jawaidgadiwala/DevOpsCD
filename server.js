'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var http = require('http');

global.appEnv = function (name, def) {
    var val = undefined;
    if (process.env[name] === undefined) {
        val = def;
    }
    else {
        val = process.env[name];
    }

    if (typeof val == "string") {
        if (val.toLowerCase() == "true") {
            val = true;
        }
        else if (val.toLowerCase() == "false") {
            val = false;
        }
    }

    return val;
};

http.createServer(app).listen(appEnv('HTTP_PORT', 8081), function () {
    console.log("App server listening on port " + appEnv('HTTP_PORT', 8081));
});

app.get('/', (req, res) => res.send('Hello World!'))
