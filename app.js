//HomeWork 19


// function getRandomNumber(min, max) {
//         return Math.floor(Math.random() * (max - min) + min)
// }




// function concatenation(prefix) {
//         prefix = 'App - '
//         const concatMessage = 'Test status: Done'
//         let res = prefix.concat(concatMessage)
//         console.log(res);
        
// }
// console.log(`Task #1`)
// console.log(`Random number: ${getRandomNumber(1,200)}`);
// console.log(`Random number: ${getRandomNumber(200,1)}`);

// console.log(`Task #2`)
// concatenation()

function getRandomNumber(min, max) {
        if(min > max) {
                [max, min] = [min, max]
        return Math.round(min + Math.random() * (max - min))
        }
        for (let i = 0; i < 10; i++) {
                console.log(getRandomNumber(13, 10));
        }
}

function concatenate(prefix) {
        return (...args) => [prefix, ...args].join('')
}

function read() {
      console.log(getRandomNumber())
      const concatApp = concatenate('App - ')  
      const concatMessage = concatApp('Test status done')
      console.log(concatMessage);
}
read()

a || b; // 0 || b => b, 0 is false
a ?? b; // 0 ?? b => 0, 0 is not undefined nor null 
a && b / a;