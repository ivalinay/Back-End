function meetings(meetings) {
  let scheduledMeetings = {};

  for (let line of meetings) {
    let [day, person] = line.split(" ");

    if (scheduledMeetings[day]) {
      console.log(`Conflict on ${day}!`);
    } else {
      scheduledMeetings[day] = person;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (let [day, person] of Object.entries(scheduledMeetings)) {
    console.log(`${day} -> ${person}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
