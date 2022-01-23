// forEach

let arr = [10, 11, 12, 13, 14, 15, 16, 17, 18];

Array.prototype.forEach2 = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
};

arr.forEach2((item, index, array) => {
    // let str = '';

    console.log({item, index});
    //console.log({array});
});

 let str = '';
arr.forEach2(function(n) {
         str += n + '#';
 });
str = str.substring(0, str.length - 1);
console.log(str);
