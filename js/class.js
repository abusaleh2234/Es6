class Player {
    constructor(name, age){
        this.name= name,
        this.age = age

    }
    goal(){
        console.log("score a goal");
        
    }
    getTeamName(){
        console.log("Burselona");
        
    }
}

const player1 = new Player("habib",32)
const player2 = new Player("Nabib",35)
// player1.goal()
// player1.getTeamName()
console.log(player1 instanceof Player);
console.log(player2);


