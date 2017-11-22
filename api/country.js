//静态数据
var express = require('express');
var router = express.Router();

//接口地址: /api
router.post('/', function(req, res, next) {
	var data = {
			"code":0,
			"api":"api"
		};
  	res.send(data);
});

//接口地址: /api/list
router.post('/list', function(req, res, next) {
	var data = {
    	"code":0,
    	"msg":"success",
		"list":[
			{"name":"中国"},
			{"name":"加拿大"},
			{"name":"澳大利亚"},
			{"name":"智利"}
		]};
  	res.send(data);
});
module.exports = router;