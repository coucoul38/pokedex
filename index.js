const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;
const bodyParser = require('body-parser');
const db = require("./db/db");
const { ConnectionCheckOutFailedEvent, ConnectionPoolReadyEvent } = require("mongodb");

dbo.connectToServer();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello Gorld!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

//**********POKEDEX*************//
//Get pokemons from db
app.get("/pokemons/list", function (req, res) {
  //connexion à la db mongo db
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  var sortOrder = { no : 1 };
  dbConnect
    .collection("pokemons")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .sort(sortOrder)
    .toArray(function (err, result){
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });
});

//----------Add a pokemon to the Pokedex----------
app.post('/pokedex/insert', (req, res) => {
  const body = req.body;
  console.log('Got body: ', body);

  const name = req.query.name;
  const no = req.query.no;
  const img = req.query.img;

  let input = {"name": name, "no": no, "img": img};
  console.log('Object to send: ',input);

  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokemons")
    .insertOne(input);
  res.json(req.body.name)
});

//----------Delete a pokemon from the Pokedex----------
app.post('/pokedex/delete', (req, res) => {
  const body = req.body;
  console.log('Got body: ', body);
  
  const dbConnect = dbo.getDb();

  const no = req.query.no;
  console.log("No: ", no);
  var myQuery = { no: no};

  dbConnect.collection("pokemons").find(myQuery).toArray(function (err, result) {
    pkmn = result[0].name;
    console.log("result.name: ",pkmn);
  });

  dbConnect.collection("pokemons").deleteOne( myQuery, function (err, obj) {
    if (err) throw err;
    res.send({ Deleted: pkmn });
  });
});


//**********POKEMONS*************//
//----------Get pokémon---//
app.get("/unlocked/list", function (req, res) {
  //connexion à la db mongo db
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  var sortOrder = { no : 1 };
  dbConnect
    .collection("unlocked")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .sort(sortOrder)
    .toArray(function (err, result){
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });
});

//----------Move a pokemon from the Pokedex to unlocked----------
app.post('/unlocked/insert', (req, res) => {
  const dbConnect = dbo.getDb();

  //get the number of the pokemon to unlock
  const no = req.query.no;

  //find the pokemon in the pokedex
  let myQuery = {"no": no};
  dbConnect
    .collection("pokemons")
    .find(myQuery)
    .toArray(function (err, result) {
      pkmn = result[0];
    });
  
  console.log('Object to send: ',pkmn);

  /*dbConnect
    .collection("unlocked")
    .insertOne(input);
  res.json(req.body.name)*/
});