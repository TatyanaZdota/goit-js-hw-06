const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('#controls');
const inputValueEl = inputEl.firstElementChild
const boxesEl = document.querySelector('#boxes')


buttonCreate.addEventListener('click', onButtonCreateClick);
buttonDestroy.addEventListener('click', onButtonDestroyClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}; 

function onButtonCreateClick (event) {createBoxes(inputValueEl.value)
};
function onButtonDestroyClick (event) {boxesEl.innerHTML = ''}
  
function createBoxes(amount) {
    let size = 30;
  for (let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');
    box.style.margin = '10px';
    box.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(box);
    box.style.width = size + 'px';
    box.style.height = size + `px`;
    size += 10;
    
  }
}




