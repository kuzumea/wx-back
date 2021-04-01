const express  = require('express')
const api = require('../api')
const home = require('../controls/home')
const router = express.Router()
const homeControl = require('../controls/home')

// home
router.post(api.login, homeControl.login)
router.get(api.getHomeList, homeControl.list)
module.exports = router