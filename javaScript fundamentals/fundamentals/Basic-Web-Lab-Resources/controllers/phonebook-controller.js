const Contact = require("../models/Contact");
const phonebook = require("../phonebook");

module.exports = {
  index: (req, res) => {
    let contacts = phonebook.getContacts();
    res.render("index", {contacts: contacts});
  },
  addPhonebookPost: (req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    let contact = new Contact(name, number);
    phonebook.addContact(contact);
    res.redirect('/');
    // TODO: add a phonebook object to the array
  },
};
