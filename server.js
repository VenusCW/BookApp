const express = require("express");
const app = express();
const profile = require("./routes");

app.use("/", profile);
app.use(express.json());

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));
