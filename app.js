var http = require('http');
var express = require('express');
const { Client } = require('ssh2');

var app = express();

const conn = new Client();


app.set('port', process.env.PORT || 3005);
app.set('views', __dirname + '/app/server/views'); 
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname + '/app/public')); 

require('./app/routes')(app); 

http.createServer(app).listen(app.get('port'), function(){
	console.log('Server listening on Port ' + app.get('port') + '.');
});

