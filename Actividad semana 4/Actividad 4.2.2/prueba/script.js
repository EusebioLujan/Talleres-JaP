let contador = 0;
document.getElementById("contador").textContent = contador;
function resta(){
    contador=contador-1;
    document.getElementById("contador").textContent = contador;
}
function suma(){
    contador=contador+1
    document.getElementById("contador").textContent = contador;
}

 let restar = document.getElementById("restar")
 let sumar = document.getElementById("sumar")
restar.addEventListener("click",resta)
sumar.addEventListener("click",()=>{suma()})