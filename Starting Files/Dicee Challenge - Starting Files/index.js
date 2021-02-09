let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber1);
console.log(randomNumber2);

var die1 = document.querySelector(".img1")
die1.setAttribute("src", `images/dice${randomNumber1}.png` )

var die2 = document.querySelector(".img2")
die2.setAttribute("src", `images/dice${randomNumber2}.png` )

function changeTitle (randomNumber1, randomNumber2) {
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!"
  } else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
  }

}

changeTitle(randomNumber1, randomNumber2)
