let func = require('../sql/func')

module.exports = {
  login (req, res) {
    let val = ''
    let openid = req.query.openid
    console.log(req.body);
    let sql = `SELECT * FROM user Where openid = '${openid}'`
    try {
      func.connPool(sql, val, (err, rows) => {
        if (rows[0]) {
          res.json({
            code: 200,
            msg: 'log success',
          })
        } else {
          res.json({
            code: 201,
            msg: 'search FAILED'
          })
        }
      })
    } catch (e) {
      // console.log(e);
    }
  },
  sign (req, res) {
    let val = ''
    let {openid, name, avatar_url} = req.query
    let sql = `INSERT INTO user (openid, total_deal, total_pub, name, avatar_url) VALUES ("${openid}",0,0,"${name}","${avatar_url}")`
    
    try {
      func.connPool(sql, val, (err, rows) => {
         if(err) {
          res.json({
            code: 201,
            msg: 'defealt',
          })
          
         }else {
          res.json({
            code: 200,
            msg: 'success',
          })
          
         }
      })
    } catch (e) {
      // console.log(e);
    }
  },
  search (req, res) {
    let val = ''
    let openid = req.query.openid
    let sql = `SELECT * FROM user where openid="${openid}"`
    
    try {
      func.connPool(sql, val, (err, rows) => {
         if(rows[0]) {
           res.json({
             code:200,
             data:rows[0]
           })
         }else {
          res.json({
            code:201,
            msg:'查询失败'
          })
         }
      })
    } catch (e) {
      // console.log(e);
    }
  },
  saveInfo (req, res) {
    let val = ''
    
    let {openid, name, avatar_url, contact_qq, contact_wx} = req.query
    let sql = `UPDATE user SET total_deal=0, total_pub=0, name="${name}", avatar_url="${avatar_url}", contact_qq="${contact_qq}", contact_wx="${contact_wx}"  where openid="${openid}"`
    
    try {
      func.connPool(sql, val, (err, rows) => {
         if(rows) {
           res.json({
             code:200,
             msg:'保存成功'
           })
         }else {
          res.json({
            code:201,
            msg:'查询失败'
          })
         }
      })
    } catch (e) {
      // console.log(e);
    }
  }
}