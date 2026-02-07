const friend  = {
    name : "Rabbi",
    age: 23,
    game: "football",
    friends: ["Rakib", "Hasan","Shajib"],
    isMarit: false 
}

console.log(friend );

const stringFriend = JSON.stringify(friend)
console.log(typeof stringFriend);

const parseFriend = JSON.parse(stringFriend)

console.log( parseFriend);



