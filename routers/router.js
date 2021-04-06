const express  = require('express')
const api = require('../api')
const router = express.Router()

const user = require('../controls/user')
const pub = require('../controls/pub')
const home = require('../controls/home')
const question = require('../controls/question')

var mul = require('connect-multiparty')
var mult = mul()
// user
router.get(api.login, user.login)
router.get(api.sign, user.sign)
router.get(api.search, user.search)
router.get(api.saveInfo, user.saveInfo)
// pub
router.post(api.upload,mult, pub.upload)
// home
router.get(api.getList, home.getList)
router.get(api.getDetail, home.getDetail)
// quetion
router.get(api.question,question.question)
router.get(api.getQuestion,question.getQuestion)

module.exports = router