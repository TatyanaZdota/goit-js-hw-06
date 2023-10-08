const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur (event) {
event.currentTarget.value.length === parseInt(inputEl.dataset.length) ? 
inputEl.classList.add('valid') || inputEl.classList.replace('invalid', 'valid'): inputEl.classList.add('invalid') || inputEl.classList.replace('valid', 'invalid');
};

