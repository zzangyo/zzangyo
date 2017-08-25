var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser'); //포스트방식으로 넘길 경우 사용하는 외장 모듈

var app = express(); // 익스프레스 서버객체

app.set('port', process.env.PORT || 3000); // process.env : 환경변수, port 설정
app.use('/public', static(path.join(__dirname, 'public'))); // __dirname : 현 실행 파일 폴더

app.use(bodyParser.urlencoded({extended:false})); // post방식으로 넘길 경우
app.use(bodyParser.json());

var router = express.Router();

router.route('/process/login/:name').post(function(req, res) {
	console.log('/process/login/:name 라우팅 함수에서 받음');
	
	var paramName = req.params.name;
	
	var paramId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
	
	res.writeHead(200, {"Content-Type":"text/html;charset=utf8"});
	res.write("<h1>서버에서 로그인 응답</h1>");
	res.write("<div><p>" + paramName + "</p></div>");
	res.write("<div><p>" + paramId + "</p></div>");
	res.write("<div><p>" + paramPassword + "</p></div>");
});

app.use('/', router);

var server = http.createServer(app).listen(app.get('port'), function() { // 위에서 지정한 port 설정 가져옴
	console.log('익스프레스로 웹서버를 실행 : ' + app.get('port'));
});