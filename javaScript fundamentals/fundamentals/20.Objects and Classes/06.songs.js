function songs(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numberOfSongs = input[0];
  let typeList = input.pop();

  for (let i = 1; i <= numberOfSongs; i++) {
    let [typeList, name, time] = input[i].split("_");
    let song = new Song(typeList, name, time);
    songs.push(song);
  }
  if (typeList === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.typeList === typeList);
    filtered.forEach((i) => console.log(i.name));
  }
}

songs([3, "favourite_DownTown_3:14", "favourite_Kiss_4:16", "favourite_Smooth Criminal_4:01", "favourite"]);
