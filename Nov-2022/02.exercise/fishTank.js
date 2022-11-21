function fishTank(input) {
  let lenght = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percent = Number(input[3]);

  let volumeAquarium = lenght * width * height;
  let volumeleters = volumeAquarium / 1000;

  let needLiters = volumeleters * (1 - percent/100);
  console.log(needLiters);
}
fishTank[("85", "75", "47", "17")];
