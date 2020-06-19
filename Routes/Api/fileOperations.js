const express = require('express')
const router = express.Router()
const fse = require('fs-extra')
const path = require('path')
const checkLeadingZero = require('../Helpers/leadingZero')

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


// @route   /file/makeOrders
// @desc    Tworzy odpowiednie katalogi i kopuiuje odpowiednio noazwane pliki do katalogów
router.post('/makeOrders', (req, res, next) => {
  const orderList = req.body.orderList
  const devider = req.body.devider // Devider określa po ile plików ma być w podkatalogach tworzonych w katalogu Orders
  const ordersDirPath = path.resolve(__dirname, '../../Orders')
  let curentDir = orderList.length <= devider ? `01 - ${checkLeadingZero(orderList.length)}` : `01 - ${checkLeadingZero(devider)}`

  
  orderList.forEach(orderItem => {
    const { index, matchingAsset } = orderItem

    if (matchingAsset) {
      try {
        fse.copySync(matchingAsset.filePath, `${ordersDirPath}/${curentDir}/${index < 10 ? `0${index}`: index} - ${matchingAsset.fileName}`)
      } catch (err) {
        next(err)
      }

      if (index % devider === 0 && index < orderList.length) {
        curentDir = index + devider > orderList.length ? `${checkLeadingZero(index + 1)} - ${orderList.length}` : `${checkLeadingZero(index + 1)} - ${checkLeadingZero(index + devider)}`
        fse.mkdirSync(`${ordersDirPath}/${curentDir}`)
      }
    }
  })
  const ordersContent = getOrders(ordersDirPath)

  res.json({ ordersContent: ordersContent })
})

module.exports = router