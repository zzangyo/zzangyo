var express = require('express');
var http = require('http');

var app = express(); // 익스프레스 서버객체

app.set('port', process.env.PORT || 3000); // process.env : 환경변수, port 설정

app.use(function(req, res, next) { // 미들웨어등록
	console.log('첫번째 미들웨어 호출됨');
	
	var userAgent = req.header('User-Agent');
	var paramName = req.query.name;
	
	res.send('<h3>서버에서 응답. User-Agent : ' + userAgent + '</h3><h3>paramName : ' + paramName + '</h3>');
});

var server = http.createServer(app).listen(app.get('port'), function() { // 위에서 지정한 port 설정 가져옴
	console.log('익스프레스로 웹서버를 실행 : ' + app.get('port'));
});