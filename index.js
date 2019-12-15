const express = require('express');
const bodyParser = require('body-parser');

const testRoute = require('./Routes/Api/test')
const listAssets = require('./Routes/Api/listAssets')
const directoryOperations = require('./Routes/Api/directoryOperations')
const fileOperations = require('./Routes/Api/fileOperations')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Określa katalog w którym znajduje się build klienta
app.use(express.static('client/build'))

app.use('/listassets', listAssets)
app.use('/directory', directoryOperations)
app.use('/file', fileOperations)

// Obsługa błędów
app.use((req, res, next) => {
  const error = new Error('Kurza twarz! Coś poszło nie tak!')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res.json({
    error: {
      message: error.message
    }
  })
  
})

app.get('/', (req, res) => res.send('Helloooo'))

const port = 5000

app.listen(port, () => {
  console.log('applikacja działa')
})