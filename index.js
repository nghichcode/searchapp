const express = require('express')
const {sites} = require('./app/sites.js')
const {pages} = require('./app/pages.js')

const app = express()
const port = 3000

app.use('', express.static('frontend'))

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})
app.get('/sites/search', sites)
app.get('/pages/search', pages)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})