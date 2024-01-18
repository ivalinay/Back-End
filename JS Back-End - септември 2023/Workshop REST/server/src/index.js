const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 3030;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Orgin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  next()
});

console.log("works!");

app.get("/", (req, res, next) => {
  res.send("Hello from RESTful API!");
});

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
