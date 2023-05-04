const express = require('express')
const app = express()
const port = 7000;
const chefs = require('./data/chefs.json');
const foods = require('./data/foods.json');
const recipes = require('./data/recipes.json');
const categories = require('./data/foodCategory.json');
const blogs = require('./data/blogs.json');
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) => {
  res.send('Chefs are cooking')
})
app.get('/chefs', (req, res)=>{
    res.send(chefs);
})
app.get('/foods', (req, res)=>{
    res.send(foods);
})
app.get('/recipes', (req, res)=>{
    res.send(recipes);
})
app.get('/blogs', (req, res)=>{
    res.send(blogs);
})
app.get('/recipes/:id', (req, res)=>{
  const id = req.params.id;
  const chefsRecipes = recipes.filter(recipe => recipe.category == id);
  res.send(chefsRecipes);
})
app.get('/categories', (req, res)=>{
    res.send(categories);
})



app.listen(port, () => {
  console.log(`Chefs are cooking on port ${port}`)
})