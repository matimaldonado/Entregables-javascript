let guardoAutos2 = "ID2autos"




let boton_ID2 = document.getElementById("btninfo2")

boton_ID2.addEventListener("click",infoAutoID2)

function infoAutoID2(){

    for (const auto2 in autoID_2) {
    console.log(autoID_2[auto2]) 
    }
    
    crearFicha()
    cargaDatosAuto2()
    datosAuto.push(autoID_2)
    localStorage.setItem(guardoAutos2,JSON.stringify(datosAuto))
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
function cargaDatosAuto2(){

let fichaAuto = document.getElementById("fichaAuto")
let h2 = document.createElement("h2")
h2.id = "subFicha"
h2.innerHTML = "<h2>"+ (autoID_2?.modelo) +"</h2>"
fichaAuto.append(h2)

let imagen = document.createElement("img")
imagen.src = (autoID_2?.imagen);
imagen.alt = "Imagen Clio"
imagen.id = "imgAuto2"
fichaAuto.append(imagen)

let lista = document.createElement("li")
lista.id = "lista"
lista.innerHTML = "<li>"+
"<ul>"+"Marca:"+(autoID_2?.marca)+"</ul>"+
"<ul>"+"Modelo:"+(autoID_2?.modelo)+"</ul>"+
"<ul>"+"Año:"+(autoID_2?.año)+"</ul>"+
"<ul>"+"Color:"+(autoID_2?.color)+"</ul>"+
"<ul>"+"Km:"+(autoID_2?.kilometraje)+"</ul>"+
"<ul>"+"Combustible:"+(autoID_2?.combustible)+"</ul>"+
"<ul>"+"Precio:"+(autoID_2?.precio)+"</ul>"+
"</li>"
fichaAuto.append(lista)

let divBotones = document.createElement("div")
divBotones.id = "divBotones"
fichaAuto.append(divBotones)

botones()
}



function recibir_info_auto2(){

    let recibo = localStorage.getItem(guardoAutos2);
    if (recibo){

        recibo = JSON.parse(recibo);

        guardoAutos2 = recibo;
    }
}