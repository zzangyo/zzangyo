var express = require('express');
var http = require('http');
var static = require('serve-static');
var path = require('path');

var bodyParser = require('body-parser'); //포스트방식으로 넘길 경우 사용하는 외장 모듈
var cookieParser = require('cookie-parser');

var app = express(); // 익스프레스 서버객체

app.set('port', process.env.PORT || 3000); // process.env : 환경변수, port 설정
app.use('/public', static(path.join(__dirname, 'public'))); // __dirname : 현 실행 파일 폴더

app.use(bodyParser.urlencoded({extended:false})); // post방식으로 넘길 경우
app.use(bodyParser.json());

app.use(cookieParser());

var router = express.Router();

router.route('/process/setUserCookie').get(function(req, res) {
	console.log('/process/setUserCookie 라우팅 함수 호출');
	
	res.cookie('user', {
		id : 'mike',
		name : '소녀시대',
		authorized : true
	});
	
	res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function(req, res) {
	console.log('/process/showCookie 라우팅 함수 호출');
	
	res.send(req.cookies);
});

app.use('/', router);

app.all('*', function(req, res) {
	res.status(404).send('<h1>요청하신 페이지 없음</h1>')
});

var server = http.createServer(app).listen(app.get('port'), function() { // 위에서 지정한 port 설정 가져옴
	console.log('익스프레스로 웹서버를 실행 : ' + app.get('port'));
});