document.addEventListener("DOMContentLoaded", function () {
    const agregar= document.getElementById("agregar");
    const itemInput = document.getElementById("item");
    const contenedor = document.getElementById("contenedor");
    const limpiar = document.getElementById("limpiar")

    agregar.addEventListener("click", function () {
      const newItemText = itemInput.value.trim();

      if (newItemText !== "") {
        const newItem = document.createElement("li");
        newItem.textContent = newItemText;
        contenedor.appendChild(newItem);
        itemInput.value = "";
      }
    });
limpiar.addEventListener("click",()=>{
    contenedor.innerHTML = ""
})
  });