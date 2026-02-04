class Anemal{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
}
class Dog extends Anemal{
    constructor(name,age, food){
        super(name,age)
        this.food = food
    }
    eat(){
        console.log(`${this.name} is eating`);
    }

}
const dog1 = new Dog("Tome", 2, "bread")

console.log(dog1);
class Cat extends Anemal{
    constructor(name,age, food){
        super(name,age)
        this.food = food
    }
    eat(){
        console.log(`${this.name} is eating`);
    }

}

const cat1= new Cat("Meaw", 4, "fish")
cat1.eat()
console.log(cat1);
class Bird extends Anemal{
    constructor(name,age, food){
        super(name,age)
        this.food = food
    }
    eat(){
        console.log(`${this.name} is eating`);
    }

}

const bird1 = new Bird("Tia", 1, "Banana")
console.log(bird1);
