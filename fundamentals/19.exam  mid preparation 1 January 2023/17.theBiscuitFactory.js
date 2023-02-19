function theBiscuitFactory(input) {
  let biscuitsPerPerson = Number(input[0]);
  let countOfTheWorkes = Number(input[1]);
  let competingFactoryProduction = Number(input[2]);

  let totalBiscuit = 0;

  let biscuitsPerDay = biscuitsPerPerson * countOfTheWorkes;

  for (let day = 1; day <= 30; day++) {
    if (day % 3 === 0) {
      totalBiscuit += Math.floor(biscuitsPerDay * 0.75);
    } else {
      totalBiscuit += biscuitsPerDay;
    }
  }
  console.log(`You have produced ${totalBiscuit} biscuits for the past month.`);
  if (totalBiscuit > competingFactoryProduction) {
    let differenceCompany = totalBiscuit - competingFactoryProduction;
    let percent = (differenceCompany / competingFactoryProduction) * 100;
    console.log(`You produce ${percent.toFixed(2)} percent more biscuits.`);
  } else {
    let differenceCompany = competingFactoryProduction - totalBiscuit;
    let percent = (differenceCompany / competingFactoryProduction) * 100;
    console.log(`You produce ${percent.toFixed(2)} percent less biscuits.`);
  }
}

theBiscuitFactory(["78", "8", "16000"]);
