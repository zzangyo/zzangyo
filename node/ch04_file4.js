var fs = require('fs');

fs.open('./output.txt', 'w', function(err, fd){ // w : 오픈하며 쓰는권한 부여
	if (err) {
		console.log('error ggggg');
		console.dir(err);
		return;
	}
	
	var buf = new Buffer('hello222!\n');
	fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) { // 출력, fd : 전달받은 파라미터, buf에 넣어서 전달, 0 buf.length : 0 부터 모두 출력
		if (err) {
			console.log('file write error ggggg');
			console.dir(err);
			return;
		}
		
		console.log('output.txt complete!!');
		
		fs.close(fd, function() {
			console.log('file close complete!')	;
		});
	});
});

// buf 문자열을 담아두는 객체