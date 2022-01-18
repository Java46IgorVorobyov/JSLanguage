const arHw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
// arHw.sort((a, b) => (a % 2 - b % 2) || (a % 2 ? b - a : a - b));
let odds = arHw.filter((a) => a % 2 !== 0).sort((a, b) => b - a);
let even = arHw.filter((a) => a % 2 === 0).sort((a, b) => a - b);
let sorted = even.concat(odds);
console.log(sorted);
//console.log(arHw);