// const ar = [-10, 50, -12, 80, 40];
// ar.push(70);
// str - "-10#50#-12#80#40#70#"
//*********solution based on substring */
// let str = '';
// ar.forEach(function(n){
//     str += n + '#';
// });
// //str = str.substring(0, str.length-1);
//********solution base on forEach from second number */
// const ar1 = ar.slice(1);
// let str = '' + ar[0];
// ar1.forEach(n => str += '#' + n);
// console.log(str);

//***printing out sequense number of element, element, length of array */
//1 of 5 - -10;

// ar.forEach((n, i, a) => console.log(`${i + 1} of ${a.length} - ${n}`));

//Home Work 13 task1 definition
//write function myForEach(array, callback-function);
//array - being iteration array
//callback-function - function that will be called for each element of array.
//callback-function should take three arguments: 
//1. current element; 2. current index; 3. being iterated array
//example of standart forEach: ar1.forEach(n => str += '#' + n);
//example of my forEach: myForEach(array, n => str += '#' + n);

//************************************* */
//method "map"
//use case of applying method map: you want to create new array with elements that ar received as result of some convertion
//example you want to get new array with elements that are multiplication on 2 of each source element
// const ar2 = ar.map(n => n * 2);
// console.log(ar2);
// const ar3 = ar.map((n, i, a) => `<li>${i + 1} of ${a.length} - ${n}</li>`);
// console.log(ar3);

//task 2
//write method myMap for the same functiomality as standart method map
//function myMap(array, callback-function)
//myMap will apply your method myForEach


const ar20 = [13, 17, 20, 23, 2, 40];
// const arEvenOdd = ar20.filter((n, _i, a) => a.length % 2 == 0 ? n % 2 == 0 : n % 2 == 1);
// console.log(arEvenOdd);


const res = ar20.reduce((res, cur)=> res + cur, 0);
console.log(res);
const max = ar20.reduce((max, cur)=> cur > max ? cur : max, ar20[0]);
console.log(max);
console.log(res);
//reduce with no second argument
res = ar20.reduce((res, cur)=> res + cur);


//***HW 14 */
//TODO write myFilter(array, callback) based on myForEach
//callback - function with three possible parameters: current element, current index, current array
//TODO write myReduce(array, callback, initialResult) based on myForEach
