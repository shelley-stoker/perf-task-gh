//Please include the appropriate code after the given comments
//Gloria High
//November 28
//Assignment Number and Topic Chosen: 3.04 Program - Dice Game

//this is the array/list
const guessDisplay = [];
const userGuesses = [];
const compGuesses = [];
diceSides = 0
numGuesses = 0

adjective = prompt("Please enter an adjective that matches you:");
person = prompt("Please enter your name");
//calling procedures
sayHello(person, adjective );
diceSides = parseInt(prompt('How many sides on your dice?'));
guessRoll(diceSides);
//function with parameter
function sayHello(person,adjective) { //defines the function with parameters person and adjective

  var greeting = ('Hello,' +  adjective +" "+  person + ' ,how are you? Get ready to play this fun game!');
  
  console.log(greeting);
}
function guessRoll(diceSides) {  //defines the function with parameter diceSides
  
  //conditional
if (diceSides > 10) {
    console.log('Too many sides!!');
    diceSides = parseInt(prompt('How many sides on your dice?')); 
} else {
  console.log('This is a valid dice.')
}
  console.log('We will be using a ' + diceSides + ' sided dice.')
}

random = Math.floor(Math.random() * diceSides) + 1;
compGuesses.push(random);
//input
    let number = parseInt(prompt('Guess which number the dice will land on: '));
//adds item to a list
  userGuesses.push(number);
  //loop or iteration
  while(number !== random) {
        number = parseInt(prompt('Guess which number the dice will land on:'));
    numGuesses += number
    //adds item to a list
    userGuesses.push(number);
    
    }  

  // using list
guessDisplay[1] = "You're a genius," + person;
console.log("The numbers you guessed were: " + userGuesses);
console.log("The number the computer guessed was: " + compGuesses);
console.log( "It took you " + numGuesses + "tries to guess the number.")