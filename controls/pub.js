let func = require('../sql/func')
const fs = require('fs')
const moment = require('moment')
const path = require('path')
// let multi = require('multiparty')
let primary_key = 0
module.exports = {
  upload (req, res) {
    let num = 0
    // console.log(req.body);
    // console.log(req.files);
    
    let sourceFile = req.files.file.path
    // 是否有这个目录。
    fs.stat(`./static/img/${req.body.openid}`, (err, stat) => {
      if (!stat) {
        fs.mkdir(`./static/img/${req.body.openid}`, (err) => { console.log(err); })
      }
      // 给每个用户建一个文件夹存储传过来的文件
      fs.readdir(`./static/img/${req.body.openid}`, (err, files) => {
        num = files.length
        // console.log(files);
        let destPath = path.join(__dirname, `../static/img/${req.body.openid}`, `${num + 1}.jpg`)
        fs.rename(sourceFile, destPath, (err) => {
          if (err) {
            throw err
          }
          fs.stat(destPath, (err, stats) => {
            if (err) {
              throw err
            }
            // console.log('stats: ' + JSON.stringify(stats));
          })
        })
        // 链接数据库
        console.log(req.body.swiper_url);
        if (req.body.swiper_url) {
          try {
            let val = ''
            let sql = 'UPDATE comodity SET swiper_url = CONCAT(swiper_url,' + `'/static/img/${req.body.openid}/${num + 1}.jpg,'` + ') WHERE comody_id=' + `'${primary_key}'`
            console.log(sql);
            func.connPool(sql, val, (err, rows) => {
              if (err) {
                res.json({
                  code: 201,
                  msg: 'defealt',
                })

              } else {
                res.json({
                  code: 200,
                  msg: 'success',
                })

              }
            })
          } catch (e) {
            // console.log(e);
          }
        } else {
          let val = ''

          let current_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
          const { openid, number, title, prize_origin, prize_now, content, cid } = req.body
          let sql = `INSERT INTO comodity (user_id, title, content, number, price_origin, price_now, img_url, status, create_time, update_time, cid, swiper_url) values ('${openid}','${title}','${content}',${number},${prize_origin},${prize_now},` + `'/static/img/${req.body.openid}/${num + 1}.jpg'` + `,0,'${current_time}','${current_time}','${cid}', '');SELECT @@identity AS comodity_id`
      
          func.connPool(sql, val, (err, rows) => {
            if (err) {
              res.json({
                code: 201,
                msg: 'defealt',
              })
      
            } else {
              res.json({
                code: 200,
                msg: 'success',
              })
              console.log(rows[0].insertId);
              primary_key = rows[0].insertId
            }
          })
        }
      })
    })
  },

}
