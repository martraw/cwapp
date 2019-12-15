const express = require('express')
const router = express.Router()
const fse = require('fs-extra')
const path = require('path')


// @route   /file/copy
// @desc    Kopiuje plik z podanej lokalizacji źródłowej do lokalizacji docelowej
router.post('/copy', (req, res) => {
  const { srcPath, fileName, dstPath } = req.body

  fse.copy(srcPath, path.resolve(dstPath, fileName))
    .then(() => {
      res.json({
        success: `Skopiowano plik ${fileName} do katalogu ${dstPath}`
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      })
    })
})

// @route   /file/remove
// @desc    Usuwa plik z podanej lokalizacji 
router.delete('/remove', (req, res, next) => {
  const { filePath, fileName } = req.body

  fse.pathExists(filePath)
    .then(exists => {
      if (exists) {
        fse.remove(filePath)
          .then(() => res.json({
            message: `Usunięto plik ${fileName}`
          }))
      } else {
        throw new Error(`Nie odnaleziono pliku ${filePath}`)
      }
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router