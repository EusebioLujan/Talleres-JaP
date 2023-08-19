const buttonAdd = document.getElementById("buttonAdd");
const buttonRemove = document.getElementById("buttonRemove");
const container = document.getElementById("container");
const inputParagraph = document.getElementById("inputParagraph");

buttonAdd.addEventListener("click", function () {
  let text = inputParagraph.value;
  if (text) {
    let paragraph = document.createElement("p");
    paragraph.appendChild(document.createTextNode(text));
    container.appendChild(paragraph);
    inputParagraph.value = "";
  } else {
    alert("Debe ingresar algún texto para ser ingresado");
  }
});

// Escribe el código a continuación
buttonRemove.addEventListener("click", () => {
  let paragraph = container.getElementsByTagName("p");
  paragraph.length > 0
    ? paragraph[paragraph.length - 1].remove()
    : alert("No hay Parrafos para eliminar");
});
