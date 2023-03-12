function partyTime(guests) {
  let VIP = [];
  let regular = [];

  let party = false;
  for (let guest of guests) {
    if (guest === "PARTY") {
      party = true;
    }

    if (guest[0] >= "0" && guest[0] <= "9") {
      if (!party) {
        VIP.push(guest);
      } else {
        let index = VIP.indexOf(guest);
        if (index !== -1) {
          VIP.splice(index, 1);
        }
      }
    } else {
      if (!party) {
        regular.push(guest);
      } else {
        let index = regular.indexOf(guest);
        if (index !== -1) {
          regular.splice(index, 1);
        }
      }
    }
  }

  console.log(VIP.length + regular.length);
  VIP.forEach((x) => console.log(x));
  regular.forEach((x) => console.log(x));
}
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
