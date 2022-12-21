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
  // const delay1 = document.getElementsByClassName('delay1')
  const welcomeText = document.getElementById('welcome-text')
  const delay1 = document.querySelectorAll('.delay1')
  const delay15 = document.getElementById('delay1-5')
  const delay2 = document.getElementById('delay2')
  delay15.classList.remove("delay1-5");
  delay15.offsetWidth
  delay2.classList.remove("delay2");
  delay2.offsetWidth
  console.log(delay1);
  delay1.forEach((element) => {element.classList.add("fadeAway");});
  delay15.classList.add("fadeAway");
  delay2.classList.add("fadeAway");
  // sleep(2000);
  setTimeout(() => { welcomeText.classList.add("d-none"); }, 5000);
  // welcomeText.classList.add("d-none");
}

function retract() {
  const sidebar = document.getElementById('sidebar')
  const chevron = document.getElementById('chevron-btn')
  console.log(sidebar)

  if (sidebar.classList.contains('retract-effect')) {
    sidebar.classList.remove("retract-effect");
    chevron.classList.remove("fa-chevron-right");
    chevron.classList.add("fa-chevron-left");
  } else {
    sidebar.classList.add("retract-effect");
    chevron.classList.remove("fa-chevron-left");
    chevron.classList.add("fa-chevron-right");
  }
}
