const { MongoClient } = require("mongodb");
const connectionString =
  "mongodb+srv://Coucoul38:licorneyolo@cluster0.yrjri16.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return err;
      }
      
      //remplacer whatever par le nom de votre DB !
      dbConnection = db.db("pokedex");
      console.log("Successfully connected to MongoDB.");
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
