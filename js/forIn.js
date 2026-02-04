const student = {name: "Jamal", roll: 20, score: 5, id: 23345}

for (const key in student) {

    // console.log(student[key]);
}

const Keys = Object.keys(student)

for (const key of Keys) {
    // console.log(student[key])
};


const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter(n => n % 2 === 0);
// console.log(evens);

const user = {
  name: "Rahim",
  age: 22,
  city: "Dhaka"
};

const { name, age } = user;
// console.log(name, age);

const arr = [5, 20, 15];

const max = Math.max(...arr);
// console.log(max);