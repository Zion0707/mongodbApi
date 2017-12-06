var express = require('express')
var app = express()
var path = require('path')

//api地址
var list = require('./api/list.js')
var getCar = require('./api/getCar.js')
var addCar = require('./api/addCar.js')
var delCar = require('./api/delCar.js')
var searchCar = require('./api/searchCar.js')
var updateCar = require('./api/updateCar.js')


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

//设置可访问静态资源
app.use(express.static(path.join(__dirname, 'public')))

//api地址指向
app.use('/api/cars',getCar)
app.use('/api/cars',list)
app.use('/api/cars',addCar)
app.use('/api/cars',delCar)
app.use('/api/cars',searchCar)
app.use('/api/cars',updateCar)
app.listen(3000)



