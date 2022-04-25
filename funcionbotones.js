//Funcion botones ficha
function botones(){
    
let botonCompra = document.createElement("button")
botonCompra.id = "botonCompra"
botonCompra.innerHTML = "Comprar"
botonCompra.addEventListener("click", compra)
fichaAuto.append(botonCompra)

let botonCancelar = document.createElement("button")
botonCancelar.id = "botonCancelar"
botonCancelar.innerHTML = "Cerrar"
botonCancelar.addEventListener("click",cerrar)
fichaAuto.append(botonCancelar)

}


function cerrar(){
    let eliminarficha = document.getElementById("fichaAuto")
    eliminarficha.remove();

}
//Funcion formulario

function compra(){

    let eliminarlista = document.getElementById("lista")
    eliminarlista.remove()

    let eliminarboton = document.getElementById("botonCompra")
    eliminarboton.remove()

    let completeDatos = document.createElement("h3")
    completeDatos.id = "subformulario"
    completeDatos.innerHTML = "<h3>Complete sus datos</h3>"
    fichaAuto.append(completeDatos)

    let inputNombre = document.createElement("input")
    inputNombre.id = "inputNombre"
    inputNombre.placeholder = "Ingrese su nombre"
    fichaAuto.append(inputNombre)

    let inputApellido = document.createElement("input")
    inputApellido.id = "inputApellido"
    inputApellido.placeholder = "Ingrese su Apellido"
    fichaAuto.append(inputApellido)

    let inputEdad = document.createElement("input")
    inputEdad.id = "inputEdad"
    inputEdad.type = "Number"
    inputEdad.placeholder = "Ingrese su Edad"
    fichaAuto.append(inputEdad)

    let inputFecha = document.createElement("input")
    inputFecha.id = "inputFecha"
    inputFecha.placeholder = "Ingrese su fecha de nacimiento"
    inputFecha.type = "date"
    fichaAuto.append(inputFecha)

    let inputMail = document.createElement("input")
    inputMail.id = "inputMail"
    inputMail.placeholder = "Ingrese su mail"
    inputMail.type = "email"
    fichaAuto.append(inputMail)

    let inputTelefono = document.createElement("input")
    inputTelefono.id = "inputTelefono"
    inputTelefono.placeholder = "Ingrese su telefono"
    fichaAuto.append(inputTelefono)
      
    let botondatos = document.createElement("button")
    botondatos.id = "botonDatos"
    botondatos.innerHTML = "Enviar"
    botondatos.addEventListener("click",enviar)
    fichaAuto.append(botondatos)
}