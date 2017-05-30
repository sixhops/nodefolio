
var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('*', function(req, res) {
    res.render('index', {'title': 'pathological', 'message': 'you are the mean clock'});
});

app.listen(8080);
