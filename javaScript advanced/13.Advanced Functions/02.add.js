function solution(initialNumber) {
  return function addNumber(additionalNumber) {
    return initialNumber + additionalNumber;
  };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(10));
