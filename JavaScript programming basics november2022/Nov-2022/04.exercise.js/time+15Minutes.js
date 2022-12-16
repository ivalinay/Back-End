function timeBreakMinutes(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let totalMinutes = hours * 60 + minutes;
  let totalMinutesAfter15 = totalMinutes + 15;

  let hoursAfter15 = Math.floor(totalMinutesAfter15 / 60);
  let minutesAfter15 = totalMinutesAfter15 % 60;

  if (hoursAfter15 > 23) {
    hoursAfter15 = 0;
  }

  if (minutesAfter15 < 10) {
    console.log(hoursAfter15 + ":0" + minutesAfter15);
  } else {
    console.log(hoursAfter15 + ":" + minutesAfter15);
  }
}

timeBreakMinutes(["1", "46"]);
timeBreakMinutes(["0", "01"]);
timeBreakMinutes(["23", "59"]);
timeBreakMinutes(["11", "08"]);
timeBreakMinutes(["12", "49"]);
