const refs = {
buttonEl: document.querySelector('.change-color'),
bodyEl: document.body,
colorNameEl: document.querySelector('.color'),
};

refs.buttonEl.addEventListener('click', onButtonElClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
function onButtonElClick (event) {
  refs.bodyEl.style.background = getRandomHexColor();
  refs.colorNameEl.textContent = refs.bodyEl.style.background;
  };
