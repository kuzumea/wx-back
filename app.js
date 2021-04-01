const express  = require('express')
const app = express()
const router = require('./routers/router')

// 设置body解析中间件，不然无法解析post的参数
app.use(express.urlencoded())

app.use(router)
app.use('/static', express.static('./static'))
app.listen(3000,()=>{console.log('server is runing in 3000')})