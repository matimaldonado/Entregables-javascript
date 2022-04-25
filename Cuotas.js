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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingrese todos los datos solicitados',
          })
        return false;
    }

    return true;
}
