function arenaTier(input) {
  const gladiators = new Map();
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "Ave Cesar") break;

    const tokens = input[i].split(" -> ");
    if (tokens.length === 3) {
      const [gladiator, technique, skill] = tokens;
      const skillNum = Number(skill);
      if (!gladiators.has(gladiator)) {
        gladiators.set(gladiator, new Map());
      }
      const techniques = gladiators.get(gladiator);
      if (!techniques.has(technique) || techniques.get(technique) < skillNum) {
        techniques.set(technique, skillNum);
      }
    } else {
      const [gladiator1, gladiator2] = tokens[0].split(" vs ");
      if (gladiators.has(gladiator1) && gladiators.has(gladiator2)) {
        const techniques1 = gladiators.get(gladiator1);
        const techniques2 = gladiators.get(gladiator2);
        const commonTechniques = [...techniques1.keys()].filter((technique) => techniques2.has(technique));
        if (commonTechniques.length > 0) {
          const totalSkill1 = [...commonTechniques].reduce((acc, technique) => acc + techniques1.get(technique), 0);
          const totalSkill2 = [...commonTechniques].reduce((acc, technique) => acc + techniques2.get(technique), 0);
          if (totalSkill1 > totalSkill2) {
            gladiators.delete(gladiator2);
          } else if (totalSkill2 > totalSkill1) {
            gladiators.delete(gladiator1);
          }
        }
      }
    }
  }

  const sortedGladiators = [...gladiators.entries()].sort((a, b) => {
    const totalSkillA = [...a[1].values()].reduce((acc, skill) => acc + skill, 0);
    const totalSkillB = [...b[1].values()].reduce((acc, skill) => acc + skill, 0);
    if (totalSkillA === totalSkillB) {
      return a[0].localeCompare(b[0]);
    }
    return totalSkillB - totalSkillA;
  });

  for (const [gladiator, techniques] of sortedGladiators) {
    const totalSkill = [...techniques.values()].reduce((acc, skill) => acc + skill, 0);
    console.log(`${gladiator}: ${totalSkill} skill`);
    [...techniques.entries()]
      .sort((a, b) => {
        if (a[1] === b[1]) {
          return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
      })
      .forEach(([technique, skill]) => console.log(`- ${technique} <!> ${skill}`));
  }
}

arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
