let num = 123.456;

console.log(num.toFixed(2));

let min = 10;
let max = 20;

console.log(Math.random() * 100);
console.log(Math.floor(Math.random() * (max - min + 1) + min));

// Range 1 - 5, Is Users guess correct?
function guessNumber(guess) {
  let min = 1;
  let max = 5;
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(randomNumber);
  return randomNumber === guess;
}
console.log(guessNumber(4))
