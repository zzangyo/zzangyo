process.on('exit', function() {
	console.log('exit �̺�Ʈ �߻�');
});

setTimeout(function() {
	console.log('2�� �Ŀ� ����Ǿ���');
	process.exit();
}, 2000);

console.log('2���Ŀ� ����ɰ���')