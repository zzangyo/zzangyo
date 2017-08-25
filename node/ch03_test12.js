var users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];
console.log('배열원소의 개수' + users.length);

users.unshift({name:'티아라', age:21}); // 앞에 추가
console.log('배열원소의 개수' + users.length);

var elem = users.shift(); // 앞에 꺼냄
console.log('배열원소의 개수' + users.length);

console.log('shift 로 꺼낸 세번째 원소');
console.dir(elem);
