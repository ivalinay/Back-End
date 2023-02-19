function muOnline(input) {
  let dangerousRooms = input.split("|");

  let health = 100;
  let bitcoins = 0;

  for (let index = 0; index < dangerousRooms.length; index++) {
    const element = dangerousRooms[index];

    let commandParts = element.split(" ");
    let command = commandParts[0];
    let amount = Number(commandParts[1]);

    if (command === "potion") {
      if (health + amount > 100) {
        amount = 100 - health;
      }
      health += amount;
      console.log(`You healed for ${amount} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === "chest") {
      bitcoins += amount;
      console.log(`You found ${amount} bitcoins.`);
    } else {
      health -= amount;
      if (health <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${index + 1}`);
        return;
      }

      console.log(`You slayed ${command}.`);
    }
  }

  console.log(`You've made it!`);
  console.log(`Bitcoins: ${bitcoins}`);
  console.log(`Health: ${health}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
