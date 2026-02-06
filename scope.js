// global scope
let x = 7;

// block scope
if (true) {
  let x = 10;
  const y = 20;
}

console.log(x);
console.log(y);


// functional scope
function ageTest() {
      let age = 20; // function scope
//   console.log(age);
}
