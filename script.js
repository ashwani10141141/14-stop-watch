const buttonele = document.querySelectorAll("button");
const displayEle = document.querySelector(".display");

for (let i = 0; i < buttonele.length; i++) {
  buttonele[i].addEventListener("click", () => {
    const btnValue = buttonele[i].textContent;

    if (btnValue === "C") {
      clearfunction();
    } else if (btnValue === "=") {
      claculateFunction();
    } else {
      appendFunction(btnValue);
    }
  });
}
function clearfunction() {
  displayEle.value = "";
}
function claculateFunction() {
  displayEle.value = eval(displayEle.value);
}
function appendFunction(btnValue) {
  displayEle.value += btnValue;
}
