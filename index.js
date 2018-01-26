// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

// Letter.js should not require any other files.

//   Word.js should only require Letter.js

// HINT: Write Letter.js first and test it on its own before moving on, then do the same thing with Word.js

// HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)
var Word = require('./Word.js');
var inquirer = require('inquirer');
var isLetter = require('is-letter');


var wordArray = ["washington", "jefferson", "madison", "jackson", "obama", "abraham", "roosevelt", "kennedy", "reagan", "bush"];

var WordConstruct = new Word(wordArray[Math.floor(Math.random() * wordArray.length )])
var allowedGuesses = 12;
var wrongGuesses = [];
var correctGuesses = [];
console.log(WordConstruct)

function  startGame() {
  console.log("------------------------------------------------------");
  console.log("LETS SEE WHETHER YOU KNOW SOME OF THE PRESIDENTS OF US");


  inquirer.prompt([
    {
      name: "play",
      type: "list",
      message: "Ready to play?",
      choices: ["Yes", "No"]
    }
  ]).then(function(ans){
    if(ans.play === "Yes" || ans.play === "yes"){
      console.log("Lets start the game!");
      WordConstruct.generateLetterArray();
      userPrompting();
    }
    else{
      console.log("Opps! You are missing out");
      startGame();
    }
  })
};

function userPrompting(){
  inquirer.prompt([
    {
      type: "input",
      name: "userGuessedLetter",
      message: "Pick a letter",
      validate: function(value){
        if(isLetter(value)){
          return true;
        }
        else{
          return false;
        }
      }
    }
  ]).then(function(guess){
    if(Word.generateLetterArray.contains(guess.name)){
      console.log(Word.generateLetterArray);
      console.log(guess.name);
    }
  })
}

startGame();
