const enterButton = document.querySelector(".btn--clickme");

const passWord = "122996";
let active = 0;
const unlock = function () {
  document.querySelector(".btn--clickme").textContent = "SIKE GOTTEM";
  active++;
};

enterButton.addEventListener("click", function () {
  if (active === 0) {
    let userEntry = prompt(`What's the password?`);
    if (userEntry === passWord) {
      alert("ACCESS GRANTED 🟢 ");
      unlock();
    } else {
      alert("ACCESS DENIED 🛑 ");
    }
  }
});
