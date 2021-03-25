const express = require("express");
const routes = express.Router();
const pool = require('./connection');


// code to retrieve profile and library list
// routes.get("/routes", (req, res) => {
//   pool.query("SELECT * FROM library").then ((result) => {
//     res.status(200).json(result.rows);
//     console.log(result.rows)
//   })
// })

routes.get("/routes", (req, res) => {
  let readername = req.query.reader;
  console.log(readername);
  if (readername) {
    pool.query('SELECT * FROM library WHERE name = $1', [readername]).then((result) => {
      const books = result.rows;
      console.log(books);

      return res.status(200).json(books);
    });
    //   } else {
    //     pool.query('INSERT INTO library (name, status, title, author, category) VALUES ($1, $2, $3, $4, $5)',
    //       [readername, status, 'The Stand', 'Stephen King', 'Thriller']).then((result) => { res.status(201).json(result.rows) })
    //     // res.json("test")
    //   }
  };
});

routes.post("/routes", (req, res) => {
  let book = req.body;

  console.log(req.body);
  pool.query(`INSERT INTO library (name, status, title, author, category) VALUES ($1, $2, $3, $4, $5)`,
    [book.readername, book.status, book.title, book.author, book.category]).then((result) => {
      res.status(201).json(result.rows)
    });
});

//add a new .post with a different end point
routes.post('/searchInput', (req, res) => {
  let newSearchBook = req.body;
  console.log(newSearchBook);
  pool.query(`INSERT INTO library (name, status, title, author, category) VALUES ($1, $2, $3, $4, $5)`,
    [newSearchBook.readername, newSearchBook.status, newSearchBook.title, newSearchBook.author, newSearchBook.category]).then
    ((result) => {
      const newBookDets = result.rows.map((result) => {
        const newResult = result;
        newResult[newSearchBook.title] = result.title;
        newResult[newSearchBook.status] = result.status;
        newResult[newSearchBook.author] = result.author;

        return newResult;
      })
      res.status(201).json(newBookDets);
    })
});

routes.get("/healthcheck", (req, res) => {

  res.json('YAY');

});


module.exports = routes;


