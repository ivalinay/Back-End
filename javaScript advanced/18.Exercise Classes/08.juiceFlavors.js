function produceBottles(juices) {
  let juiceQuantities = {};
  let bottles = {};

  for (let juice of juices) {
    let [juiceName, juiceQuantity] = juice.split(" => ");
    juiceQuantity = Number(juiceQuantity);

    if (!juiceQuantities.hasOwnProperty(juiceName)) {
      juiceQuantities[juiceName] = 0;
    }

    juiceQuantities[juiceName] += juiceQuantity;

    if (juiceQuantities[juiceName] >= 1000) {
      let bottlesCount = Math.floor(juiceQuantities[juiceName] / 1000);
      juiceQuantities[juiceName] -= bottlesCount * 1000;

      if (!bottles.hasOwnProperty(juiceName)) {
        bottles[juiceName] = 0;
      }

      bottles[juiceName] += bottlesCount;
    }
  }

  let output = "";
  for (let [juiceName, bottleCount] of Object.entries(bottles)) {
    output += `${juiceName} => ${bottleCount}\n`;
  }

  return output.trim();
}

let juices = ["Orange => 2000", "Peach => 1432", "Banana => 450", "Peach => 600", "Strawberry => 549"];

let result = produceBottles(juices);
console.log(result);
