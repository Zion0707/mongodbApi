//GET方式

//动态数据
var express = require('express');
var router = express.Router();
var config = require('../config.js');

//链接数据库
var mongo = require('mongodb')
var server = new mongo.Server(config.localhost,27017,{auto_reconnect:true})
var db = new mongo.Db('cars',server,{safe:true})

router.get('/list',function(req,res,next){
	//连接数据库，连接 list 表
	db.open(function(err,db){
		db.collection('list',function(err,collection){
			collection.find({}).toArray(function(err,docs){
				if ( err ) {
					throw err;
				}else{
					//塞进接口中
					var json = {
						code : 0,
						api:'list',
						msg : 'success',
						list : docs
					}
					res.send(json)
				}
				db.close()
			})
		})
	})

})

module.exports = router;



