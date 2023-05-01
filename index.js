const express = require('express')
const app = express()
const port = 7000;


app.get('/', (req, res) => {
  res.send('Chefs are cooking')
})


app.listen(port, () => {
  console.log(`Chefs are cooking on port ${port}`)
})