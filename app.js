const express  = require('express')
const app = express()
const router = require('./routers/router')


// 设置body解析中间件，不然无法解析post的参数
app.use(express.urlencoded())


app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');//允许的header类型
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //跨域允许的请求方式 
  if (req.method == 'OPTIONS') {
    res.send(200);//让options尝试请求快速结束
  } else {
    next();
  }
});

app.use(router)
app.use('/static', express.static('./static'))
app.listen(3000,()=>{console.log('server is runing in 3000')})