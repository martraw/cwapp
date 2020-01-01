const fs = require('fs')
const path = require('path')

const getListOfFiles = require('./getListOfFiles')

// Tworzy listę plików w katalogu i podkatalogach (rekurencja).
// Zwraca tablicę obiektów z nazwami i ścieżkami do plików.

const getOrders = dirPath => {
  const files = fs.readdirSync(dirPath)
  const directoryArr = files.filter(item => fs.statSync(path.join(dirPath, item)).isDirectory())
  const ordersDirContents = []

  directoryArr.forEach(item => {
    ordersDirContents.push({
      directoryName: item,
      // directoryContent: fs.readdirSync(path.join(dirPath, item))
      directoryContent: getListOfFiles(path.join(dirPath, item))
    })
  })

  return ordersDirContents
}

module.exports = getOrders