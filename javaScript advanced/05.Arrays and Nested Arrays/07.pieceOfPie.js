function pieceOfPie(pies, first, last) {
  let firstIndex = pies.indexOf(first);
  let lastIndex = pies.indexOf(last);

  return pies.slice(firstIndex, lastIndex + 1);
}

console.log(pieceOfPie(["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"]), "Key Lime Pie", "Lemon Meringue Pie");
