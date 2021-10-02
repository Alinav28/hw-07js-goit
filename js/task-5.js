let nameImputRef = document.querySelector('#name-input');
let nameOutputRef = document.querySelector('#name-output');
nameImputRef.addEventListener('input', inutChang);

function inutChang(event) {
  if (nameImputRef.value === "") {
    nameOutputRef.textContent = 'незнакомец';
  } else {
    nameOutputRef.textContent = event.currentTarget.value;

  }
}
