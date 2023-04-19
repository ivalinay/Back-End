function softUniBarIncome(data) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.0-9]*(?<price>[0-9]+.?\d*)\$/;
  let total = 0;

  for (let line of data) {
    let match = [];
    if (line === "end of shift") {
      break;
    }
    if (pattern.test(line)) {
      match = line.match(pattern);
      let price = Number(match.groups.count) * Number(match.groups.price);
      total += price;
      console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
softUniBarIncome(["%George%<Croissant>|2|10.3$", "%Peter%<Gum>|1|1.3$", "%Maria%<Cola>|1|2.4$", "end of shift"]);
