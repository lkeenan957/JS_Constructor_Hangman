// Word.js: Contains a constructor, Word that depends on the Letter constructor.This is used to create an object representing the current word the user is attempting to guess.That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word//

// A function that returns a string representing the word.This should call the function on each letter object(the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

// A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in Letter.js)


var Letter = require("./Letter.js")

function Word (RandomWord){
  this.word = RandomWord;
  this.LetterConArray = [];
  this.underscores = [];

  this.generateLetterArray = function(){

    for(var i = 0; i < this.word.length; i++){
      this.LetterConArray.push(new Letter(this.word[i]))

    }
    console.log(this.LetterConArray)
    this.generateUndercores()
  }

  this.generateUndercores = function(){
    for(var i = 0; i < this.LetterConArray.length; i++){
      this.underscores.push(this.LetterConArray[i].checkedIfGuessed())
    }
    console.log(this.underscores.join(" "))
  }

}

module.exports = Word;