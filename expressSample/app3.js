var express = require('express');
var http = require('http');

var app = express(); // 익스프레스 서버객체

app.set('port', process.env.PORT || 3000); // process.env : 환경변수, port 설정

app.use(function(req, res, next) { // 미들웨어등록
	console.log('첫번째 미들웨어 호출됨');
	
	req.user = 'zzangyo';
	next(); // 이 미들웨어 떠남
});

app.use('/', function(req, res, next) { // 미들웨어등록
	console.log('두번째 미들웨어 호출됨');
	
	res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"});
	res.end('<h1>서버에서 응답한 결과입니다. :' + req.user + '</h1>');
});

var server = http.createServer(app).listen(app.get('port'), function() { // 위에서 지정한 port 설정 가져옴
	console.log('익스프레스로 웹서버를 실행 : ' + app.get('port'));
});