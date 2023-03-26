function extractEmails(text) {
  let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@[a-z]+\-?[a-z]+(\.[a-z]+)+/g;
  let emails = text.match(pattern);

  for (let email of emails) {
    console.log(email);
  }
}
extractEmails(
  "Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de."
);
