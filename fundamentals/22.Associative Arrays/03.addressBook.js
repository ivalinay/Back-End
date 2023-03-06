function addressBook(address) {
  let addressBook = {};

  for (let line of address) {
    let [name, address] = line.split(":");
    addressBook[name] = address;
  }
  let sorted = Object.entries(addressBook);
  sorted.sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name, address] of sorted) {
    console.log(`${name} -> ${address}`);
  }
}
addressBook(["Tim:Doe Crossing", "Bill:Nelson Place", "Peter:Carlyle Ave", "Bill:Ornery Rd"]);
