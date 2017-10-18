var user1 = require('./user1'); // module_test1 의 exports라는 객체가 리턴

function showUser() {
	return user1.getUser().name + ', ' + user1.group.name;
}

console.log('사용자 정보 -> ' + showUser());