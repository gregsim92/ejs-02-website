var express = require('express');
var app = express();
var port = 8000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req,res) {
	res.render('pages/index');
});

app.listen(port);
console.log('port is love, port is (' +port+ ')...');