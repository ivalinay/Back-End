function assemblyLine() {
  function hasClima(car) {
    car.temp = 21;
    car.tempSetting = 21;
    car.adjustTemp = function () {
      if (car.temp < car.tempSetting) {
        car.temp++;
      } else if (car.temp > car.tempSetting) {
        car.temp--;
      }
    };
    return car;
  }
  function hasAudio(car) {
    car.currentTrack = null;
    car.nowPlaying = function () {
      if (car.currentTrack !== null) {
        console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
      }
    };
    return car;
  }
  function hasParktronic(car) {
    car.checkDistance = function (distance) {
      if (distance < 0.1) {
        console.log(`Beep! Beep! Beep!`);
      } else if (distance < 0.25) {
        console.log(`Beep! Beep!`);
      } else if (distance < 0.5) {
        console.log(`Beep`);
      }
    };
    return car;
  }
  return {
    hasClima,
    hasAudio,
    hasParktronic,
  };
}
const myAssemblyLine = assemblyLine();

let myCar = {
  make: "Toyota",
  model: "Avensis",
};

myAssemblyLine.hasClima(myCar);
myAssemblyLine.hasAudio(myCar);
myAssemblyLine.hasParktronic(myCar);

myCar.tempSettings = 23;
myCar.adjustTemp();
console.log(myCar.temp);

myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();

myCar.checkDistance(0.15);
