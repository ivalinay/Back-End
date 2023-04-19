function vacation(people, groupType, dayofWeek) {
  let totalPrice = 0;

  switch (groupType) {
    case "Students":
      if (dayofWeek === "Friday") {
        totalPrice = people * 8.45;
      } else if (dayofWeek === "Saturday") {
        totalPrice = people * 9.8;
      } else if (dayofWeek === "Sunday") {
        totalPrice = people * 10.46;
      }
      if (people >= 30) {
        totalPrice = totalPrice * 0.85;
      }
      break;
    case "Business":
      if (people >= 100) {
        people -= 10;
      }

      if (dayofWeek === "Friday") {
        totalPrice = people * 10.9;
      } else if (dayofWeek === "Saturday") {
        totalPrice = people * 15.6;
      } else if (dayofWeek === "Sunday") {
        totalPrice = people * 16;
      }
      break;
    case "Regular":
      if (dayofWeek === "Friday") {
        totalPrice = people * 15;
      } else if (dayofWeek === "Saturday") {
        totalPrice = people * 20;
      } else if (dayofWeek === "Sunday") {
        totalPrice = people * 22.5;
      }
      if (people >= 10 && people <= 20) {
        totalPrice *= 0.95;
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
