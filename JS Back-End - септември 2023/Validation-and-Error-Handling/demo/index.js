const express = require("express");
const { isNameValid, isPasswordValid } = require("./utils/validator");
const { isPasswordValidLength } = require("./midlewares/midleware");
const isStrongPassword = require("validator/lib/isStrongPassword");
const isEmail = require("validator/lib/isEmail");

const app = express();
app.use(express.urlencoded({ extended: false }));

const PORT = 5050;

app.get("/", (req, res) => {
  res.send(`
  <form method="POST">
    <label for="name">Name</label>
    <input type="name" name="name" id="name" />

    <label for="email">Email</label>
    <input type="email" name="email" id="email" />

    <label for="password">Password</label>
    <input type="password" name="password" id="password" />

  <input type="submit" name="value" />
</form>
  `);
});

//Saas => software as a service
app.post("/", isPasswordValidLength, (req, res) => {
  const { name, password, email } = req.body;
  console.log(name, password, email);

  //Guard clauses!
  if (!isNameValid(name)) {
    return res.status(400).send("Invalid name from custom validator!");
  }

  // if (!isPasswordValid(password)) {
  //   return res.status(400).send("Invalid password from custom validator!");
  // }

  if (!isEmail(email)) {
    return res.status(404).send("Email is not valid!");
  }

  if (!isStrongPassword(password)) {
    return res.status(404).send("Weak password!");
  }

  res.send("Ok!");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT} ...`));
