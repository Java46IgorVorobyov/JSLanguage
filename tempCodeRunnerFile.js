function encod(num, base) {
    //base from 2 to 10
    let res = "";
    do {
            const digit = Math.round(num % base);
            const symb = getSymbol(digit);
            res = symb + res;
            num = Math.round(num / base);
    }while(num != 0);
    return res;
}
function getSymbol(digit) {
        //base from 2 to 10
    return "" + digit; //it will work only base <= 10
}
console.log(encod(10, 2));