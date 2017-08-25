var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags: 'r'}) //flags: 'r' 읽기권한 부여

infile.on('data', function(data) {
	console.log('읽어들인 데이터 : ' + data);
});

infile.on('end', function() {
	console.log('읽기종료');
});