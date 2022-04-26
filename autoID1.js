let guardoAutos1 = "ID1autos"



let botonID1 = document.getElementById("btninfo1")

botonID1.addEventListener("click",infoAutoID1)

function infoAutoID1(){

    for (const auto1 in autoID_1) {
    console.log(autoID_1[auto1]) 
    }
    
    crearFicha()
    cargaDatosAuto1()
    datosAuto.push(autoID_1)
    localStorage.setItem(guardoAutos1,JSON.stringify(datosAuto))
    console.log(datosAuto)
}

//Crear ficha

function crearFicha(){
    let galOfertas = document.getElementById("galofertas")

    let divFicha = document.createElement("div");
    divFicha.id = "fichaAuto";
    galOfertas.append(divFicha);
}

//Datos autos
function cargaDatosAuto1(){

let fichaAuto = document.getElementById("fichaAuto")
let h2 = document.createElement("h2")
h2.id = "subFicha"
h2.innerHTML = "<h2>"+ (autoID_1?.modelo) +"</h2>"
fichaAuto.append(h2)

let imagen = document.createElement("img")
imagen.src = (autoID_1?.imagen);
imagen.alt = "Imagen Classic"
imagen.id = "imgAuto1"
fichaAuto.append(imagen)

let lista = document.createElement("li")
lista.id = "lista"
lista.innerHTML = "<li>"+
"<ul>"+"Marca:"+(autoID_1?.marca)+"</ul>"+
"<ul>"+"Modelo:"+(autoID_1?.modelo)+"</ul>"+
"<ul>"+"Año:"+(autoID_1?.año)+"</ul>"+
"<ul>"+"Color:"+(autoID_1?.color)+"</ul>"+
"<ul>"+"Km:"+(autoID_1?.kilometraje)+"</ul>"+
"<ul>"+"Combustible:"+(autoID_1?.combustible)+"</ul>"+
"<ul>"+"Precio:"+(autoID_1?.precio)+"</ul>"+
"</li>"
fichaAuto.append(lista)

let divBotones = document.createElement("div")
divBotones.id = "divBotones"
fichaAuto.append(divBotones)

botones()
}



function recibir_info_auto(){

    let recibo = localStorage.getItem(guardoAutos1);
    if (recibo){

        recibo = JSON.parse(recibo);

        guardoAutos1 = recibo;
    }
}