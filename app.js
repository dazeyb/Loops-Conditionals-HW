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

// Fizz Buzz Q1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const fizz = "Fizz";
const buzz = "Buzz";
const fizzBuzz = "FizzBuzz";

for(let i = 1; i <=100; i ++) {
    console.log(i);
} if(i % 3 === 0 && i%5 === 0) {
    console.log("FizzBuzz");
} else if(i % 3 === 0) {
    console.log("Fizz");
} else if(i % 5 === 0) {
    console.log("Buzz");
}






