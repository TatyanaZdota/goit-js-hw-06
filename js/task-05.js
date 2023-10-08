const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputElChange);

function onInputElChange (event) {
outputEl.textContent = event.currentTarget.value || "Anonymous"
}