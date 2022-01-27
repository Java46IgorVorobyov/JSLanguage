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


let max = persons.reduce((acc, curr) => acc.b > curr.b ? acc : curr);
console.log(max);

const result = Object.entries(persons.reduce((acc, { id }) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
}, {})).map( ([k,v]) => ({id: parseInt(k,10), count:v}));

console.log(result);