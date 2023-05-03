function createSortedList() {
  let data = [];
  let result = {
    add,
    remove,
    get,
    size: 0,
  };

  return result;

  function add(element) {
    data.push(element);
    this.size++;
    data.sort((a, b) => a - b);
  }

  function remove(index) {
    let valid = checkIndex(index);
    if (valid) {
      data.splice(index, 1);
      this.size--;
    }
  }
  function get(index) {
    let valid = checkIndex(index);
    if (valid) {
      return data[index];
    }
  }
  function checkIndex(index) {
    return index >= 0 && index < data.length;
  }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
