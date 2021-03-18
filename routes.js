const express = require("express");
const routes = express.Router();
const pool = require('./connection');


// code to retrieve profile and library list
// routes.get("/routes", (req, res) => {
//   pool.query("SELECT * FROM library").then ((result) => {
//     res.status(200).json(result.rows);
//   })
// })

routes.get("/routes", (req, res) => {
  let readername = req.query.reader;
  console.log(readername);
  if (readername) {
    pool.query('SELECT * FROM library WHERE name = $1', [readername]).then((result) => {
      const books = result.rows;
      console.log(books);
      res.status(200).json(books);
    });
  } else {
    pool.query('INSERT INTO library (name, status, title, author, category) VALUES ($1, $2, $3, $4, $5)',
    ['Benny','Read', 'The Stand', 'Stephen King', 'Thriller']).then((result) =>
    {res.status(201).json(books)})
    // res.json("test")
  }
});

routes.post("/routes", (req, res) =>{
<<<<<<< HEAD
  let book = req.body;   
  pool.query(`INSERT INTO library (name, status, title, author, category) VALUES ($1, $2, $3, $4, $5)`,
  [readername, book.status, book.title, book.author, book.category]).then((result) =>{
=======
  let book = req.body;
  console.log(req.body);
  pool.query(`INSERT INTO library (name, status, title, author, category) VALUES ($1, $2, $3, $4, $5)`,
  [book.readername, book.status, book.title, book.author, book.category]).then((result) =>{
>>>>>>> master
        res.status(201).json(book)
    });
});


routes.get("/healthcheck", (req, res) => {

  res.json('YAY');

});


module.exports = routes;


