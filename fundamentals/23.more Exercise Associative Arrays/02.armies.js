function leaders(input) {
  class Army {
    constructor(name, count) {
      this.name = name;
      this.count = Number(count);
    }
  }
  let leaders = {};

  for (let line of input) {
    if (line.includes("arrives")) {
      let leader = line.replace(" arrives", "");
      leaders[leader] = [];
    } else if (line.includes(":")) {
      let split = line.split(": ");
      let leader = split[0];
      if (leaders[leader] == undefined) {
        continue;
      }

      let armyLine = split[1];
      let armySplit = armyLine.split(", ");
      let armyName = armySplit[0];
      let armyCount = armySplit[1];
      let army = new Army(armyName, armyCount);
      leaders[leader].push(army);
    } else if (line.includes("+")) {
      let split = line.split(" + ");
      let armyName = split[0];
      let armyCount = Number(split[1]);

      for (const leader of Object.keys(leaders)) {
        let armies = leaders[leader];
        for (const army of armies) {
          if (army.name === armyName) {
            army.count += armyCount;
            break;
          }
        }
      }
    } else {
      let leader = line.replace(" defeated", "");
      delete leaders[leader];
    }
  }

  let entries = Object.entries(leaders);
  let sorted = entries.sort((a, b) => {
    let firstTotal = a[1].reduce((accumulator, army) => {
      return accumulator + army.count;
    }, 0);

    let secondTotal = b[1].reduce((accumulator, army) => {
      return accumulator + army.count;
    }, 0);

    return secondTotal - firstTotal;
  });

  for (let [leader, armies] of sorted) {
    let totalArmy = armies.reduce((accumulator, army) => {
      return accumulator + army.count;
    }, 0);
    console.log(`${leader}: ${totalArmy}`);

    for (const army of armies.sort((a, b) => b.count - a.count)) {
      console.log(`>>> ${army.name} - ${army.count}`);
    }
  }
}

leaders([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
