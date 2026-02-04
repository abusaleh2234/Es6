// ------------------object destructuring-------------------

// const person = {name: "Kamal", age: 23, city: "dhaka"}

// console.log(person.age);
const {name,age} = {name: "Kamal", age: 23, city: "dhaka"}

// console.log(name, age);
// ----------------------array destructuring---------------

const number = [10,30,60,20,50,80]

// console.log(number[1]);

const [first, second,...other ] = number
// console.log(other);
// console.log(first);


// ------Keys, values, entries, delete, seal, freeze----------


const student = {name: "Jamal", roll: 20, score: 5, id: 23345}

const Keys = Object.keys(student)
// console.log(Keys);
const values = Object.values(student)
// console.log(values);
const entries = Object.entries(student)
// console.log(entries);


// Object.freeze(student)
Object.seal(student)
delete student.id
// delete student.roll

student.score = 5+4
student.group = "science"
console.log(student);





