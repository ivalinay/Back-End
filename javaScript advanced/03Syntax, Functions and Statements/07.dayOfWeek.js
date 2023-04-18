function dayOfWeek(day) {
  let days = {
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
    Sunday: 7,
  };
  if (day in days) {
    console.log(days[day]);
    return;
  }
  console.log(`error`);
}

dayOfWeek("Monday");
