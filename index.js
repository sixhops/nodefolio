var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); // folder for css and assets

app.get('/green', function(req, res) {
    res.render('index', {'title': 'pathological', 'message': 'you are the green clock'});
});

app.get('/blue', function(req, res) {
    res.render('index', {'title': 'pathological', 'message': 'you are the blue clock'});
});

app.get('/red', function(req, res) {
    res.render('index', {'title': 'pathological', 'message': 'you are the red clock'});
});

app.get('/', function(req, res) {
    res.render('index', {'title': 'pathological', 'message': 'you are the moon clock'});
});

app.listen(8080);
