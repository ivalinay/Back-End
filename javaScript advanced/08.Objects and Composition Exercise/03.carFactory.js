function carFactory({ model, power, color, carriage, wheelsize }) {
  const engines = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 },
  };
  let engine = {};
  if (power <= 90) {
    engine = engines.small;
  } else if (power <= 120) {
    engine = engines.normal;
  } else {
    engine = engines.monster;
  }
  const newWhelSize = wheelsize % 2 === 0 ? --wheelsize : wheelsize;
  return (car = {
    model,
    engine,
    carriage: {
      type: carriage,
      color,
    },
    wheels: Array(4).fill(newWhelSize),
  });
}
carFactory({ model: "VW Golf II", power: 90, color: "blue", carriage: "hatchback", wheelsize: 14 });
