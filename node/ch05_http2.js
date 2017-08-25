var http = require('http');

var server = http.createServer();

var host = '10.19.1.160';
var port = 3000;
server.listen(port, host, 50000, function() { // 동시에 접속할수있는 클라이언트의 수 50000 : 백로그, 성능문제때문에 제한을 둠
	console.log('웹서버가 실행되었음 : ' + host + ' : ' + port);
});

server.on('connection', function(socket) { // connection 이 완료되면 socket이 내부적으로 만들어짐
	console.log('클라이언트가 접속함');
});

server.on('request', function(req, res) {
	console.log('클라이언트 요청이 들어옴');
	// console.dir(req);
	
	res.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"}); // 헤더정보 클라이언트 쪽으로 출력
	res.write('<h1>웹서버로부터 받은 응답</h1>'); // 웹페이지의 내용을 응답으로 보내줌
	res.end(); // 이때 전송
});
