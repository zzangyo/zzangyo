process.on('tick', function(count) {
	console.log('tick �̺�Ʈ �߻� : ' + count);
});

setTimeout(function() {
	console.log('2�� �Ŀ� ����Ǿ���');
	process.emit('tick', '2'); // �̺�Ʈ ���� ; emit���� ������ on���� �޴´�
}, 2000);