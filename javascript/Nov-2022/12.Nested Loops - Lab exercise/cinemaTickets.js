function cinemaTickets(input) {
  let index = 0;

  let movieTitle = input[index];
  index++;

  let standardTicketsCount = 0;
  let studentTicketsCount = 0;
  let kidTicketsCount = 0;

  while (movieTitle !== "Finish") {
    let spacesAvailable = Number(input[index]);
    index++;

    let currentTicket = input[index];
    index++;

    let spacesTaken = 0;

    while (currentTicket !== "End") {
      if (currentTicket === "standard") {
        standardTicketsCount += 1;
      } else if (currentTicket === "student") {
        studentTicketsCount += 1;
      } else if (currentTicket === "kid") {
        kidTicketsCount += 1;
      }
      spacesTaken += 1;

      if (spacesTaken === spacesAvailable) {
        break;
      }

      currentTicket = input[index];
      index++;
    }
    let percentFull = (spacesTaken / spacesAvailable) * 100;
    console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);
    movieTitle = input[index];
    index++;
  }
  let totalTickets = studentTicketsCount + standardTicketsCount + kidTicketsCount;
  console.log(`Total tickets: ${totalTickets}`);

  let standardPercent = (standardTicketsCount / totalTickets) * 100;
  let studentPercent = (studentTicketsCount / totalTickets) * 100;
  let kidPercent = (kidTicketsCount / totalTickets) * 100;

  console.log(`${studentPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}
cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
