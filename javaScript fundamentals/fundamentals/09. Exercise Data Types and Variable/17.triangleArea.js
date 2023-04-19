function triangleArea(side1, side2, side3) {
  let triangleArea = (side1 + side2 + side3) / 2;
  let areaValue = Math.sqrt(triangleArea * (triangleArea - side1) * (triangleArea - side2) * (triangleArea - side3));
  console.log(`${areaValue}`);
}
triangleArea(2, 3.5, 4);
