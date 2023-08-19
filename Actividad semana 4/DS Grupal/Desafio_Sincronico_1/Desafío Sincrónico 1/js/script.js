document.addEventListener("DOMContentLoaded", function () {
  // Escribe el código necesario aquí
  let lorem = document.getElementById("lorem");
  let boton = document.getElementById("highlightBtn");
  const handlerHightBtn = () => {
    lorem.classList.contains("highlight")
      ? lorem.classList.remove("highlight")
      : lorem.classList.add("highlight");
    lorem.classList.contains("highlight")
      ? (boton.textContent = "Ctrl Z")
      : (boton.textContent = "Resaltar!");
  };
  boton.addEventListener("click", handlerHightBtn);

  //
});
