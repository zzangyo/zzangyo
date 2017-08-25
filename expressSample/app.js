var express = require('express');
var http = require('http');

var app = express(); // 익스프레스 서버객체

app.set('port', process.env.PORT || 3000); // process.env : 환경변수, port 설정

var server = http.createServer(app).listen(app.get('port'), function() { // 위에서 지정한 port 설정 가져옴
	console.log('익스프레스로 웹서버를 실행 : ' + app.get('port'));
});