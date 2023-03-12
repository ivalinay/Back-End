function legendaryFarming(input) {
  input = input.split(" ");
  let materials = new Map();
  materials.set("shards", 0);
  materials.set("fragments", 0);
  materials.set("motes", 0);
  let legendaryItem = "";
  let junkMaterials = new Map();

  for (let i = 0; i < input.length; i += 2) {
    let quantity = Number(input[i]);
    let material = input[i + 1].toLowerCase();
    if (material === "shards" || material === "fragments" || material === "motes") {
      if (!materials.has(material)) {
        materials.set(material, quantity);
      } else {
        materials.set(material, materials.get(material) + quantity);
      }

      if (materials.get(material) >= 250) {
        switch (material) {
          case "shards":
            legendaryItem = "Shadowmourne";
            break;
          case "fragments":
            legendaryItem = "Valanyr";
            break;
          case "motes":
            legendaryItem = "Dragonwrath";
            break;
        }

        materials.set(material, materials.get(material) - 250);
        break;
      }
    } else {
      if (!junkMaterials.has(material)) {
        junkMaterials.set(material, quantity);
      } else {
        junkMaterials.set(material, junkMaterials.get(material) + quantity);
      }
    }
  }
  console.log(`${legendaryItem} obtained!`);
  materials = new Map([...materials.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])));
  for (let [material, quantity] of materials) {
    console.log(`${material}: ${quantity}`);
  }
  junkMaterials = new Map([...junkMaterials.entries()].sort((a, b) => a[0].localeCompare(b[0])));
  for (let [material, quantity] of junkMaterials) {
    console.log(`${material}: ${quantity}`);
  }
}
legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
