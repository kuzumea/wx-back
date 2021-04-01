const express  = require('express')
const api = require('../api')
const home = require('../controls/home')
const router = express.Router()
const homeControl = require('../controls/home')

// home
router.get(api.login, homeControl.login)
router.get(api.sign, homeControl.sign)
router.get(api.search, homeControl.search)
router.get(api.saveInfo, homeControl.saveInfo)

module.exports = router