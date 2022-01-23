
let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18];

Array.prototype.forEach2 = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};

// arr.forEach2((item, index, array) => {
//     console.log({item, index});
//     //console.log({array});
// });

 const arr1 = arr.slice(1);
 let str =  '' + arr[0];
 arr1.forEach2(a => str += '#' + a);
 console.log(str);