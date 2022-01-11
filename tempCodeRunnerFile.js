function sum(a) {
    return function(b,c){
    return (a * b) ** c;
    };
}
console.log(sum(5)(10,3));