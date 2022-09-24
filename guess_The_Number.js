alert("Let's Play Guess The Number.. Press Ok to contiue");
let number = Math.floor(Math.random() * 101);

let chances = 0;

let numberGuess;
while (numberGuess != number) {
  numberGuess = prompt("Please Enter a Number_");

  if (numberGuess < number) {
    alert("Oops! My Number is GREATER than your Guess. let's try again... Press Ok");
  }

  else if (numberGuess > number) {
    alert("Oops! My Number is LESS than your Guess. let's try again... Press Ok");
  }

  chances++;
}

const score = 100 - chances;

const result = `BRAVO! The Number was ${number}. You Scored ${score}. You are a Champion Buddy!!!`;

alert(result);