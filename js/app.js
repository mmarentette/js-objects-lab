console.log('app.js is loaded');

// defining an object literal
// an object is a set of key value pairs <- IMPORTANT TERM in many languages

// keys: name, color, isReal, etc.
// values: 'Big Foot', 'Brown', true, etc.
const bigFoot = {
    name: 'Big Foot',
    color: 'Brown',
    isReal: true,
    height: 7, //feet
    diet: 'vegetarian',
    woodlandFriends: [{name: 'bunny', age: 4}, {name: 'squirrel', age: 5}, {name: 'deer', age: 8}],
    eat(plant) { // new syntax on writing methods in objects - this is "syntactic sugar"
        console.log(`Let's eat ${plant}`);
    }, 
    hide(location) {
        console.log(`Let's hide in the ${location}`);
    },
    run() {

    }, 
    // run: function () { 

    // } // this is the old way to write methods in objects; use modern syntax above instead
}

// log the age of bunny
console.log(bigFoot.woodlandFriends[0].age);
// log the squirrel
console.log(bigFoot.woodlandFriends[1].name);

// you cannot reassign an object - this will yield an error
// bigFoot = {
//     name: 'Bigger Foot'
// }

// Error: Cannot read properties of undefined (reading 'x')
// If x = 0, for example, find the 0 in the particular line of code and look to the left of it (start with thing furthest to left, log it out, and then keep logging things out by moving closer to the 0)

// delete is a keyword operator in JavaScript
delete bigFoot.isReal // deletes the isReal property

// add argument to the hide function called location
// when you call it, should say
// Let's hide in "location"

bigFoot.hide('basement');
bigFoot.hide('den');
bigFoot.hide('forest');

bigFoot.eat('tree');
bigFoot.eat('lettuce');
bigFoot.eat('kale');

// two ways to access values
// using the dot syntax:
bigFoot.name // 'Big Foot'
// or the bracket syntax:
bigFoot['name'] // 'Big Foot'

let key = 'name'

bigFoot[key] // bracket syntax can be useful when your variable is a key and a string (like the 'name' property)

bigFoot['woodlandFriends'][0] // 'bunny'



function sayHello(name) {
    return `Hello, ${name}`;
}

// // for each woodlandFriend, use the sayHello function - you should see three logs
// bigFoot.woodlandFriends.forEach(function(friend) {
//     console.log(sayHello(friend));
// })

// same as:
sayHello(bigFoot.woodlandFriends[0]);
sayHello(bigFoot.woodlandFriends[1]);
sayHello(bigFoot.woodlandFriends[2]);

//for each woodlandFriend

// I want to see if bigFoot is real
// // Retrieve the value of the isReal key (property) in bigFoot
// console.log(bigFoot.isReal);

// // Getting a property (value) ^^^

// // See what diet bigFoot has
// console.log(bigFoot.diet);

// // SET KEY VALUE PAIRS
// console.log(bigFoot.color, " < ----- BigFoot before");
// Change the color of bigFoot
bigFoot.color = 'strawberry blonde';
// console.log(bigFoot);

// change the diet of bigFoot
bigFoot.diet = 'carnivore';
// console.log(bigFoot.diet); // We can check that the value has been updated by console logging, OR by typing bigFoot or bigFoot.diet directly in the console in web developer tools

// console.log(bigFoot.woodlandFriends[2]);
