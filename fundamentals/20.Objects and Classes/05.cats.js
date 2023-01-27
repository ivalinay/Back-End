function cats(cats) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < cats.length; i++) {
    let catStr = cats[i].split(" ");
    let name = catStr[0];
    let age = catStr[1];
    let cat = new Cat(name, age);
    cat.meow();
  }
}
cats(["Mellow 2", "Tom 5"]);
