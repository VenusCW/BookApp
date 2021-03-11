const express = require("express");
const routes = express.Router();
const pool = require('./connection');


// code to retrieve profile and library list

routes.get("/routes", (req, res) => {

    pool.query('SELECT * FROM books').then(result => {
        const items = result.rows;
        res.json(items);
        res.status(200);
    });
});    

routes.get("/healthcheck", (req, res) => {

        res.json('YAY');
        
    });


module.exports = routes;
