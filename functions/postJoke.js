require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var mongoURI = process.env.mongoURI;//mongodb+srv://user:pass@server.net/test?retryWrites=true';
var mongoDatabase = process.env.mongoDatabase;
var mongoCollection = process.env.mongoCollection;


exports.handler = function (event, context, callback) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  var parsedBody = JSON.parse(event.body);
  MongoClient.connect(mongoURI, {
    useNewUrlParser: true
  }, function (err, client) {
    if (err) console.error(err);
    var db = client.db(mongoDatabase);
    db.collection(mongoCollection).insertOne(parsedBody, function (err, res) {
      if (err) {
        console.error(err);
      }
      client.close();
    });
  });

  return {
    statusCode: 200,
    //body: `Hello, ${event}`,
    body: event.body
  };
};