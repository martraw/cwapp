const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')

// @route   /newDir/:newDirName'
// @desc    Tworzy nowy katalog w katalogu Orders

router.post('/newDir/:newDirName', (req, res) => {
  const newDirecotyName = req.params.newDirName
  const newDirecotyPath = path.resolve(__dirname, '../../Orders', newDirecotyName)

  fs.mkdir(newDirecotyPath, err => {
    if (err) {
      res.status(500).json({
        error: err
      })
    } else {
      res.json({
        message: `Utworzono katalog ${newDirecotyName}`,
        path: newDirecotyPath
      })
    }
  })
})

module.exports = router