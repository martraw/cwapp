const express = require('express')
const router = express.Router()
const fse = require('fs-extra')
const path = require('path')

const getOrders = require('../Helpers/getOrders')

// @route   /file/copy
// @desc    Kopiuje plik z podanej lokalizacji źródłowej do lokalizacji docelowej
router.post('/copy', (req, res, next) => {
  const { srcPath, fileName, dstPath } = req.body

  fse.copy(srcPath, path.resolve(dstPath, fileName))
    .then(() => {
      res.json({
        success: `Skopiowano plik ${fileName} do katalogu ${dstPath}`
      })
    })
    .catch(err => {
      next(err)
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

router.post('/makeOrders', (req, res, next) => {
  const orderList = req.body.orderList
  const ordersDirPath = path.resolve(__dirname, '../../Orders')
  let curentDir = orderList.length <= 15 ? `1 - ${orderList.length}` : `1 - 15`

  orderList.forEach(orderItem => {
    const { index, matchingAsset } = orderItem

    if (matchingAsset) {
      try {
        fse.copySync(matchingAsset.filePath, `${ordersDirPath}/${curentDir}/${index < 10 ? `0${index}`: index} - ${matchingAsset.fileName}`)
      } catch (err) {
        next(err)
      }

      if (index % 15 === 0) {
        curentDir = `${index + 1} - ${index + 15}`
        curentDir = index + 15 > orderList.length ? `${index + 1} - ${orderList.length}` : `${index + 1} - ${index + 15}`
        fse.mkdirSync(`${ordersDirPath}/${curentDir}`)
      }
    }
  })
  const ordersContent = getOrders(ordersDirPath)

  res.json({ ordersContent: ordersContent })
})

module.exports = router