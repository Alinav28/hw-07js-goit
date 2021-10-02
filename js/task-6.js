// Знайти поле введення
const inputEl = document.querySelector("#validation-input");
//Функція
function inputCheck(event) {
  if (
    event.currentTarget.getAttribute("data-length") >
    event.currentTarget.value.length
  ) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }
}
inputEl.addEventListener("blur", inputCheck.bind(inputEl)); 