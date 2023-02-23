function employees(input) {
  class Employee {
    constructor(names, number) {
      this.names = names;
      this.number = number;
    }
  }
  const employeeArray = [];
  for (let i = 0; i < input.length; i++) {
    let employeeName = input[i];
    let personalNum = employeeName.length;
    let employee = new Employee(employeeName, personalNum);
    employeeArray.push(employee);
    console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
  }
}
employees(["Silas Butler", "Adnaan Buckley", "Juan Peterson", "Brendan Villarreal"]);
