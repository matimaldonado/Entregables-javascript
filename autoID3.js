let guardoAutos3 = "ID3autos"


let boton_ID3 = document.getElementById("btninfo3")

boton_ID3.addEventListener("click",infoAutoID3)

function infoAutoID3(){

    for (const auto3 in autoID_3) {
    console.log(autoID_3[auto3]) 
    }
    
    crearFicha()
    cargaDatosAuto3()
    datosAuto.push(autoID_3)
    localStorage.setItem(guardoAutos3,JSON.stringify(datosAuto))
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
function cargaDatosAuto3(){

let fichaAuto = document.getElementById("fichaAuto")
let h2 = document.createElement("h2")
h2.id = "subFicha"
h2.innerHTML = "<h2>"+ (autoID_3?.modelo) +"</h2>"
fichaAuto.append(h2)

let imagen = document.createElement("img")
imagen.src = (autoID_3?.imagen);
imagen.alt = "Imagen Fiesta"
imagen.id = "imgAuto3"
fichaAuto.append(imagen)

let lista = document.createElement("li")
lista.id = "lista"
lista.innerHTML = "<li>"+
"<ul>"+"Marca:"+(autoID_3?.marca)+"</ul>"+
"<ul>"+"Modelo:"+(autoID_3?.modelo)+"</ul>"+
"<ul>"+"Año:"+(autoID_3?.año)+"</ul>"+
"<ul>"+"Color:"+(autoID_3?.color)+"</ul>"+
"<ul>"+"Km:"+(autoID_3?.kilometraje)+"</ul>"+
"<ul>"+"Combustible:"+(autoID_3?.combustible)+"</ul>"+
"<ul>"+"Precio:"+(autoID_3?.precio)+"</ul>"+
"</li>"
fichaAuto.append(lista)

let divBotones = document.createElement("div")
divBotones.id = "divBotones"
fichaAuto.append(divBotones)

botones()
}

function recibir_info_auto3(){

    let recibo = localStorage.getItem(guardoAutos3);
    if (recibo){

        recibo = JSON.parse(recibo);

        guardoAutos3 = recibo;
    }
}