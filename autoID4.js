let boton_ID4 = document.getElementById("btninfo4")

boton_ID4.addEventListener("click",infoAutoID4)

function infoAutoID4(){

    for (const auto4 in autoID_4) {
    console.log(autoID_4[auto4]) 
    }
    
    crearFicha()
    cargaDatosAuto4()
    datosAuto.push(autoID_4)
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
function cargaDatosAuto4(){

let fichaAuto = document.getElementById("fichaAuto")
let h2 = document.createElement("h2")
h2.id = "subFicha"
h2.innerHTML = "<h2>"+ (autoID_4?.modelo) +"</h2>"
fichaAuto.append(h2)

let imagen = document.createElement("img")
imagen.src = (autoID_4?.imagen);
imagen.alt = "Imagen Gol"
imagen.id = "imgAuto4"
fichaAuto.append(imagen)

let lista = document.createElement("li")
lista.id = "lista"
lista.innerHTML = "<li>"+
"<ul>"+"Marca:"+(autoID_4?.marca)+"</ul>"+
"<ul>"+"Modelo:"+(autoID_4?.modelo)+"</ul>"+
"<ul>"+"Año:"+(autoID_4?.año)+"</ul>"+
"<ul>"+"Color:"+(autoID_4?.color)+"</ul>"+
"<ul>"+"Km:"+(autoID_4?.kilometraje)+"</ul>"+
"<ul>"+"Combustible:"+(autoID_4?.combustible)+"</ul>"+
"<ul>"+"Precio:"+(autoID_4?.precio)+"</ul>"+
"</li>"
fichaAuto.append(lista)

let divBotones = document.createElement("div")
divBotones.id = "divBotones"
fichaAuto.append(divBotones)

botones()
}