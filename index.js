const express = require('express')
const app = express()
const port = 7000;
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');
const categories = require('./data/foodCategory.json');
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Chefs are cooking')
})
app.get('/chefs', (req, res)=>{
    res.send(chefs);
})
app.get('/recipes', (req, res)=>{
    res.send(recipes);
})
app.get('/categories', (req, res)=>{
    res.send(categories);
})



app.listen(port, () => {
  console.log(`Chefs are cooking on port ${port}`)
})