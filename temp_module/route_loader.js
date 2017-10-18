var route_loader = {};

var config = require('./config');

route_loader.init = function(app, router) {
	initRoutes(app, router);
}

function initRoutes(app, router) {
	for (var i = 0; i < config.route_info.length; i++) {
		var curItem = config.route_info[i];
		var curModule = require(curItem.file);
		if (curItem.type == 'get') {
			router.route(curItem.path).get(curModule[curItem.method]);
		} else if (curItem.type == 'post') {
			router.route(curItem.path).post(curModule[curItem.method]);
		} else {
			console.error('라우팅 함수의 타입을 알 수 없다. : ' + curItem.type);
		}
	}
	
	app.use('/', router);
}

module.exports = route_loader;