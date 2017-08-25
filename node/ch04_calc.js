var EventEmitter = require('events').EventEmitter;
var util = require('util'); //������Ÿ�� ��ü�� ���� ���

var Calc = function() {
	this.on('stop', function() {
		console.log('Calc �� stop �̺�Ʈ ���޵�');
	});
};

util.inherits(Calc, EventEmitter); //EventEmitter�� �θ�κ��� ����ؼ� Calc�� �������

Calc.prototype.add = function(a, b) {
	return a + b;
};

module.exports = Calc;