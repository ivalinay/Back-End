function arrivingInKathmandu(input) {
  let pattern = /^([a-zA-Z0-9!@#$?]+)=(\d+)<<(.+)$/;

  for (let i = 0; i < input.length; i++) {
    let line = input[i];

    if (line === "Last note") break;

    let match = pattern.exec(line);
    if (!match) {
      console.log("Nothing found!");
      continue;
    }

    let [_, name, length, geohash] = match;
    if (geohash.length !== Number(length)) {
      console.log("Nothing found!");
      continue;
    }

    let chars = ["!", "@", "#", "$", "?"];
    for (let char of chars) {
      while (name.includes(char)) {
        name = name.replace(char, "");
      }
    }

    console.log(`Coordinates found! ${name} -> ${geohash}`);
  }
}
arrivingInKathmandu([
  "!@Ma?na?sl!u@=7<<tv58ycb4845",
  "E!ve?rest=.6<<tuvz26",
  "!K@2.,##$=4<<tvnd",
  "!Shiha@pan@gma##9<<tgfgegu67",
  "!###Anna@pur@na##=16<<tv5dekdz8x11ddkc",
  "Last note",
]);

arrivingInKathmandu([
  "Ka?!#nch@@en@ju##nga@=3<<thfbghvn",
  "=9Cho?@#Oyu<<thvb7ydht",
  "Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6",
  "Dhau??la#gi@ri?!#=3<<bvnfhrtiuy",
  "Last note",
]);
