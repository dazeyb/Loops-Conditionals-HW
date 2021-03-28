// Easy Going Q1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


for(let i = 1; i <= 20; i ++) {
    console.log(i)
}

// It returns undefined at the end, not sure if that will actually show or not.

/* 
for(let i = 1; i <= 20; i ++) {
    if (i <= 20) {
        console.log(i);
    }
}
*/ 

// I tried to get rid of the undefined (shows up in my terminal after running) and mess around with an if statement nested but it returned the same thing.





// Get Even ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*  This wasn't working and then I realized I was overengineering
for(let i = 1; i <= 200; i ++ ) {
    if {i % 2 == 0) {
        console.log(i);
    }
}
*/

for(let i = 2; i < 200; i += 2) {
        console.log(i);
}



// Excited Kitten Q1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function kittyFunction() {
    console.log("Love me, pet me! HSSSSSS!");
}

for(let i = 1; i <= 20; i ++) {
    kittyFunction();
}

// I wanted to try out a function
// Excited Kitten Q2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function kittyFunction() {
    console.log("Love me, pet me! HSSSSSS!");
}

const kittyPhrases = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

/* I was trying to do it a different way and it wasn't working. Essentially getting 1 of 3 numbers randomly, and doing an if/then to invoke one of the indices correlating with the cat responses. 

const kitty = {
    kittyChoice: null
  }
const randomIndex = Math.floor(Math.random() * kittyPhrases.length);

kitty.kittyChoice = kittyPhrases[randomIndex]; */


for(let i = 1; i <= 20; i ++) {
    if(i%2 === 0) {
        let kittySays = Math.floor(Math.random([i]) * kittyPhrases.length);
        console.log(kittyPhrases[kittySays]);
        kittyFunction(); // I left this in, it wasn't clear to me if they were only supposed to to give the even number responses on evens, or if both were to be said on evens. If it was supposed to alternate then commenting this out will work.
}   else {
    kittyFunction();
    }
}

// Fizz Buzz ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Answered this in 2 minutes, spent 35 minutes diagnosing a curly, lesson learned! for(parameters){code}; // Anything outside is undefined


for(let i = 1; i <=100; i++) {
    console.log(i);
    
    if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

}   else if(i % 3 === 0) {
    console.log("Fizz");
    
}   else if(i % 5 === 0) {
    console.log("Buzz");
    }
}



// Getting to Know You ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// Q1

kenny[0] = "Gameboy";

// Q2

jimClark[1] = jimClark[1] + 1;

// Q3

ryan[2] = "Gotham City";

// Q4

reuben.pop();
reuben.push("Chicago");

// Q5

/* 1st attempt
jimHaff.pop();
jimHaff.push("Marrakech", "Naypyitaw", "El Dorado");
*/

jimHaff.splice(3, 1,"Marrakech", "Naypyitaw", "El Dorado");


// Q6

jimHaff.splice(2, 1);



// Yell at the Ninja Turtles ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q1

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(i = 0; i < 1; i++) {
    console.log(ninjaTurtles[0].toUpperCase());
    console.log(ninjaTurtles[1].toUpperCase());
    console.log(ninjaTurtles[2].toUpperCase());
    console.log(ninjaTurtles[3].toUpperCase());
  }
// Ugly AF, forgot how to list the whole array in one line
// After committing, it said nothing to commit, tree up to date...

/*
3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.
*/


// Return of the Closets ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  
// Alien Attire ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q1

krystinsCloset.splice(0, 1);

let kristynsShoe = "left shoe";

thomsCloset[2].push(kristynsShoe);

// Q2



  ### Dress 'em Up
  1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!
  
  <hr>
  &#x1F534; The commit message should read: <br>
  "Commit 7 - Kristyn and Thom have their outfits ready for class - array practice"
  <hr>
  
  ### Dirty Laundry
  Continue looking at the closet arrays:
  1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
  
  ### Inventory
  2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
  
  <hr>
  &#x1F534; The commit message should read: <br>
  "Commit 8 - I loops through their closets".
  <hr>

  */</hr>

