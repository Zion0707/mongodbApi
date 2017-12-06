var express = require('express')
var router = express.Router()

var config = require('../config.js');

//链接数据库
var mongo = require('mongodb')
var server = new mongo.Server(config.localhost,27017,{auto_reconnect:true})
var db = new mongo.Db('cars',server,{safe:true})

router.post('/updateCar',function(req,res,next){
	db.open(function(err,db){
		db.collection('cars',function(err,collection){
			collection.update({ name: req.body.oldVal },{ $set: { name: req.body.newVal } },function(err, docs){
				//塞进接口中
				var json = {
					code : 0,
					api : 'updateCar',
					msg : 'success',
					res : {
						name:req.body.newVal
					}
				}
				res.send(json)
				db.close()
			})
		})
	})
})

module.exports = router;