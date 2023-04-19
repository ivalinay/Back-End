function inventory(heroes) {
  let register = [];

  class Hero {
    constructor(name, level, itemStr) {
      this.name = name;
      this.level = Number(level);
      this.itemStr = itemStr;
    }
    print() {
      console.log(`Hero: ${this.name}`);
      console.log(`level => ${this.level}`);
      console.log(`items => ${this.itemStr}`);
    }
  }

  for (const heroData of heroes) {
    let [name, level, itemStr] = heroData.split(" / ");
    let hero = new Hero(name, level, itemStr);
    register.push(hero);
  }
  for (const hero of register.sort((hero1, hero2) => hero1.level - hero2.level)) {
    hero.print();
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
