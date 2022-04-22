//Constructor-objeto y Array

let info_clientes = new Array();
const guardo_info = "info_clientes";


class Clientes {

constructor(nombre,apellido,edad,fecha,mail,telefono,marca){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.fecha = fecha;
    this.mail = mail;
    this.telefono = telefono;
    this.marca = marca;
}

}


//Boton y funcion

let boton_1 = document.getElementById("btn")

boton_1.addEventListener("click",enviar) 

function enviar(){
    validarDatos() ? cargaDatosClientes() : alert("Por favor complete todos los datos solicitados")

}



//Valida datos

function validarDatos(){

    let datos_nombre = document.getElementById("nombre").value;
    let datos_apellido = document.getElementById("apellido").value;
    let datos_edad = document.getElementById("edad").value;
    let datos_fecha = document.getElementById("fecha").value;
    let datos_mail = document.getElementById("mail").value;
    let datos_telefono = document.getElementById("telefono").value;
    let datos_marca = document.getElementById("marca").value;

    if (!datos_nombre ){
        alert("INGRESE TODOS LOS DATOS SOLICITADOS");
        
        return false;
    }

    if (!datos_apellido ){
        alert("INGRESE TODOS LOS DATOS SOLICITADOS")
        
        return false
    }

    if (!datos_edad ){
        alert("INGRESE TODOS LOS DATOS SOLICITADOS")
        
        return false
    }
    if (!datos_fecha ){
        alert("INGRESE TODOS LOS DATOS SOLICITADOS")
        
        return false
    }
    if (!datos_mail ){
        alert("INGRESE TODOS LOS DATOS SOLICITADOS")
        
        return false
    }
    if (!datos_telefono ){
        alert("INGRESE TODOS LOS DATOS SOLICITADOS")
        
        return false
    }
    if (!datos_marca ){
        alert("INGRESE TODOS LOS DATOS SOLICITADOS")
        
        return false
    }

    return true
}

//Carga datos clientes

function cargaDatosClientes(){


let nombre1 = document.getElementById("nombre").value
let apellido1 = document.getElementById("apellido").value
let edad1 = document.getElementById("edad").value
let fecha1 = document.getElementById("fecha").value
let mail1 = document.getElementById("mail").value
let telefono1 = document.getElementById("telefono").value
let marca1 = document.getElementById("marca").value

let cliente = new Clientes(nombre1,apellido1,edad1,fecha1,mail1,telefono1,marca1);

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

    let valido_edad = document.getElementById("edad").value;
    
    valido_edad >= 18 ? nuevoFormulario() : creandoH2()
    
        
}

function creandoH2(){
    let h2 = document.createElement("h2")
    h2.innerHTML = "<h2>Es necesario ser mayor de 18 años para solicitar el prestamo</h2>"
    document.body.append(h2)
}


//Formulario 2 para funcion nuevoFormulario

function nuevoFormulario(){
    let formulario2 = document.getElementById ("formulario2")

    let p1 = document.createElement("h2")
    p1.innerHTML = "<h2>Sus datos está correctos, por favor ingrese los datos restantes para calcular monto disponible y cuota</h2>"
    formulario2.append(p1)
    
    let input1 = document.createElement("input")
    input1.type = "Number"
    input1.id = "salario"
    input1.required
    input1.placeholder = "Ingrese su salario neto"
    formulario2.append(input1)

    let boton_2 = document.createElement("button")
    boton_2.type = "button"
    boton_2.id = "btn2"
    boton_2.innerHTML = "Enviar"
    formulario2.append(boton_2)
    boton_2.addEventListener("click",enviar2)


    reset()
}

function reset() {
    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("edad").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("mail").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("marca").value = ""
        
}

//Verificacion de Salario y montos para cuotas

function ingreso_salario() {

    let salario = document.getElementById("salario").value;
    
    info_clientes.push(salario)

    console.log(info_clientes)

    if (salario >= 50001 && salario <= 100000 ) { 
    
        let p2 = document.createElement("p")
        p2.innerHTML = "<p> Usted puede acceder a una finaciacion de $200000, en breve un asesor se contactará </p>"
        document.body.append(p2)
        
    }else if (salario >= 100001 && salario <= 150000 ) {
        let p3 = document.createElement("p")
        p3.innerHTML = "<p> Usted puede acceder a una finaciacion de $400000, en breve un asesor se contactará </p>"
        document.body.append(p3)
        
    }else if (salario >= 150001 && salario <= 200000 ) {
        let p4 = document.createElement("p")
        p4.innerHTML = "<p> Usted puede acceder a una finaciacion de $600000, en breve un asesor se contactará </p>"
        document.body.append(p4)
    
    }else if (salario >= 200001) {
        let p5 = document.createElement("p")
        p5.innerHTML = "<p> Usted puede acceder a una finaciacion de $1000000, en breve un asesor se contactará </p>"
        document.body.append(p5)
    }else{
        let p6 = document.createElement("p")
        p6.innerHTML = "<p> Su salario no cumple los requisitos necesarios, en breve un asesor se contactará </p>"
        document.body.append(p6)

    }    
}

//Funcion boton 2

function enviar2(){
 
    if(validarDatos2){
  
        ingreso_salario()

 }else{
   alert("Complete los datos solicitados")
 }   
}

//Validacion salario
function validarDatos2(){

    let datos_salario = document.getElementById("salario").value;
    
    if (!datos_salario ){
        alert("INGRESE TODOS LOS DATOS SOLICITADOS");
        
        return false;
    }

    return true;
}


function recibir_info_clientes(){

    let recibo = localStorage.getItem(guardo_info);
    if (recibo){

        recibo = JSON.parse(recibo);

        guardo_info = recibo;
    }
}


