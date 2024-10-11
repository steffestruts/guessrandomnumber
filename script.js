const randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

btn = document.getElementById("btn-guess").addEventListener('click', () => {
  userGuess = parseInt(document.getElementById("input-guess").value);
  attempts++;

  if(userGuess == randomNumber) {
    document.getElementById("right-guess").textContent = "Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.";
  }
  else if (userGuess > randomNumber) {
    document.getElementById("right-guess").textContent = "För högt";
  }
  else (userGuess < randomNumber); {
    document.getElementById("right-guess").textContent = "För lågt";
  }
});

console.log(randomNumber);