var express = require('express')
var router = express.Router()

var config = require('../config.js');

//链接数据库
var mongo = require('mongodb')
var server = new mongo.Server(config.localhost,27017,{auto_reconnect:true})
var db = new mongo.Db('cars',server,{safe:true})

router.post('/delCar',function(req,res,next){
	db.open(function(err,db){
		db.collection('cars',function(err,collection){
			collection.remove(req.body,function(err, docs){
				//塞进接口中
				var json = {
					code : 0,
					api : 'delCar',
					msg : 'success'
				}
				res.send(json)
				db.close()
			})
		})
	})
})

module.exports = router;