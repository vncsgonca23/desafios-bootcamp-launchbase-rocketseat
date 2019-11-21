const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const revenueData = require('./data');

server.use(express.static('public'));
server.set('view engine', 'njk');
nunjucks.configure('views', {
  express: server,
});

server.get('/', (req, res) => {
  res.render('home', { items: revenueData });
});
server.get('/about', (req, res) => {
  res.render('about');
});
server.get('/revenue', (req, res) => {
  res.render('revenue', { items: revenueData });
});
server.get('/recipe', (req, res) => {
  const { id } = req.query;
  const recipe = revenueData.find(recipeId => {
    return recipeId.id === id;
  });
  if (!recipe) {
    return res.send('Recipe not found');
  }
  return res.render('recipe', { item: recipe });
});
server.listen(3000);
