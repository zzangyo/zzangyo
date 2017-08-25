var EventEmitter = require('events').EventEmitter;
var util = require('util'); //프로토타입 객체를 쉽게 상속

var Calc = function() {
	this.on('stop', function() {
		console.log('Calc 에 stop 이벤트 전달됨');
	});
};

util.inherits(Calc, EventEmitter); //EventEmitter를 부모로보고 상속해서 Calc가 만들어짐

Calc.prototype.add = function(a, b) {
	return a + b;
};

module.exports = Calc;