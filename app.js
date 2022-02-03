console.log(`Task #1`);
console.log(`----------------------------------`);
function Deferred() {
    this.callbacks = [];
  }
  Deferred.prototype.then = function(cb) {
    this.callbacks.push(cb);
  };
  Deferred.prototype.resolve = function(val) {
    let f = this.callbacks.shift();
    if (f) {
      let d = f(val);
      if (d instanceof Deferred)  d.then((v) => this.resolve(v));
      else this.resolve(d);
    }
  };
  
  var d = new Deferred('one');
  d.then(function(res) {
    console.log('1 ', res);
    return 'a';
  });
  d.then(function(res) {
    console.log('2 ', res);
    return 'b';
  });
  d.then(function(res) {
    console.log('3 ', res);
    return 'c';
  });
  d.resolve('hello');

console.log(`Task #2`);
console.log(`----------------------------------`);


 function MyArray(initialValue) {
        this.value = initialValue;
        this.array = [];
 } 
 MyArray.prototype.setValue = function(value) {
        this.value = value;
        this.array = [];
 };
 MyArray.prototype.set = function(index, value) {
        this.array[index] = value;
};
MyArray.prototype.get = function(index) {
        return this.array[index] ?? this.value;
};

const myArray = new MyArray(10);
console.log(myArray.get(100)); // displayed out 10
myArray.set(100, 500);//sets 500 at index 100
console.log(myArray.get(200)); //displayed out 10
console.log(myArray.get(100)); //displayed out 500
myArray.setValue(300);
console.log(myArray.get(100)); //displayed out 300
console.log(myArray.get(200)); //displayed out 300

//how to get array's length 
const arr1 = [];
arr1[100000000] = 10;
arr1.length = 0;
console.log(arr1.length);
// console.log(`lenght of arr1 is ${arr1.length}`);
// arr1.length = 0;
// console.log(arr1[100000000]);
