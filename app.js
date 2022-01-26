//filter 

const arr = [23, 23, 12, 75, 40, 20, 2, 3, 8];

Array.prototype.myFilter = function (callback) {
   let arr1 = [];
   for (let i = 0; i < this.length; i++) {
       if (callback.call(this, this[i])) {
           arr1.push(this[i]);
       }
   }
   return arr1;
  };

  const filter = arr.myFilter((a)=> a % 2 === 0);
  console.log(filter);

  //reduce 

  Array.prototype.myReduce = function (callback, initialResult) {
    let a = initialResult;
    for (let i = 0; i < this.length; i++) {
        if (a !== undefined) {
            a = callback.call(undefined, a, this[i], i, this);
        } else {
            a = this[i];
        }
    }
    return a;
  };
  let res = arr.myReduce((total, num)=> {
      return total + num;
  });
  console.log(res);

  //************************************ */

function createAddress(city, street) {
    return {city, street};
}
function createPerson(id, name, address) {
    return {id, name, address};
}
const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot","Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot","Pr. Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv","Dizengoff")),
    createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
];
//console.log(persons);

// let getPersonCity = persons.filter(function (person, city){
//     return person.address.city === 'Rehovot';
// });
// //console.log(getPersonCity);

// let movePersonsNoCityAtBeginning = persons.filter(function (person, city){
//     return person.address.city != 'Rehovot';
// });
// console.log(getPersonCity);

let getPersonCity1 = person=> person.address.city === 'Rehovot';
const res1 = persons.filter(getPersonCity1);
console.log(res1);

let movePersonsNoCityAtBeginning = person=> person.address.city !== 'Tel-Aviv';
const res2 = persons.filter(movePersonsNoCityAtBeginning);
console.log(res2);

 
 
