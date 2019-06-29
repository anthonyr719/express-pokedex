var express = require('express');
var router = express.Router();
var db = require('../models');


// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  // call db.pokemon.findAll
  //get data and render it into an ejs
  res.send('Render a page of favorites here');
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  // TODO: Get form data and add a new record to DB
  // call db.pokemon.create and pass in the data from the form
  // when the promise returns, we need to redirect to /pokemon
  res.send(req.body);
});

// GET /pokemon/:id - Gets one pokemon id from the database
// and uses it to look up details about that one pokemon
router.get('/:id', function(req, res) {
  // look up pokemon in our db by its ID (findByPK)
  // use the pokemon name form the db to query the api for deatils on that one pokemon
  // take data from the api and render a deatil/show page for this one pokemon
  res.send("this is the route for showing one pokemon");
})



module.exports = router;



