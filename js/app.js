// console.log('app.js is loaded');

// // defining an object literal
// // an object is a set of key value pairs <- IMPORTANT TERM in many languages

// // keys: name, color, isReal, etc.
// // values: 'Big Foot', 'Brown', true, etc.
// const bigFoot = {
//     name: 'Big Foot',
//     color: 'Brown',
//     isReal: true,
//     height: 7, //feet
//     diet: 'vegetarian',
//     woodlandFriends: [{name: 'bunny', age: 4}, {name: 'squirrel', age: 5}, {name: 'deer', age: 8}],
//     eat(plant) { // new syntax on writing methods in objects - this is "syntactic sugar"
//         console.log(`Let's eat ${plant}`);
//     }, 
//     hide(location) {
//         console.log(`Let's hide in the ${location}`);
//     },
//     run() {

//     }, 
//     // run: function () { 

//     // } // this is the old way to write methods in objects; use modern syntax above instead
// }

// // log the age of bunny
// console.log(bigFoot.woodlandFriends[0].age);
// // log the squirrel
// console.log(bigFoot.woodlandFriends[1].name);

// // you cannot reassign an object - this will yield an error
// // bigFoot = {
// //     name: 'Bigger Foot'
// // }

// // Error: Cannot read properties of undefined (reading 'x')
// // If x = 0, for example, find the 0 in the particular line of code and look to the left of it (start with thing furthest to left, log it out, and then keep logging things out by moving closer to the 0)

// // delete is a keyword operator in JavaScript
// delete bigFoot.isReal // deletes the isReal property

// // add argument to the hide function called location
// // when you call it, should say
// // Let's hide in "location"

// bigFoot.hide('basement');
// bigFoot.hide('den');
// bigFoot.hide('forest');

// bigFoot.eat('tree');
// bigFoot.eat('lettuce');
// bigFoot.eat('kale');

// // two ways to access values
// // using the dot syntax:
// bigFoot.name // 'Big Foot'
// // or the bracket syntax:
// bigFoot['name'] // 'Big Foot'

// let key = 'name'

// bigFoot[key] // bracket syntax can be useful when your variable is a key and a string (like the 'name' property)

// bigFoot['woodlandFriends'][0] // 'bunny'



// function sayHello(name) {
//     return `Hello, ${name}`;
// }

// // // for each woodlandFriend, use the sayHello function - you should see three logs
// // bigFoot.woodlandFriends.forEach(function(friend) {
// //     console.log(sayHello(friend));
// // })

// // same as:
// sayHello(bigFoot.woodlandFriends[0]);
// sayHello(bigFoot.woodlandFriends[1]);
// sayHello(bigFoot.woodlandFriends[2]);

// //for each woodlandFriend

// // I want to see if bigFoot is real
// // // Retrieve the value of the isReal key (property) in bigFoot
// // console.log(bigFoot.isReal);

// // // Getting a property (value) ^^^

// // // See what diet bigFoot has
// // console.log(bigFoot.diet);

// // // SET KEY VALUE PAIRS
// // console.log(bigFoot.color, " < ----- BigFoot before");
// // Change the color of bigFoot
// bigFoot.color = 'strawberry blonde';
// // console.log(bigFoot);

// // change the diet of bigFoot
// bigFoot.diet = 'carnivore';
// // console.log(bigFoot.diet); // We can check that the value has been updated by console logging, OR by typing bigFoot or bigFoot.diet directly in the console in web developer tools

// // console.log(bigFoot.woodlandFriends[2]);

const album1 = {
    title: 'Talking Heads',
    albumDetails: {
      released: new Date('September 16, 1977'),
      label: 'Sire',
      formats: ['LP']
    }
  };
  
  // Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title
  
  album1.title = 'Talking Heads - 77';
  title = album1.title;  
  
  // Exercise 2: Assign the string 'Sire' from album1 to a variable named label
  
  label = album1.albumDetails.label;

  
  const album2 = {
    title: 'More Songs About Buildings and Food',
    albumDetails: {
      released: new Date('July 14, 1978'),
      label: 'Sire',
      formats: ['LP', '8-track']
    }
  };
  
  const album3 = {
    title: 'Fear of Music',
    albumDetails: {
      released: 'August 3, 1979',
      label: 'Sire',
      formats: ['Cassette']
    }
  };
  
  // Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.
  
  album3.albumDetails.formats.push(album2.albumDetails.formats[0]);
//   console.log(album3.albumDetails.formats);
  
  // Exercise 4:  Update the released property of album3 from a string into a Date object using that string

  album3.albumDetails.released = new Date(album3.albumDetails.released);
  
  const album4 = {
    title: 'Remain in Light',
    albumDetails: {
      released: new Date('October 8, 1980'),
      formats: ['Cassette', 'LP']
    }
  };
  
  // Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property
  
  album4.albumDetails.label = 'Sire'
  
  
  const album5 = {
    title: 'Little Creatures',
    albumDetails: {
      released: new Date('June 10, 1985'),
      labels: ['Sire', 'emi'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'
  
  album5.albumDetails.labels[1] = 'EMI';
  
  
  const album6 = {
    title: 'True Stories',
    albumDetails: {
      released: new Date('October 7, 1986'),
      labels: ['Sire, EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 7:  Assign album6's formats array to a variable named formats
  
  formats = album6.albumDetails.formats;
  
  
  const album7 = {
    title: 'Naked',
    albumDetails: {
      released: new Date('March 15, 1988'),
      labels: ['Sire', 'EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  const talkingHeadsAlbums = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7
  ];
  
  // Exercise 8:  Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels
  
  labels = talkingHeadsAlbums[4].albumDetails.labels;
  
  
  // Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released property to album6's released property
  
  talkingHeadsAlbums[6].albumDetails.released = talkingHeadsAlbums[5].albumDetails.released;
  
  // Exercise 10:  Using the pre-defined variable named albumIdx below, assign the albumDetails object of the album located within the talkingHeadsAlbums array at the index represented by the value of albumIdx to a variable named albumDetails
  
  let albumIdx = 4;
  
  
  
  
  /********** Don't look below here **********/
  console.log('=========================== Excercise console.logs =============')
  console.log('Exercise 1:', title);
  console.log('Exercise 2:', label);
  console.log('Exercise 3:', album3.albumDetails.formats[1]);
  console.log('Exercise 4:', album3.albumDetails.released.toLocaleDateString());
  console.log('Exercise 5:', album4.albumDetails.label);
  console.log('Exercise 6:', album5.albumDetails.labels[1]);
  console.log('Exercise 7:', formats);
  console.log('Exercise 8:', labels);
  console.log('Exercise 9:', talkingHeadsAlbums[5].albumDetails.released.toLocaleDateString());
  console.log('Exercise 10:', albumDetails);
  console.log('===================================================================')
  