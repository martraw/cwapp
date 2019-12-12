const express = require('express')
const router = express.Router()
const path = require('path')

const getListOfFiles = require('../Helpers/getListOfFiles')

// @route   /listassets
// @desc    Zwraca tablicę z listą plików znajdujących się w katalogu Assets

router.get('/', (req, res) => {
  const assetsDir = path.resolve(__dirname, '../../Assets')

  const assetsList = getListOfFiles(assetsDir)

  res.json({
    assetsList
  })
})

module.exports = router