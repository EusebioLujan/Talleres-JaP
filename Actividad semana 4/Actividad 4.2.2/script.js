const checkAge = (age) => {
    /* lo que estoy haciendo es depende del valor de age se pregunta si es mayor igual a 18
    si es asi me devuelve un granted,si no ejecuto un confirm y como me retorna un booleano puedo 
    preguntar con ternarios si es true o false,granted para true y denied para false. */
    return age>=18?"granted":confirm("Do you have permission from your parents?")?"granted":"denied"
};
// 
let age = prompt("How old are you?", 18);
let accessStatus = checkAge(age);

if (accessStatus === "granted") {
    alert("Access Granted\nWelcome to our website!");
} else {
    alert("Access Denied\nYou need permission from your parents.");
}