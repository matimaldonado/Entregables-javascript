let boton_ID6 = document.getElementById("btninfo6")

boton_ID6.addEventListener("click",infoAutoID6)

function infoAutoID6(){

    for (const auto6 in autoID_6) {
    console.log(autoID_6[auto6]) 
    }
    
    crearFicha()
    cargaDatosAuto6()
    datosAuto.push(autoID_6)
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
function cargaDatosAuto6(){

let fichaAuto = document.getElementById("fichaAuto")
let h2 = document.createElement("h2")
h2.id = "subFicha"
h2.innerHTML = "<h2>"+ (autoID_6?.modelo) +"</h2>"
fichaAuto.append(h2)

let imagen = document.createElement("img")
imagen.src = (autoID_6?.imagen);
imagen.alt = "Imagen Siena"
imagen.id = "imgAuto6"
fichaAuto.append(imagen)

let lista = document.createElement("li")
lista.id = "lista"
lista.innerHTML = "<li>"+
"<ul>"+"Marca:"+(autoID_6?.marca)+"</ul>"+
"<ul>"+"Modelo:"+(autoID_6?.modelo)+"</ul>"+
"<ul>"+"Año:"+(autoID_6?.año)+"</ul>"+
"<ul>"+"Color:"+(autoID_6?.color)+"</ul>"+
"<ul>"+"Km:"+(autoID_6?.kilometraje)+"</ul>"+
"<ul>"+"Combustible:"+(autoID_6?.combustible)+"</ul>"+
"<ul>"+"Precio:"+(autoID_6?.precio)+"</ul>"+
"</li>"
fichaAuto.append(lista)

let divBotones = document.createElement("div")
divBotones.id = "divBotones"
fichaAuto.append(divBotones)

botones()
}