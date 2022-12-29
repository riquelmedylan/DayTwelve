const textShadow = document.querySelectorAll(".text");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    if (textShadow[i].classList.contains("disable-text")) {
      textShadow[i].classList.remove("disable-text");
    } else {
      textShadow[i].classList.add("disable-text");
    }
  });
});
