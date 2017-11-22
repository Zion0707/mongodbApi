var express = require('express')
var app = express()
var path = require('path')
var country = require('./api/country.js')
var cars = require('./api/cars.js')

//配置项
const config = {
	// localhost:'192.168.199.127'
	localhost : 'localhost',
	port : process.env.PORT || 3000
}


//实现POST请求
// 引入json解析中间件
var bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 允许所有的请求形式
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//静态资源访问
app.use(express.static(path.join(__dirname, 'public')))
//接口地址访问
app.use('/api/country',country)
app.use('/api/cars',cars)



//端口
app.listen(config.port)



