// forEach

let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18];

Array.prototype.forEach2 = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};

 const arr1 = arr.slice(1);
 let str =  '' + arr[0];
 arr1.forEach2(a => str += '#' + a);
 console.log(str);

//Map

let array2 = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17];

Array.prototype.map2 = function (callback, thisArg) {
  let context = this;
  let O = Object(this);

  if (arguments.length > 1) {
    context = thisArg;
  }
  let len = O.length;
  let newArray = [];
  let i = 0;

  while (i < len) {
    if (i in O) {
      newArray[i] = callback.call(context, this[i], i, O);
    }
     i++;
  }
  return newArray;
};
console.log(array2.map2((item) => item * 2));

