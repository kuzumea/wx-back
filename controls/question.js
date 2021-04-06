let func = require('../sql/func')
const moment = require('moment')

module.exports = {
  question (req, res) {
    let val = ''
    // let openid = req.query.openid
    let current_time = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
    let { comody_id, user_id, content } = req.query
    // console.log(req.query);
    let sql = `INSERT INTO comody_question (comody_id,user_id,content,create_time,is_deleted) values ('${comody_id}','${user_id}','${content}','${current_time}',0)`
    try {
      func.connPool(sql, val, (err, rows) => {
        if (rows) {
          res.json({
            code: 200,
            msg: 'success',
          })
        } else {
          res.json({
            code: 201,
            msg: 'failed'
          })
        }
      })
    } catch (e) {
      // console.log(e);
    }
  },

  getQuestion (req, res) {
    let val = ''
    let { comody_id } = req.query
    console.log(req.query);
    // let sql = `SELECT * FROM comody_question WHERE comody_id = "${comody_id}"`
    let sql = `SELECT
    user.name, 
    user.avatar_url, 
    comody_question.question_id, 
    comody_question.content, 
    comody_question.create_time, 
    comody_question.user_id
  FROM
    comody_question,
    user
  WHERE
    comody_question.user_id = user.openid and comody_question.comody_id = ${comody_id} and comody_question.is_deleted = 0`
    try {
      func.connPool(sql, val, (err, rows) => {
        if (rows) {
          console.log(rows);
          res.json({
            code: 200,
            msg: 'success',
            data: rows
          })
        } else {
          res.json({
            code: 201,
            msg: 'failed'
          })
        }
      })
    } catch (e) {
      // console.log(e);
    }
  }
}