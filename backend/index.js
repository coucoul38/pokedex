var cors = require('cors');

const express = require("express");
const dbo = require("./db/db");
const app = express();
app.use(cors());
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
  const dbConnect = dbo.getDb();
  var sortOrder = { no : 1 };
  dbConnect
    .collection("pokemons")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .sort(sortOrder)
    .toArray(function (err, result){
      if (err) {
        console.log("Couldnt fetch pokemons");
        res.status(400).send("Error fetching pokemons!");
      } else {
        //console.log("Pokemons fetched");
        res.json(result);
      }
    });
});

//----------Add a pokemon to the Pokedex----------
app.post('/pokedex/insert', (req, res) => {
  const dbConnect = dbo.getDb();

  const name = req.query.name;
  const no = req.query.no;
  let input = {"name": name, "no": no/*, "img": 'https://img.pokemondb.net/sprites/sword-shield/icon/'+name.toLowerCase()+'.png'*/};

  console.log('Object to send: ',input);

  dbConnect
    .collection("pokemons")
    .insertOne(input, function(err) {
      if (err) {
        console.log("Couldnt add pokemon");
        res.status(400).send("Couldn't add pokemon")
      } else {
        //return data of the newly added pokemon
        console.log("Added pokemon");
        res.send(input)
      }
    });
});

//----------Delete a pokemon from the Pokedex----------
app.delete('/pokedex/delete', (req, res) => {
  const dbConnect = dbo.getDb();

  const no = req.query.no;
  console.log("Deleting No: ", no);
  const myQuery = {no: no};
  
  //find the pokemon name
  dbConnect
    .collection("pokemons")
    .findOne(myQuery)
    .then(function (pkmn,err) {
      /*console.log(err);
      console.log(pkmn);*/
      if(err || !pkmn){
        console.log("Couldnt delete pokemons");
        console.log("Pokemon no received: "+no)
        res.send("Not found for #"+no);
      } else {
          //Delete the pokemon in all collections
        dbConnect.collection("pokemons").deleteOne(myQuery);
        dbConnect.collection("unlocked").deleteOne(myQuery);
        console.log("Deleted "+pkmn.name);
        res.send("Deleted "+pkmn.name);
      }
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
        console.log("Couldnt fetch pokemons");
        res.status(400).send("Error fetching pokemons!");
      } else {
        //console.log("Got unlocked pokemons");
        res.json(result);
      }
    });
});

//----------Move a pokemon from the Pokedex to unlocked----------
app.post('/unlocked/insert', (req, res) => {
  const dbConnect = dbo.getDb()

  const name = req.query.name;
  const no = req.query.no;
  let query = {"no": no};

  console.log('Object to send: ',query);

  dbConnect.collection("pokemons").find(query).toArray(function (err, result) {
    if(err){
      console.log("Pokemon not found");
      res.status(404).send("Pokemon not found");
    }
    pkmn = result[0];
    /*console.log("Unlocked ",pkmn.name);
    res.json(pkmn);*/
    dbConnect.collection("unlocked").insertOne(pkmn, function(err){
      if(err){
        console.log("Couldnt unlock pokemons");
        res.status(400).send("Couldnt unlock pokemon")
      } else {
        console.log("Unlocked "+pkmn.name);
        res.status(200).send("Unlocked "+pkmn.name)
      }
    });
  });
});

//----------Release a captured pokemon----------
app.post('/unlocked/release', (req, res) => {
  const dbConnect = dbo.getDb();

  const no = req.query.no;
  console.log("Deleting No: ", no);
  const myQuery = {no: no};
  
  //find the pokemon name
  dbConnect
    .collection("unlocked")
    .findOne(myQuery)
    .then(function (pkmn,err) {
      /*console.log(err);
      console.log(pkmn);*/
      if(err || !pkmn){
        console.log("Couldnt delete pokemons");
        res.send("Not found for #"+no);
      } else {
          //Delete the pokemon only in the collection "unlocked"
        dbConnect.collection("unlocked").deleteOne(myQuery);
        console.log("Released "+pkmn.name);
        res.send("Released "+pkmn.name);
      }
  });
});
