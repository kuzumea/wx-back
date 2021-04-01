const express  = require('express')
const app = express()
const router = require('./routers/router')

app.use(router)
app.use('/static', express.static('./static'))
app.listen(3000,()=>{console.log('server is runing in 3000')})