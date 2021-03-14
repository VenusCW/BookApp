const express = require("express");
const routes = express.Router();
const pool = require('./connection');


// code to retrieve profile and library list

routes.get("/routes", (req, res) => {

    pool.query('SELECT * FROM library WHERE name = $1', [readername]).then ((result) => {
        const books = result.rows;
        res.json(books);
        res.status(200);
    });
});    

routes.get("/healthcheck", (req, res) => {

        res.json('YAY');
        
    });


module.exports = routes;


