const express = require("express");
const dbo = require("./db/db");
const app = express();
const port = 4444;
const bodyParser = require('body-parser');

dbo.connectToServer();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello Gorld!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

app.post('/pokedex/insert', (req, res) => {
  const body = req.body;
  console.log('Got body: ', body);

  const name = req.query.name;
  const no = req.query.no;
  const img = req.query.img;

  input = {"name": name, "no": no, "img": img};
  let obj = JSON.stringify(input);
  console.log('Object to send: ',obj);

  const dbConnect = dbo.getDb();
  dbConnect
    .collection("pokemons")
    .insertOne(obj);
  res.json(req.body.name)
  /*console.log('name: '+name);
  console.log('no: '+no);
  console.log('img: '+img);*/

  

  //dbo.collection("pokemons").insert(obj);
  
  
  //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
  res.json(body);
});

//Get pokemons from db
app.get("/pokedex/pokemons", function (req, res) {
  //connexion à la db mongo db
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
    .collection("pokemons")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .toArray(function (err, result){
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });
});
