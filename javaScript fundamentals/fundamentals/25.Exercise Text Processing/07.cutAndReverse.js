function cutAndReverse(str) {
    let len = str.length;
    let firstHalf = str.substring(0, Math.floor(len/2)).split('').reverse().join('');
    let secondHalf = str.substring(Math.ceil(len/2)).split('').reverse().join('');

console.log(firstHalf);
console.log(secondHalf);
}cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");