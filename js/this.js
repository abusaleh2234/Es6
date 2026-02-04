class Car {
    constructor (name, brand, price){
        this.name = name,
        this.brand = brand,
        this.price = price
    }
    getThis(){
        console.log(this.price);
    }
}

const car1 = new Car("Corola", "toyota", 600000)
const car2 = new Car("Bench", "Marchidis", 1200000)
// car1.getThis()
// console.log(car1);

console.log(car2);
car2.getThis()


const person = {
    name: "Rahim",
    age: 45,
    add :function (){
        console.log(this);
        
    }
}
console.log(person);
person.add()