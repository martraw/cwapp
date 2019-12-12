const express = require('express')
const router = express.Router()

// @route   /test
// @desc    Route testowy
router.get('/test', (req, res) => res.json({
  message: 'Test succesful!!!'
}))

module.exports = router