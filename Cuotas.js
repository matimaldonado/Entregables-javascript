
//Calculo cuotas
let calculoCuota = new Array()
const guardo_cuota = "info_cuota";

let monto = document.getElementsByClassName("monto").value
let cuotas = document.getElementById ("cantidadCuotas")

botonCuotas = document.getElementById("botonCuotas")
botonCuotas.addEventListener("click", calculo)

function calculo(){
let monto = document.getElementById("monto").value;
let cuotas = document.getElementById("cantidadCuotas").value;

console.log(cuotas)
console.log(monto)

switch (cuotas) {
    case "12":
        const montoCuotas12 = parseFloat(monto) /  parseFloat(cuotas)
        const calculoInteres12 = parseFloat(montoCuotas12) * 0.80
        const  total12 = parseInt(montoCuotas12) + parseInt(calculoInteres12)

        calculoCuota.push(montoCuotas12)
        calculoCuota.push(calculoInteres12)
        calculoCuota.push(total12)
        
        console.log(calculoCuota)


        let formularioCuota12 = document.getElementById("formularioCuota")
        localStorage.setItem(guardo_cuota,JSON.stringify(calculoCuota));

        formularioCuota12.innerHTML =
            "<h2>Usted ingreso los siguientes datos</h2>"+
            "<p> Monto solicitado: $"+ monto + "</p>" +
            "<p> Total de cuotas: "+ cuotas + "</p>" +
            "<h3> El monto total de su cuota sería: $"+ total12 + "</h3>"
               
        break;
    case "24":
        const montoCuotas24 = parseFloat(monto) / parseFloat(cuotas)
        const calculoInteres24 = parseFloat(montoCuotas24) * 1.60
        const  total24 = parseInt(montoCuotas24) + parseInt(calculoInteres24)

        calculoCuota.push(montoCuotas24)
        calculoCuota.push(calculoInteres24)
        calculoCuota.push(total24)
        
        console.log(calculoCuota)
        localStorage.setItem(guardo_cuota,JSON.stringify(calculoCuota));

        let formularioCuota24 = document.getElementById("formularioCuota")
        
        formularioCuota24.innerHTML =
            "<h2>Usted ingreso los siguientes datos</h2>"+
            "<p> Monto solicitado: $"+ monto + "</p>" +
            "<p> Total de cuotas: "+ cuotas + "</p>" +
            "<h3> El monto total de su cuota sería: $"+ total24 + "</h3>"
        
        break;

    case "36":
        const montoCuotas36 = parseFloat(monto) / parseFloat(cuotas)
        const calculoInteres36 = parseFloat(montoCuotas36) * 2.40
        const  total36 = parseInt(montoCuotas36) + parseInt(calculoInteres36)

        calculoCuota.push(montoCuotas36)
        calculoCuota.push(calculoInteres36)
        calculoCuota.push(total36)
        
        console.log(calculoCuota)

        let formularioCuota36 = document.getElementById("formularioCuota")
        localStorage.setItem(guardo_cuota,JSON.stringify(calculoCuota));

        formularioCuota36.innerHTML =
            "<h2>Usted ingreso los siguientes datos</h2>"+
            "<p> Monto solicitado: $"+ monto + "</p>" +
            "<p> Total de cuotas: "+ cuotas + "</p>" +
            "<h3> El monto total de su cuota sería: $"+ total36 + "</h3>"
        
            break;
    
    case "48":
        const montoCuotas48 = parseFloat(monto) / parseFloat(cuotas)
        const calculoInteres48 = parseFloat(montoCuotas48) * 3.20
        const  total48 = parseInt(montoCuotas48) + parseInt(calculoInteres48)
        calculoCuota.push(montoCuotas48)
        calculoCuota.push(calculoInteres48)
        calculoCuota.push(total48)
        
        console.log(calculoCuota)
        localStorage.setItem(guardo_cuota,JSON.stringify(calculoCuota));

        let formularioCuota48 = document.getElementById("formularioCuota")
        
        formularioCuota48.innerHTML =
            "<h2>Usted ingreso los siguientes datos</h2>"+
            "<p> Monto solicitado: $"+ monto + "</p>" +
            "<p> Total de cuotas: "+ cuotas + "</p>" +
            "<h3> El monto total de su cuota sería: $"+ total48 + "</h3>"
        
        break;

    case "60":
        const montoCuotas60 = parseFloat(monto) / parseFloat(cuotas)
        const calculoInteres60 = parseFloat(montoCuotas60) * 4
        const  total60 = parseInt(montoCuotas60) + parseInt(calculoInteres60)
        calculoCuota.push(montoCuotas60)
        calculoCuota.push(calculoInteres60)
        calculoCuota.push(total60)
        
        console.log(calculoCuota)
        localStorage.setItem(guardo_cuota,JSON.stringify(calculoCuota));
        
        let formularioCuota60 = document.getElementById("formularioCuota")
        
        formularioCuota60.innerHTML =
            "<h2>Usted ingreso los siguientes datos</h2>"+
            "<p> Monto solicitado: $"+ monto + "</p>" +
            "<p> Total de cuotas: "+ cuotas + "</p>" +
            "<h3> El monto total de su cuota sería: $"+ total60 + "</h3>"
        
        break;
}

}


function recibircuota(){

    let recibocuota = localStorage.getItem(guardo_cuota);
    if (recibocuota){

        recibocuota = JSON.parse(recibocuota);

        guardo_cuota = recibocuota;
    }
}



