const express = require("express");
const app = express();
const profile = require("./routes");

const cors = require("cors");
app.use(cors());

app.use("/", profile);
app.use(express.json());

app.use(express.static(__dirname + "/public")); 

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));
