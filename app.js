var express = require('express')
var app = express()
var path = require('path')
var list = require('./api/list.js')
var country = require('./api/country.js')
var addCar = require('./api/addCar.js')
var delCar = require('./api/delCar.js')


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

app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/cars',list)
app.use('/api/cars',country)
app.use('/api/cars',addCar)
app.use('/api/cars',delCar)
app.listen(3000)



