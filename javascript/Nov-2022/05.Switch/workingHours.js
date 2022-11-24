function workingHours(input) {
  let time = Number(input[0]);
  let dayofWeek = input[1];

  if (time >= 10 && time < 18) {
    switch (dayofWeek) {
      case "Monday":
        break;
      case "Tuesday":
        break;
      case "Wednesday":
        break;
      case "Thursday":
        break;
      case "Friday":
        break;
      case "Saturday":
        break;
    }
    console.log("open");
  } else {
    console.log("closed");
  }
}

workingHours(["11", "Monday"]);
