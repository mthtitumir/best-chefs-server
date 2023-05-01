const express = require('express')
const app = express()
const port = 7000;
const chefs = require('./data/chefs.json');


app.get('/', (req, res) => {
  res.send('Chefs are cooking')
})
app.get('/chefs', (req, res)=>{
    res.send(chefs);
})


app.listen(port, () => {
  console.log(`Chefs are cooking on port ${port}`)
})