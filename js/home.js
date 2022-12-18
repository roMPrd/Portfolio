// const square8 = document.getElementById("s8");
// const buttonwelcome = document.querySelector("#buttonwelcome");

// buttonwelcome.addEventListener("click", (event) => {
//   console.log("buttonwelcome");
// });

function buttonwelcome() {
  console.log("buttonwelcome");
  const element = document.getElementById('s8')
  element.classList.remove("s8");
  element.offsetWidth
  element.classList.add("s8");
}

function fadeAway() {
  const nodelay = document.getElementsByClassName('nodelay')
  const delay1 = document.getElementById('delay1')
  delay1.classList.remove("delay1");
  delay1.offsetWidth
  const delay2 = document.getElementById('delay2')
  delay2.classList.remove("delay2");
  delay2.offsetWidth
  console.log(nodelay);
  // nodelay.forEach(element => console.log(element));
  nodelay.forEach(element => {element.classList.add("fadeAway")});
  nodelay.classList.add("fadeAway");
  delay1.classList.add("fadeAway");
  delay2.classList.add("fadeAway");
}
