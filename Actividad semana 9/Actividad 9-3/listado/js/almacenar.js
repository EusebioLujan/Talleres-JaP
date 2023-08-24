document.addEventListener("DOMContentLoaded", function () {
    const agregar = document.getElementById("agregar");
    const itemInput = document.getElementById("item");
    const contenedor = document.getElementById("contenedor");
    const limpiar = document.getElementById("limpiar");
    const itemArray = JSON.parse(localStorage.getItem("itemArray")) ?? [];
  
    function actualizarLista() {
      contenedor.innerHTML = "";
      /* mapeo de la informacion */
      itemArray.map((itemText) => {
        const newItem = document.createElement("li");
        newItem.textContent = itemText;
  /* se agrega el icono para eliminar */
        const deleteIcon = document.createElement("span");
        deleteIcon.className = "delete-icon";
        deleteIcon.textContent = "🗑️";
        deleteIcon.addEventListener("click", () => eliminarItem(itemText));
        newItem.appendChild(deleteIcon);
        contenedor.appendChild(newItem);
      });
    }
  
    function eliminarItem(itemText) {
        /* se revisa si el item text existe si existe se utiliza en el if si no existe te devuelve -1 */
      const itemIndex = itemArray.indexOf(itemText);
      if (itemIndex !== -1) {
        /* lo que hace el splice es para eliminar el elemento en la posicion del item index del array item array */
        itemArray.splice(itemIndex, 1);
        localStorage.setItem("itemArray", JSON.stringify(itemArray));
        actualizarLista();
      }
    }
  
    agregar.addEventListener("click", () => {
      const newItemText = itemInput.value.trim();
      if (newItemText) {
        itemArray.push(newItemText);
        localStorage.setItem("itemArray", JSON.stringify(itemArray));
        itemInput.value = "";
        actualizarLista();
      }
    });
  
    limpiar.addEventListener("click", () => {
      contenedor.innerHTML = "";
      /* modifico el array ya existente y todos los elementos existente son eliminados por base del 0 */
      itemArray.length = 0;
      localStorage.removeItem("itemArray");
    });
  
    actualizarLista();
  });
  