//Constructor-objeto y Array

let info_clientes = new Array();
const guardo_info = "info_clientes";


class Clientes {

constructor(nombre,apellido,edad,fecha,mail,telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.fecha = fecha;
    this.mail = mail;
    this.telefono = telefono;
}

}


//Boton y funcion

function enviar(){
    validarDatos() ? cargaDatosClientes() : Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingrese todos los datos solicitados',
      })
}



//Valida datos

function validarDatos(){

    let datos_nombre = document.getElementById("inputNombre").value;
    let datos_apellido = document.getElementById("inputApellido").value;
    let datos_edad = document.getElementById("inputEdad").value;
    let datos_fecha = document.getElementById("inputFecha").value;
    let datos_mail = document.getElementById("inputMail").value;
    let datos_telefono = document.getElementById("inputTelefono").value;

    if (!datos_nombre ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los datos solicitados',
          })
        
        return false;
    }

    if (!datos_apellido ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los datos solicitados',
          })  
        return false
    }

    if (!datos_edad ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los datos solicitados',
          })
        return false
    }
    if (!datos_fecha ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los datos solicitados',
          })
        return false
    }
    if (!datos_mail ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los datos solicitados',
          })
        return false
    }
    if (!datos_telefono ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los datos solicitados',
          })
        return false
    }

    return true
}

//Carga datos clientes

function cargaDatosClientes(){


let nombre1 = document.getElementById("inputNombre").value
let apellido1 = document.getElementById("inputApellido").value
let edad1 = document.getElementById("inputEdad").value
let fecha1 = document.getElementById("inputFecha").value
let mail1 = document.getElementById("inputMail").value
let telefono1 = document.getElementById("inputTelefono").value

let cliente = new Clientes(nombre1,apellido1,edad1,fecha1,mail1,telefono1);

validarEdad()

info_clientes.push(cliente);

localStorage.setItem(guardo_info,JSON.stringify(info_clientes));

console.log(info_clientes)


//Acceso condicional, desestructuracion y spread

console.log(cliente?.nombre || "No existe")
console.log(cliente?.telefono || "No existe")
console.log(cliente?.nacionalidad || "No existe")

const {nombre,apellido,telefono} = cliente

console.log(nombre)
console.log(apellido)
console.log(telefono)

const objeto2 = {
    ...cliente
}

console.log(objeto2)
}


//Validacion de edad

function validarEdad() {

    let valido_edad = document.getElementById("inputEdad").value;
    
    valido_edad >= 18 ? Swal.fire({
        icon: 'success',
        title: 'Perfecto',
        text: 'Todos los datos se cargaron correctamente, en breve un asesor se contactara para continuar con su trámite',
      }) && cerrar()
      
      : Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Disculpe, es necesario ser mayor de edad',
        footer: '<a href="">Intente nuevamente más adelante</a>'
      })   
}


function recibir_info_clientes(){

    let recibo = localStorage.getItem(guardo_info);
    if (recibo){

        recibo = JSON.parse(recibo);

        guardo_info = recibo;
    }
}


