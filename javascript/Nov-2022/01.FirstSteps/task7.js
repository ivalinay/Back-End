function task7(input) {
  let name = input[0];
  let projectsCount = Number(input[1]);
  let time = projectsCount * 3;
  console.log(
    `The architect ${name} will need ${time} hours to complete ${projectsCount} project/s.`
  );
}
task7(["Sanya", "9"]);
