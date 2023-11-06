const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputElBlur);

function onInputElBlur(event) {
  event.currentTarget.value.length ===
  parseInt(event.currentTarget.dataset.length)
    ? event.currentTarget.classList.add("valid") ||
      event.currentTarget.classList.replace("invalid", "valid")
    : event.currentTarget.classList.add("invalid") ||
      event.currentTarget.classList.replace("valid", "invalid");
}
