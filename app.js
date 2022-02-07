class Person {
        #id;
        #name;
        constructor(id, name) {
                this.#id = id;
                this.#name = name;
        }
        getId() {
                return this.#id;
        }
        getName() {
                return this.#name;
        }
        toString() {
                return `id: ${this.#id}; name: ${this.#name};`;
        }
}

class Employee extends Person {
        #salary;
        constructor(id, name, salary) {
                super(id, name); 
                this.#salary = salary;
        }
        computeSalary() {
                return this.#salary
        }
        toString() {
                return super.toString() + ` salary: ${this.computeSalary()}`;
        }
}

class Child extends Person {
        #kindergarten;
        constructor(id, name, kindergarten) {
                super(id, name);
                this.#kindergarten = kindergarten;
        }
        getKinderGarten() {
                return this.#kindergarten;
        }
        toString() {
                return `${super.toString()} kindergarten: ${this.#kindergarten}`;
        }
}

class WageEmployee extends Employee {
        #hours;
        #wage;
        constructor(id, name, salary, hours, wage) {
                super(id, name, salary);
                this.#hours = hours;
                this.#wage = wage;
        }
        computeSalary() {
                return super.computeSalary() + this.#hours * this.#wage;
        }
}

const persons = [
        new Child(100, 'Olya', 'Shalom'),
        new Child(101, 'Serega', 'Boker'),
        new Child(102, 'Kolya', 'Shalom'),
        new Employee(103, 'Vasya', 1000),
        new WageEmployee(104, 'Tolya', 1000, 10, 100)
]

// function countOfPersonType(persons, type) {

//         return resArray = persons.filter(el => el.constructor.name === type).length

// }
// console.log(`-----------------------------------`);
// const result1 = countOfPersonType(persons, 'Child');
// console.log(`Children in kindergarten: ${result1}`);
// console.log(`-----------------------------------`);

// function computeSalaryBudget(persons) {

//         return persons.reduce((result, cur) => result += cur.computeSalary ? cur.computeSalary() : 0, 0);

// }
// const result2 = computeSalaryBudget(persons);
// console.log(`Salary with extra hours: ${result2}`);
// console.log(`-----------------------------------`);

// function countChildrenKindergarten(persons, kindergarten) {

//         return persons.filter(el => el.getKinderGarten && el.getKinderGarten() === kindergarten).length

// }
// const result3 = countChildrenKindergarten(persons, 'Shalom');
// console.log(`Children at Shalom Kindergarten: ${result3}`);
// console.log(`-----------------------------------`);

function countOfPersonType(persons, type) {
        return getPersonsType(persons, type).length;
}
function getPersonsType(persons, type) {
        const allEmployees = persons.filter(p => !!p.computeSalary);
        return allEmployees.reduce((res, cur) => res + cur.computeSalary(), 0);
}
function countChildrenKindergarten(persons, kindergarten) {
        const allChildren = getPersonsType(persons, 'Child');
        return allChildren.reduce((res, cur) => cur.getKinderGarten() === kindergarten ? res + 1 : res, 0);
}
const type = 'WageEmployee';
const kindergarten = 'Shalom';
let expected = 1;
console.log(`function countOfPersonType for type ${type} expected ${expected} actual result is ${countOfPersonType}`);
expected = 3000;
console.log(`function computeBudget expected ${expected} actual result is ${computeSalaryBudget(persons)}`);
expected = 2;
console.log(`function countChildrenKindergarten for kindergarten ${kindergarten} expected ${expected} actual result`);