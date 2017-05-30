
var express = require('express');

var app = express();

app.get('*', function(req, res) {
    res.end('vibrate is louder than pole the ringer');
});

app.listen(8080);
