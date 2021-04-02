const express  = require('express')
const api = require('../api')
const router = express.Router()
const user = require('../controls/user')
const pub = require('../controls/pub')
var mul = require('connect-multiparty')
var mult = mul()
// user
router.get(api.login, user.login)
router.get(api.sign, user.sign)
router.get(api.search, user.search)
router.get(api.saveInfo, user.saveInfo)
// pub
router.post(api.upload,mult, pub.upload)
module.exports = router