const btn = document.querySelector("#button");
btn.onclick = function () {
  console.log("You clicked me arse!");
  console.log("I hope it worked");
};

const btn2 = document.querySelector("#buttonSecond");
btn2.addEventListener("click", function () {
  console.log("You clicked the second button.");
});

function twist() {
  console.log("TWIST");
}

function shout() {
  console.log("SHOUT");
}

const btnTas = document.querySelector("#tas");

// CANT HAVE TWO DIFFERENT CALLBACK FUNCTIONS FOR THE SAME LISTENER
// btnTas.onclick = shout;
// btnTas.onclick = twist;

btnTas.addEventListener("click", twist);
btnTas.addEventListener("click", shout);
