//动态数据
var express = require('express');
var router = express.Router();
//配置项
const config = {
	// localhost:'192.168.199.127'
	localhost : 'localhost',
	port : process.env.PORT || 3000
}
//链接数据库
var mongo = require('mongodb')
var server = new mongo.Server(config.localhost,27017,{auto_reconnect:true})
var db = new mongo.Db('cars',server,{safe:true})

//汽车列表
router.post('/list',function(req,res,next){
	//连接数据库，连接 type 表
	db.open(function(err,db){
		db.collection('type',function(err,collection){
			collection.find({}).toArray(function(err,docs){
				//塞进接口中
				var json = {
					code : 0,
					msg : 'success',
					list : docs
				}
				res.send(json)
				db.close()
			})
		})
	})

})

module.exports = router;





