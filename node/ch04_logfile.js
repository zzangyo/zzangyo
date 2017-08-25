var winston = require('winston');
var winstonDaily = require('winston-daily-rotate-file');

var moment = require('moment'); //날짜 시간관련 모듈

function timeStampFormat() {
	return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

var logger = new (winston.Logger)({
	transports : [
		new (winstonDaily)({
			name : 'info-file',
			filename : './log/server',
			datePattern : '_yyyy-MM-dd.log',
			colorize : false,
			maxsize : 50000000,//이보다 더 커지면 파일분리
			maxFiles : 1000,
			level : 'info', // info 메세지보다 중요한것만 출력했기 때문에 debug 메세지 출력안됨
			showLevel : true,
			json : false,
			timestamp : timeStampFormat
		}),
		new (winston.transports.Console)({
			name : 'debug-console',
			colorize : true,
			level : 'debug',
			showLevel : true,
			json : false,
			timestamp : timeStampFormat
		})
	]
});

logger.debug('디버깅 메세지입니다.');
logger.error('에러 메세지입니다.');