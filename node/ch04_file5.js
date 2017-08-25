var output = '안녕!';
var buffer1 = new Buffer(10);
var len = buffer1.write(output, 'utf8');
console.log('first buffer string length : ' + len);
console.log('first buffer string : ' + buffer1.toString());

console.log('버퍼 객체인지 여부 : ' + Buffer.isBuffer(buffer1));

var byteLen = Buffer.byteLength(buffer1);
console.log('byteLen : ' + byteLen);

var str1 = buffer1.toString('utf8', 0, 6);
console.log('str1 : ' + str1);

var buffer2 = Buffer.from('hello', 'utf8'); // hello라는 것을 버퍼로 만들어달라
console.log('두 번째 버퍼의 길이 : ' + Buffer.byteLength(buffer2));

var str2 = buffer2.toString('utf8', 0, Buffer.byteLength(buffer2));
console.log('str2 : ' + str2);