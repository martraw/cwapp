const fs = require('fs')
const path = require('path')

// Tworzy listę plików w katalogu i podkatalogach (rekurencja).
// Zwraca tablicę obiektów z nazwami i ścieżkami do plików.
const getListOfFiles = (dirPath, filesArray) => {
  const files = fs.readdirSync(dirPath)

  filesArray = filesArray || []

  files.forEach(file => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      getListOfFiles(path.join(dirPath, file), filesArray)
    } else {
      filesArray.push({
        fileName: file,
        filePath: path.join(dirPath, file)
      })
    }
  })
  return filesArray
}

module.exports = getListOfFiles