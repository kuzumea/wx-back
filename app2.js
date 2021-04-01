const express  = require('express')
const app = express()

app.get('/',(req,res)=>{
  // res.end('hello');//node原生方法
  // res.send('hello');//发送  将数据发送给客户端，结束请求
  res.send('成功');
  // res.send({code:200,msg:"成功，hello"});
});


app.listen(3000,()=>{console.log('server is runing in 3000')})