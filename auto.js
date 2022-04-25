class Autos {

    constructor(marca,modelo,año,color,kilometraje, combustible, imagen,precio){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.kilometraje = kilometraje;
        this.combustible = combustible;
        this.imagen = imagen;
        this.precio = precio;
    }
}

let datosAuto = new Array();

let autoID_1 = new Autos("Chevrolet","Classic LS 4P","2016","marron","162897km","GNC","./Imagenes/Classic.jpg","1.050.000");
let autoID_2 = new Autos("Renault","Clio mio 1.0","2018","blanco","25281km","nafta","./Imagenes/Clio.jpg","1.300.000");
let autoID_3 = new Autos("Ford","Fiesta SE 5P","2019","blanco","32586km","nafta","./Imagenes/Fiesta.jpg","2.250.000");
let autoID_4 = new Autos("Volkswagen","Gol trend pack 3","2022","gris","0km","nafta","./Imagenes/Gol.jfif","2.000.000");
let autoID_5 = new Autos("Renault","Kangoo 1.8","2019","rojo","32154","diesel","./Imagenes/Kangoo.jpg","1.930.000");
let autoID_6 = new Autos("Fiat","Siena","2012","blanco","173518km","nafta","./Imagenes/Siena.jpg","1.250.000");



