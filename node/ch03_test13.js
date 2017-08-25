var users = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}, {name:'티아라', age:21}];
console.log('배열원소의 개수' + users.length);

delete users[1]; // 삭제된 배열이 공백 배열로 남아있음

console.dir(users);

users.forEach(function(elem, index) {
	console.log('원소 #' + index);
	console.dir(elem)
})

// splice 중간 요소 수정
users.splice(1, 0, {name:'애프터스쿨', age:24}); // 1 : 두번째 중간 추가, 0 : 삭제가 아니라 추가, 객체
console.dir(users)

users.splice(2, 1); // 2: 2부터 시작해서, 1개를 삭제하겠다
console.dir(users)

