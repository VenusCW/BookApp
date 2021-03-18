const express = require("express");
const routes = express.Router();
const pool = require('./connection');


// code to retrieve profile and library list
routes.get("/routes/library", (req, res) => {
  pool.query("SELECT * FROM library").then ((result) => {
    res.status(200).json(result.rows);
  })
})

routes.get("/routes", (req, res) => {
  let readername = req.query.reader;
  let book = req.query.title;
  console.log(readername);
  if (readername) {
    pool.query('SELECT * FROM library WHERE name = $1', [readername]).then((result) => {
      const books = result.rows;
      console.log(books);
      res.status(200).json(books);
    });
  }
  //  else {
  //   pool.query('INSERT INTO library (name, status, title, author, category) VALUES ($1, $2, $3, $4, $5)',
  //   [readername]).then((results) =>
  //   {res.status(201).json(books)})
  //   // res.json("test")
  // }
  });

routes.get("/healthcheck", (req, res) => {

  res.json('YAY');

});


module.exports = routes;


