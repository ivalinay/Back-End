function solve() {
  const photo = {};
  const instance = Object.create(photo);

  instance.extend = function (template) {
    for (let prop in template) {
      if (typeof template[prop] === "function") {
        proto[prop] = template[prop];
      } else {
        instance[prop] = template[prop];
      }
    }
  };
  return instance;
}
