let guardoAutos5 = "ID5autos"



let boton_ID5 = document.getElementById("btninfo5")

boton_ID5.addEventListener("click",infoAutoID5)

function infoAutoID5(){

    for (const auto5 in autoID_5) {
    console.log(autoID_5[auto5]) 
    }
    
    crearFicha()
    cargaDatosAuto5()
    datosAuto.push(autoID_5)
    localStorage.setItem(guardoAutos5,JSON.stringify(datosAuto))
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
function cargaDatosAuto5(){

let fichaAuto = document.getElementById("fichaAuto")
let h2 = document.createElement("h2")
h2.id = "subFicha"
h2.innerHTML = "<h2>"+ (autoID_5?.modelo) +"</h2>"
fichaAuto.append(h2)

let imagen = document.createElement("img")
imagen.src = (autoID_5?.imagen);
imagen.alt = "Imagen Kangoo"
imagen.id = "imgAuto5"
fichaAuto.append(imagen)

let lista = document.createElement("li")
lista.id = "lista"
lista.innerHTML = "<li>"+
"<ul>"+"Marca:"+(autoID_5?.marca)+"</ul>"+
"<ul>"+"Modelo:"+(autoID_5?.modelo)+"</ul>"+
"<ul>"+"Año:"+(autoID_5?.año)+"</ul>"+
"<ul>"+"Color:"+(autoID_5?.color)+"</ul>"+
"<ul>"+"Km:"+(autoID_5?.kilometraje)+"</ul>"+
"<ul>"+"Combustible:"+(autoID_5?.combustible)+"</ul>"+
"<ul>"+"Precio:"+(autoID_5?.precio)+"</ul>"+
"</li>"
fichaAuto.append(lista)

let divBotones = document.createElement("div")
divBotones.id = "divBotones"
fichaAuto.append(divBotones)

botones()
}


function recibir_info_auto5(){

    let recibo = localStorage.getItem(guardoAutos5);
    if (recibo){

        recibo = JSON.parse(recibo);

        guardoAutos5 = recibo;
    }
}