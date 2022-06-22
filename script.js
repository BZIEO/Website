const enterButton = document.querySelector(".btn--clickme");
const box = document.querySelector(".center--box");
const birthDay = "122996";
const passWord = "bzieo";

let active = 0;

//Function if birthday is guessed
const gottem = function () {
  document.querySelector(".btn--clickme").textContent = "SIKE GOTTEM";
  active++;
};

//Function if password guessed
const unlock = function () {
  enterButton.classList.add("hidden");
  box.classList.add("entered-box");
  location.replace("/main.html");
};

const exitScreen = function () {
  let welcome = document.createElement("button");
  let welcomeText = document.createTextNode("Exit");
  welcome.appendChild(welcomeText);
  welcome.classList.add("inverse");
  box.appendChild(welcome);
};

enterButton.addEventListener("click", function () {
  if (active === 0) {
    let userEntry = prompt(`What's the password?`);
    if (userEntry === birthDay) {
      alert("ACCESS GRANTED 🟢 ");
      gottem();
    } else if (userEntry === passWord) {
      unlock();
    } else {
      alert("ACCESS DENIED 🛑 ");
    }
  }
});
