const express = require("express");
const { isNameValid , isPasswordValid} = require("./utils/validator");

const app = express();
app.use(express.urlencoded({ extended: false }));

const PORT = 5050;

app.get("/", (req, res) => {
  res.send(`
  <form method="POST">
    <label for="name">Name</label>
    <input type="name" name="name" id="name" />

    <label for="password">Password</label>
    <input type="password" name="password" id="password" />

  <input type="submit" name="value" />
</form>
  `);
});

app.post("/", (req, res) => {
  const { name, password } = req.body;

  if (!isNameValid(name)) {
    return res.status(400).send("Invalid name!");
  }

  if (!isPasswordValid(password)) {
    return res.status(400).send("Invalid password!");
  }

  console.log(name, password);
  res.send("Ok!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT} ...`);
});
