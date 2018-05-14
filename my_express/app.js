var express = require('express');
var http = require('http');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World 2!!');
});

http.createServer(app).listen(3000, function(){
    console.log('Express Starter Http!!');
});
// app.listen(3000, function(){
//     console.log('Express Starter!!');
// });