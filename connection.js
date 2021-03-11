//const { Pool } = require("pg");
//const credentials = new Pool({
//  user: "tezryfvdmbtiyc",
//  password: "09f19d3c2eaf62b4c4a8d2d8880ee07034a03300e42ccc00f5640e85bae25f4b",//
//  host: "ec2-54-164-22-242.compute-1.amazonaws.com",
//  port: 5432,
//  database: "d1d7rgap4vkoce",
//  ssl: false/
// };
// module.exports = credentials;

const { Pool } = require('pg');

try {
	// When not running via Heroku, this will load the .env file.
	require('dotenv').config();
} catch (e) {
	// When running with Heroku, dotenv doesn't need to be available.
}
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
	connectionString: connectionString,
	ssl: connectionString.includes('localhost')
		? false
		: { rejectUnauthorized: false },
});

module.exports = pool;