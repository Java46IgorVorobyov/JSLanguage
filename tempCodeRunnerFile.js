unction encode(num, codingString) {
     let res = "";
    if (checkDuplicate(codingString) == true) {
            console.log('ERROR: Duplicate symbols');
    } else {
        do {
        const digit = Math.trunc(num % (codingString.lenght-1));
        const symb = getSymbol(digit, codingString);
        res = symb + res;
        num = Math.trunc(num / (codingString.lenght-1));
        } while (num >= 1);
        return res;
    }
    function getSymbol(digit, codingString) {
        return codingString[digit];
    }
}
function checkDuplicate(codingString) {
    return new Set(codingString).size != codingString.lenght;
    
}

console.log(encode(32,'igor'));
