function movies(input) {
  let movies = [];

  for (const line of input) {
    if (line.includes("addMovie")) {
      let movieName = line.replace("addMovie ", "");
      let addMovie = { name: movieName };
      movies.push(addMovie);
    } else if (line.includes("directedBy")) {
      let [name, director] = line.split(" directedBy ");
      let found = movies.find((element) => element.name === name);
      if (found != undefined) {
        found.director = director;
      }
    } else if (line.includes("onDate")) {
      let [name, date] = line.split(" onDate ");
      let found = movies.find((element) => element.name === name);
      if (found != undefined) {
        found.date = date;
      }
    }
  }
  for (let movie of movies.filter((element) => element.director != undefined && element.date != undefined)) {
    console.log(JSON.stringify(movie));
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
