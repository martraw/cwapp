const express = require('express')
const router = express.Router()
const fse = require('fs-extra')
const path = require('path')

// @route   /directory/newDir/:newDirName'
// @desc    Tworzy nowy katalog w katalogu Orders

router.post('/newDir/:newDirName', (req, res) => {
  const newDirecotyName = req.params.newDirName
  const newDirecotyPath = path.resolve(__dirname, '../../Orders', newDirecotyName)

  fse.mkdir(newDirecotyPath, err => {
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

// @route   /directory/removeDir/:dirName
// @desc    Usuwa katalog wraz z zawartością

router.delete('/removeDir/:dirName', (req, res) => {
  const directoryName = req.params.dirName
  const directoryPath = path.resolve(__dirname, '../../Orders', directoryName)

  fse.remove(directoryPath)
    .then(() => res.json({
      message: `Usunięto katalog ${directoryName}`
    }))
    .catch(err => res.status(500).json({
      error: err
    }))
})

module.exports = router