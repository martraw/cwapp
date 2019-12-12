const express = require('express');
const bodyParser = require('body-parser');

const testRoute = require('./Routes/Api/test')
const listAssets = require('./Routes/Api/listAssets')
const directoryOperations = require('./Routes/Api/directoryOperations')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Określa katalog w którym znajduje się build klienta
app.use(express.static('client/build'))

app.use('/listassets', listAssets)
app.use('/directory', directoryOperations)
// app.get('/test', (req, res) => res.json({message: 'Test JSON'}))
app.get('/', (req, res) => res.send('Helloooo'))

const port = 5000

app.listen(port, () => {
  console.log('applikacja działa')
})