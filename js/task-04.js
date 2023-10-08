const refs = {
decrementBtn: document.querySelector('button[data-action="decrement"]'),
incrementBtn: document.querySelector('button[data-action="increment"]'),
valueEl: document.querySelector('#value'),
};


refs.decrementBtn.addEventListener('click', onDecrementButtonClick);
refs.incrementBtn.addEventListener('click', onIncrementButtonClick);

let counterValue = 0;

function onDecrementButtonClick (event) {
counterValue -= 1;
refs.valueEl.textContent = counterValue
};

function onIncrementButtonClick (event) {
   counterValue +=1;
   refs.valueEl.textContent = counterValue
};
