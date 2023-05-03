function heroes() {
  const health = 100;
  const manorOrStamina = 100;

  const create = {
    fighter: (name) => {
      return {
        name,
        health,
        stamina: manorOrStamina,
        fight() {
          this.stamina--;
          console.log(`${this.name} slashes at the foe!`);
        },
      };
    },
    mage: (name) => {
      return {
        name,
        health,
        mana: manorOrStamina,
        cast(spell) {
          this.mana--;
          console.log(`${this.name} cast ${spell}`);
        },
      };
    },
  };
  return create;
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);
