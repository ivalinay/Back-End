function filter(json, criteria) {
  let employees = JSON.parse(json);

  let [key, value] = criteria.split("-");
  switch (key) {
    case "all":
      break;
    default:
      employees = employees.filter((employee) => employee[key] === value);
      break;
  }

  for (let i = 0; i < employees.length; i++) {
    let employee = employees[i];

    console.log(`${i}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
  }
}


filter(
  `[{
 "id": "1",
 "first_name": "Ardine",
 "last_name": "Bassam",
 "email": "abassam0@cnn.com",
 "gender": "Female"
 }, {
 "id": "2",
 "first_name": "Kizzee",
 "last_name": "Jost",
 "email": "kjost1@forbes.com",
 "gender": "Female"
 },
{
 "id": "3",
 "first_name": "Evanne",
 "last_name": "Maldin",
 "email": "emaldin2@hostgator.com",
 "gender": "Male"
 }]`,
  "gender-Female"
);
