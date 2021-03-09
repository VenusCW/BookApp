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

// const express = require("express");
// const proxy = require("express-http-proxy");

// const app = express();
// const port = process.env.PORT || 8080;
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());

// const url = "https://www.googleapis.com/books/v1/volumes";

// app.use(
//   "/",
//   proxy(url, {
//     userResHeaderDecorator: () => ({ "Access-Control-Allow-Origin": "*" }),
//   })
// );

// app.listen(port, (_) => {
//   console.log(`Listening on http://localhost:${port}`);
// });
