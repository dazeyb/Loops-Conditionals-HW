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

//Forgot the = again

for(let i = 2; i <= 200; i += 2) {
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
}   else {
    kittyFunction();
    }
}

// Fizz Buzz ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Answered this in 2 minutes, spent 35 minutes diagnosing a curly, lesson learned! for(parameters){code}; // Anything outside is undefined


for(let i = 1; i <=100; i++) {
    
    if(i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");

}   else if(i % 3 === 0) {
    console.log("Fizz");
    
}   else if(i % 5 === 0) {
    console.log("Buzz");
}  else {
   console.log(i);
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

for(i = 0; i < ninjaTurtles.length; i++) {
    console.log(ninjaTurtles[i].toUpperCase());
}


// Ugly and wet, forgot how to list the whole array in one line and my iterations failed
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

// Dress 'em Up ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q1 I want to create a function that lists all items in a new object with a console log and`$[] = their outfit
// I could use math random to randomize, or rely on user input to select outfit. Neither I remember so I'm returning if I have time

const kristynsOutfits = function kristynsOutfits() {
    console.log(`Kristyn's 1st outfit includes ${kristynsCloset[5]}, ${kristynsCloset[3]} & ${kristynsCloset[0]}.`);
    console.log(`Her 2nd outfit includes ${kristynsCloset[1]}, ${kristynsCloset[2]} & ${kristynsCloset[4]}.`);
    console.log(`Her 3rd outfit includes ${kristynsCloset[1]}, ${kristynsCloset[3]} & ${kristynsCloset[2]}.`);
  } 
    
  kristynsOutfits();
  
  const thomsOutfits = function thomsOutfits() {
    console.log(`Thom's 1st outfit includes a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} & ${thomsCloset[2][0]}.`);
    console.log(`His 2nd outfit includes a ${thomsCloset[0][1]}, ${thomsCloset[1][1]} & ${thomsCloset[2][1]}.`);
    console.log(`His 3rd outfit includes a ${thomsCloset[0][2]}, ${thomsCloset[1][2]} & ${thomsCloset[2][2]}.`);
  } 
  
  thomsOutfits();


// Dirty Laundry ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q1 Had to alter my parameters a few times until it worked!

  for(let i = 0; i < kristynsCloset.length; i ++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}.`)
}


// Inventory ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Q2

console.log(thomsCloset[0] + thomsCloset[1] + thomsCloset[2]); // How to squeeze together hmmmm...

// I think this question was asking me to call on the arrays, not the individual elements, which is why I did what I did, as opposed to calling the point in memory where the arrays are.



// Multiples of 3 and 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let totalSum = 0;

for(let i = 0; i < 1000; i++) {
    if(i % 3 === 0 || i % 5 ===0){
        totalSum = totalSum + i;

    } else if(i % 3 === 0 && i % 5 ===0) {
        totalSum = totalSum + i;
    }
}

console.log(totalSum);

// This was a fun one, I learned a lot by trying different things, I'm 99% sure it's correct.
// Not sure why "totalSum += i" wasn't working, so I wrote it all out
