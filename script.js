/* // Credit: https://www.geeksforgeeks.org/how-to-generate-random-number-in-given-range-using-javascript/
// Function to generate random number
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let attempt = 0;

let text = document.querySelector('#right-guess');

const btn = document.getElementById('#btn-guess').addEventListener("click", function() {
  let guess = document.getElementById('#input-guess').value;
  attempt++;

  if (randomNumber(0, 5) === guess) {
    alert('Win!');
    text.innerHTML = 'Rätt!'
    document.getElementById('#right-guess');
  }
  else {
    attempt++;
    alert('Försök igen');
  }
  console.log(randomNumber(0, 100));
})

console.log(guess); */

randomNumber = Math.floor(Math.random() * 100);

let attempt = 0;

document.getElementById('#btn-guess').addEventListener('click', function() {
  
})

console.log(test);