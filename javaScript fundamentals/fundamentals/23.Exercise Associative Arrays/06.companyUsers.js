function companyUsers(input) {
  let companies = new Map();
  for (let line of input) {
    let [company, employeeId] = line.split(" -> ");

    if (!companies.has(company)) {
      companies.set(company, new Set());
    }
    companies.get(company).add(employeeId);
  }
  let sortedCompanies = [...companies.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  for (let [company, employees] of sortedCompanies) {
    console.log(company);
    for (let employeeId of employees) {
      console.log(`-- ${employeeId}`);
    }
  }
}
companyUsers(["SoftUni -> AA12345", "SoftUni -> BB12345", "Microsoft -> CC12345", "HP -> BB12345"]);
