const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  inputValue: document.querySelector("input"),
  boxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", onButtonCreateClick);
refs.buttonDestroy.addEventListener("click", onButtonDestroyClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonCreateClick(event) {
  createBoxes(refs.inputValue.value);
}
function onButtonDestroyClick(event) {
  refs.boxes.innerHTML = "";
}

function createBoxes(amount) {
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    const box = document.createElement("div");
    box.style.margin = "10px";
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = size + "px";
    box.style.height = size + "px";
    size += 10;
    refs.boxes.appendChild(box);
  }
}
