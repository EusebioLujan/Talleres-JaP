function FormValidation() {
  //se obtiene el valor del campo por su ID
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const correo = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña").value;
  const condiciones = document.getElementById("condiciones").checked;
// se hace una verificación basica para que los campos no esten vacios "aunque en el form se usa required pero nunca esta demas validar
//la informacion que se envia hacia el servidor"
  if (nombre === "" || apellido === "" || correo === "" || contraseña === "" || !condiciones) {
    //si se cumple con alguna condicion, muestra la alerta avisando a la persona X
    alert("Todos los campos son requeridos para el registro. ¡Gracias!");
    return false;
    // devuelve false para que el envio del formulario se cancele
  }
  // si los campos de verificación estan completos y se ah marcado los checkbox te devuelve esta alerta avisando del envio 
  alert("¡Tu formulario fue enviado con éxito!");
  return true;
  //y devuelve true para permitir el envio del formulario
}
