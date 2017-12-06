var express = require('express')
var router = express.Router()

var config = require('../config.js');

//链接数据库
var mongo = require('mongodb')
var server = new mongo.Server(config.localhost,27017,{auto_reconnect:true})
var db = new mongo.Db('cars',server,{safe:true})

router.post('/searchCar',function(req,res,next){
	db.open(function(err,db){
		db.collection('cars',function(err,collection){
			collection.find(req.body).toArray(function(err,docs){
				var json = {
					code:0,
					api:'searchCar',
					msg:'success',
					list: docs
				}
				res.send(json)
				db.close()
			})
		})
	})
})

module.exports = router;