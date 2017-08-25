var http = require('http');

var server = http.createServer();

var host = '10.19.1.160';
var port = 3000;
server.listen(port, host, 50000, function() { // 동시에 접속할수있는 클라이언트의 수 50000, 성능문제때문에 제한을 둠
	console.log('웹서버가 실행되었음 : ' + host + ' : ' + port);
});
