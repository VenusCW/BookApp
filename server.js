const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use("/", routes);


app.use(express.static(__dirname + "/public"));

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
  next(); // Important
})

const port = process.env.PORT || 3000;

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
