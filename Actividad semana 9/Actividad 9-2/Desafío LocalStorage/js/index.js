const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.addEventListener("click", () => {
  localStorage.setItem("inputText", inputText.value);
  inputText.value = "";
});
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => {
  localStorage.removeItem("inputText");
  inputText.value = "";
});
