function problem3Numbers(input) {
  //splitvame stringa i go pravim na masiv ot chisla;
  let sequenceOfIntegers = input.split(" ").map(Number);

  //nameri sredno aritmetichno na vsichki chisla + / ;
  let sum = 0;
  for (let i = 0; i < sequenceOfIntegers.length; i++) {
    sum += sequenceOfIntegers[i];
  }
  let average = sum / sequenceOfIntegers.length;

  // nameri 5 chisla koito da sa  po-golemi ot srednoaritmetichnoto;
  let greaterThanAverage = sequenceOfIntegers.filter(function (number) {
    return number > average;
  });
  // ako  izobshto nqmam chisla koito sa po golemi ot srednoaritmetichnoto pechatano 'no'  i otivash da qdesh ;
  if (greaterThanAverage.length === 0) {
    console.log("No");
    return;
  }
  // sortirai po nizhodqsht red ;
  greaterThanAverage.sort(function (a, b) {
    return b - a;
  });
  // pechatai na edin red razdeleni s interval;
  console.log(greaterThanAverage.slice(0, 5).join(" "));
}
problem3Numbers("10 20 30 40 50");
problem3Numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
