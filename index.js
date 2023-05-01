const express = require('express')
const app = express()
const port = 7000;
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');


app.get('/', (req, res) => {
  res.send('Chefs are cooking')
})
app.get('/chefs', (req, res)=>{
    res.send(chefs);
})
app.get('/recipes', (req, res)=>{
    res.send(recipes);
})



app.listen(port, () => {
  console.log(`Chefs are cooking on port ${port}`)
})