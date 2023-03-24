function matchDates(arr) {
  let regex = /(?<day>\d{2})(?<delimeter>[-\/.])(?<month>[A-Z][a-z]{2})\k<delimeter>(?<year>\d{4})/g;

  for (let i = 0; i < arr.length; i++) {
    let text = arr[i];
    let match = [...text.matchAll(regex)];
    for (let j = 0; j < match.length; j++) {
      let res = `Day: ${match[j].groups.day}, Month: ${match[j].groups.month}, Year: ${match[j].groups.year}`;

      console.log(res);
    }
  }
}

matchDates(["13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016"]);
