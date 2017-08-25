process.on('tick', function(count) {
	console.log('tick 이벤트 발생 : ' + count);
});

setTimeout(function() {
	console.log('2초 후에 실행되었음');
	process.emit('tick', '2'); // 이벤트 전달 ; emit으로 보내고 on으로 받는다
}, 2000);