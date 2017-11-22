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
			"api":"list",
  			"list":[
  				{"text":"中国"},
  				{"text":"加拿大"},
  				{"text":"澳大利亚"},
  				{"text":"智利"}
  			]};
  	res.send(data);
});
module.exports = router;