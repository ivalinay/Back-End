function ontimefortheExam(input) {
  let examHour = Number(input[0]);
  let examMin = Number(input[1]);

  let arrivalHour = Number(input[2]);
  let arrivalMin = Number(input[3]);

  let totalExamMins = examHour * 60 + examMin;
  let totalArrivalMins = arrivalHour * 60 + arrivalMin;

  let totalMinsDiff = Math.abs(totalExamMins - totalArrivalMins);

  let hoursDiff = Math.floor(totalMinsDiff / 60);
  let minsDiff = totalMinsDiff % 60;

  let timeDiff = "";

  if (hoursDiff > 0) {
    if (minsDiff < 10) {
      timeDiff = `${hoursDiff}:0${minsDiff}`;
    } else {
      timeDiff = `${hoursDiff}:${minsDiff}`;
    }
  } else {
    timeDiff = minsDiff;
  }
  if (totalArrivalMins < totalExamMins) {
    if (totalMinsDiff <= 30) {
      console.log(`On time`);
      console.log(`${timeDiff} minutes before the start`);
    } else {
      console.log(`Early`);

      if (totalMinsDiff < 60) {
        console.log(`${timeDiff} minutes before the start `);
      } else {
        console.log(`${timeDiff} hours before the start`);
      }
    }
  } else if (totalArrivalMins > totalExamMins) {
    console.log(`Late`);
    if (totalMinsDiff < 60) {
      console.log(`${timeDiff} minutes after the start`);
    } else {
      console.log(`${timeDiff} hours after the start`);
    }
  } else console.log(`On time`);
}
ontimefortheExam(["9", "30", "9", "50"]);
ontimefortheExam(["9", "00", "8", "30"]);
ontimefortheExam(["16", "00", "15", "00"]);
ontimefortheExam(["9", "00", "10", "30"]);
ontimefortheExam(["14", "00", "13", "55"]);
ontimefortheExam(["11", "30", "8", "12"]);
ontimefortheExam(["10", "00", "10", "00"]);
ontimefortheExam(["11", "30", "10", "55"]);
ontimefortheExam(["11", "30", "12", "29"]);
