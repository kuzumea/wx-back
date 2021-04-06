let func = require('../sql/func')

module.exports = {
  getList (req, res) {
    let val = ''
    let cid = req.query.cid
    // console.log(req.query);
    let sql = ''
    if (cid === '全部') {
      sql = `SELECT * FROM comodity`
    } else {
      sql = `SELECT * FROM comodity WHERE cid = '${cid}'`
    }
    try {
      func.connPool(sql, val, (err, rows) => {
        if (rows) {
          // console.log(rows[0]);
          // let baseUrl = 'http://127.0.0.1:3000'
          // rows.map(v=>{
          //   v.swiper_url = baseUrl + v.swiper_url
          //   v.img_url = baseUrl +  v.img_url
          //   return v
          // })
            res.json({
              code: 200,
              msg: 'success',
              data:rows
            })
          } else {
            res.json({
              code: 201,
              msg: 'search FAILED'
            })
        }
      })
    } catch (e) {
    }
  },

  getDetail(req, res) {
    let val = ''
    let comody_id = req.query.comody_id
    console.log(req.query);
    let sql = `SELECT * FROM comodity WHERE comody_id = '${comody_id}'`

    try {
      func.connPool(sql, val, (err, rows) => {
        if (rows) {
          // console.log(rows[0]);
          // let baseUrl = 'http://127.0.0.1:3000'
          // rows.map(v=>{
          //   v.swiper_url = baseUrl + v.swiper_url
          //   v.img_url = baseUrl +  v.img_url
          //   return v
          // })
            res.json({
              code: 200,
              msg: 'success',
              data:rows
            })
          } else {
            res.json({
              code: 201,
              msg: 'search FAILED'
            })
        }
      })
    } catch (e) {
    }
  }
}