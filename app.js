// const person1 = {
//     id: 123,
//     name: 'Moshe',
//     address: {
//         city: 'Lod',
//         street: 'Sokolov'
//     }
// };
// const person2 = {
//     id: 123,
//     name: 'Moshe',
//     address: {
//         city: 'Lod',
//         street: 'Sokolov'
//     }
// };
// const person3 = person1;
// console.log(`'123' == 123 is ${'123' == 123}`);
// console.log(`'123' === 123 is ${'123' === 123}`);
// console.log(`person1 === person3 is ${person1 === person3}`);
// console.log(`person1 === person2 is ${person1 === person2}`);
// console.log(`JSON.stringify(person1) === JSON.stringify(person2) is ${JSON.stringify(person1) === JSON.stringify(person2)}`);
// console.log(JSON.stringify(person1));
// console.log(person1.toString());
// console.log(`name of person1 is ${person1.name}`);
// console.log(`person1 live in city ${person1.address.city}`);
// Object.keys(person1).forEach(k=> console.log(k)); //array of the object keys
// Object.values(person1).forEach(v=> console.log(v)); //array of the object values 
// Object.entries(person1).forEach(b=> console.log(b)); //array of arrays - [key,value]
// console.log(Object.entries(person1));

// function createAddress(city, street) {
//     // {city: city, street: street} <=> {city, street}
//     return {city, street};

// }
// function createPerson(id, name, address) {

//     return {id, name, address};

// } 
// const persons = [

//     createPerson(123, 'Vasy', createAddress('Rehovot', 'Parshani')),
//     createPerson(124, 'Olya', createAddress('Rehovot', 'Pr. Plaut')),
//     createPerson(125, 'Tolya', createAddress('Tel-Aviv', 'Dizengoff'))

// ];
// //Используя методы работы с массивами найти всех пользователей которые живут в Реховоте.
// //apply methods of arrays you should find the persons living in Rehovot and display them out

// //Task 4
// //TODO move the persons that don't live in Rehovot at beginning of the array persons


//************ClassWork15  */
//input: ['lmn', 'd', 'd', 'lmn', 'a', 'lmn', 'a', 'bc']
//output: lmn -> 3
//        a -> 2
//        d -> 2
//        bc -> 1

function displayOccurrences(array) {
        //creating object with key - unique element of array(string as an elem. of array)
        //                     value - occurrences count
        //difference between obj -{a: 123, d: 'abc'}; const a = 'd'; obj.a === 123, and obj[a]==='abc'
        //obj.c = 10 -> {a: 123, d: 'abc', c: 10}

        const res = {};
        for(let i = 0; i < array.length; i++) {
                if (res[array[i]] === undefined) {
                    //string as content of array[i] occures first time
                    res[array[i]] = 1;
                } else {
                        res[array[i]] = res[array[i]] + 1;
                }
        }
        //console.log(res); -> intermediate debug log
        Object.entries(res).sort((e1, e2)=> {
            const res = e2[1] - e1[1];
            return res === 0 ? e1[0].localeCompare(e2[0]) : res;
    }).forEach(e=> console.log(`${e[0]} -> ${e[1]}`));

}
const ar = ['lmn', 'd', 'd', 'lmn', 'a', 'lmn', 'a', 'bc'];
displayOccurrences(ar);

//HomeWork 15///
//task 1
//refactoring of displayOccurrences function
//71-77 should be separated function
//that separeted function should apply standard methods like reduce

//task 2
//write useful function countBy(array, callbackFn) that return object with key as 
//grouping criteria and values as the occurrence counts 
//keys should be sorted (optional)
//where array - any array, callbackFn - function returning grouping criteria
//Examples:
//const arr = [6.4, 7.3, 6.5, 6.9];
//const statistics = countBy(arr, element=> Math.floor(element))
//result: statistics -> {'6': 3, '7': 1}
//const arr = ['abcd', 'lmnr', 'ab', 'dddd'];
//const statistics = countBy(arr, element=> element.length)
//result: statistics -> {'4': 3, '2': 1}
//const arr = [{age: 25, id: 123, name: 'Vasya'},[{age: 50, id: 123, name: 'Vasya'},
//[{age: 25, id: 123, name: 'Vasya'},[{age: 70, id: 123, name: 'Vasya'}]
//const statistics = countBy(arr, element=> element.age)
//result: -> {'25': 2, '50': 1, '70': 1}
