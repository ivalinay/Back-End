function studyMaterials(input) {
  let packetchemicals = Number(input[0]);
  let packetMarkers = Number(input[1]);
  let bottle = Number(input[2]);
  let percent = Number(input[3]);

  let pricePackageChemicals = packetchemicals * 5.8;
  let pricePackageMarkers = packetMarkers * 7.2;
  let pricebottle = bottle * 1.2;
  let priceAllMaterials =
    pricePackageChemicals + pricePackageMarkers + pricebottle;
  let discount = (priceAllMaterials * percent) / 100;
  let finalPrice = priceAllMaterials - discount;
  console.log(finalPrice);
}
studyMaterials(["2 ", "3 ", "4 ", "25 "]);
