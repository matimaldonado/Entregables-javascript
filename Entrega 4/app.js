let formulario = document.getElementById("form");
console.log(formulario)
formulario.addEventListener("submit", enviarDatos)

function enviarDatos(enviar){
    enviar.preventDefault();
    let dato = enviar.target
    console.log(dato[0].value);
    console.log(dato[1].value);
    console.log(dato[2].value);
    console.log(dato[3].value);
    console.log(dato[4].value);
}

let boton = document.getElementById("enviado");
let aviso = boton.addEventListener("click",datos);

function datos() {
      alert("Muchas gracias en breve uno de nuestros asesores se pondrá en contacto con usted para completar su trámite")
}

let txt = document.getElementsByTagName("p")
console.log(txt)

let agrego = document.getElementById("contact")
agrego.innerHTML = "<h2>Contactanos</h2>"
console.log(agrego)

let crear = document.createElement("p")
crear.innerHTML = "<p>Tel:2615698167</p> <p>Domicilio:Calle Falsa 123</p>"
document.body.append(crear)

