const students = [
    {name: "Rajib", id : 1, marks: 45},
    {name: "Nasir", id : 2, marks: 65},
    {name: "Rasel", id : 3, marks: 85},
    {name: "Sebbir", id : 4, marks: 55},
    {name: "Monir", id : 5, marks: 95},
]

const resultMap = students.map(student => student.name.length * 2)
// console.log(resultMap);
const ResultFilter = students.filter(student => student.marks > 80)
// console.log(ResultFilter);
const resultFind = students.find(student => student.marks > 80)
console.log(resultFind);


