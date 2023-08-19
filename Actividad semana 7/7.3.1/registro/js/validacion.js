function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
  const alertDanger=document.getElementById("alert-danger");
  alertDanger.classList.add("show");
  setTimeout(()=>{
    alertDanger.classList.remove("show");
  },2000)
}

document.addEventListener("DOMContentLoaded", ()=> {
  const regBtn = document.getElementById("regBtn");
  regBtn.addEventListener("click", validarRegistro);
});

function validarRegistro() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const password1 = document.getElementById("password1").value;
  const password2 = document.getElementById("password2").value;
  const terminos = document.getElementById("terminos").checked;


  if (
    nombre.trim() === "" ||
    apellido.trim() === "" ||
    email.trim() === "" ||
    password1.trim() === "" ||
    password2.trim() === ""
  ) {
    showAlertError();
    return;
  }

  if (password1.length < 6 || password1 !== password2) {
    showAlertError();
    return;
  }

  if (!terminos) {
    showAlertError();
    return;
  }

  showAlertSuccess();
}
