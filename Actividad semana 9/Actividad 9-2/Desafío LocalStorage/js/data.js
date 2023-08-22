const DATA = localStorage.getItem("inputText");

if(DATA !== null){
    const dataSpan = document.getElementById("data");
    dataSpan.textContent += DATA;
}
