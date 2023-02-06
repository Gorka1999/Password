//
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");
let btn_mostrar = document.getElementById("mostrar");
let mostrar_ojo = document.getElementById("mostrar_ojo");
let boton = document.getElementById("enviar");
let mensaje = document.getElementById("resultado");

let estado_ojo = password.getAttribute("type");
console.log(estado_ojo);

// captura el boton para mostrar/ocultar la contraseña
btn_mostrar.addEventListener("click", () => {
  let estado_ojo = password.getAttribute("type");
  switch (estado_ojo) {
    case "password":
      password.setAttribute("type", "text");
      mostrar_ojo.src = "./img/ojo.png";
      break;

    case "text":
      password.setAttribute("type", "password");
      mostrar_ojo.src = "./img/ojoCerrado.png";
      break;
  }
});

// Implementar checkbox de condiciones
// ---------habilitar boton--------

let checkbox = document.getElementById("checkbox");
boton.disabled = true;

checkbox.addEventListener("change", habilitar);

function habilitar(event) {
  let pulsado = checkbox.checked;
  console.log(pulsado);
  switch (pulsado) {
    case true:
      boton.disabled = false;
      break;

    case false:
      boton.disabled = true;
      break;
  }
}


// ---------funcion boton--------
boton.addEventListener("click",()=>{
  nombre = usuario.value;
  mensaje.innerHTML= `Bienvenido ${nombre}`;

  //limpiar valores
  usuario.value="";
  password.value="";
})