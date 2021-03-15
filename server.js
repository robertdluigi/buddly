// Server file

// Dependencies

const os = require('os-utils');
const io = require('socket.io');
const server = require('express');
const app = server();
const path = require('path');
const http = require('http');
const notify = require('node-notifier');

// Server set-up


// Init Client-Side

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(8080);