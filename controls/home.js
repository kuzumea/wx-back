let func = require('../sql/func')

module.exports = {
  login (req, res) {
    let val = ''
    let name = req.query.name
    let sql = `SELECT * FROM user Where passwd = '${req.query.password}' AND  name = '${name}'`
    try {
      func.connPool(sql, val, (err, rows) => {
        if (rows[0]) {
          res.json({
            code: 200,
            msg: 'log success',
            token: rows[0].token
          })
        } else {
          res.json({
            code: 201,
            msg: 'log defeat'
          })
        }
      })
    } catch (e) {
      // console.log(e);
    }
  },
  list (req, res) {
    let val = ''
    let name = req.query.type
    let sql
    if (name) {
      sql = `SELECT * FROM goods Where type = '${name}'`
    } else {
      sql = `SELECT * FROM goods`
    }
    try {
      func.connPool(sql, val, (err, rows) => {
        if (rows[0]) {
          res.json({
            code: 200,
            msg: 'success',
            result: rows
          })
        } else {
          res.json({
            code: 201,
            msg: 'defeat'
          })
        }
      })
    } catch (e) {
      // console.log(e);
    }
  }
}