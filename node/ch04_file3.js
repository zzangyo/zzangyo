var fs = require('fs');

var data = fs.writeFile('./output.txt', 'Hello.', function(err) {
	if (err) {
		console.log('error ggggg');
		console.dir(err);
		return;
	}
	
	console.log('output.txt complete!!');
}); // 비동기
