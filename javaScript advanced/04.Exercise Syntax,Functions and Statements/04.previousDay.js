function previousDay(year, month, day) {
  let now = new Date(year, month - 1, day);
  let previous = new Date(now.getTime());
  previous.setDate(now.getDate() - 1);
  let previousYear = previous.getFullYear();
  let previousMonth = previous.getMonth() + 1;
  let previousDay = previous.getDate();
  console.log(`${previousYear}-${previousMonth}-${previousDay}`);
}

previousDay(2016, 9, 30);
