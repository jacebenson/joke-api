'use strict';
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const mongoURI = process.env.mongoURI;//mongodb+srv://user:pass@server.net/test?retryWrites=true';
const mongoDatabase = process.env.mongoDatabase;
const mongoCollection = process.env.mongoCollection;
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const jokes = require('../jokes');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(jokes.joke());
  res.end();
});
router.get('/joke/id/:id', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(jokes.joke(req.params.id));
  res.end();
});
router.get('/joke/many/:n', (req, res) => {
  var n = parseInt(req.params.n,10);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(jokes.jokes(parseInt(req.params.n,10)));
  res.end();
});
router.post('/', (req, res) => res.json({ postBody: req.body }));
router.post('/joke/new', (req, res) => res.json({ postBody: req.body }));
router.get('/index.html', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  
  res.write('<h1>hello</h1>');
})
app.use(bodyParser.json());
app.use('/.netlify/functions/api', router);  // path must route to lambda
//app.use('/', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
