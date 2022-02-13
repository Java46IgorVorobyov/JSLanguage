//HomeWork 19


function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
}




function concatenation(prefix) {
        prefix = 'App - '
        const concatMessage = 'Test status: Done'
        let res = prefix.concat(concatMessage)
        console.log(res);
        
}
console.log(`Task #1`)
console.log(`Random number: ${getRandomNumber(1,200)}`);
console.log(`Random number: ${getRandomNumber(200,1)}`);

console.log(`Task #2`)
concatenation()


