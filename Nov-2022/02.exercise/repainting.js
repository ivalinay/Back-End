function repainting(input) {
  let nylonAmount = Number(input[0]);
  let paintAmount = Number(input[1]);
  let waterThinner = Number(input[2]);
  let workHours = Number(input[3]);

  let nylonSum = (nylonAmount + 2) * 1.5;
  let paintSum = (paintAmount + (10 / 100) * paintAmount) * 14.5;
  let thinnerSum = 5 * waterThinner;
  let materialsTotalSum = nylonSum + paintSum + thinnerSum + 0.4;
  let pricePerHour = (30 / 100) * materialsTotalSum;
  let mastersSum = pricePerHour * workHours;
  let finalPrice = materialsTotalSum + mastersSum;
  console.log(finalPrice);
}
repainting(["5 ", "10 ", "10 ", "1 "]);
