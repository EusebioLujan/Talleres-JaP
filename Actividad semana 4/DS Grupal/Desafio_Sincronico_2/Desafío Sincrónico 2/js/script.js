const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí
window.onload= function(){
  const container = document.getElementById("container")

  /* iteramos en el array de data */
  DATA.map((e)=>{
    const parrafo= document.createElement("p");
    parrafo.textContent= `${e.name} ${e.lastname}`;
    container.appendChild(parrafo)
  })
}
//
