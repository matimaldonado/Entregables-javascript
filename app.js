let nombre = prompt("Ingrese su nombre y apellido completo");
alert("Hola " + nombre);
console.log(nombre);


let dni = prompt(nombre + " ingrese su DNI");
console.log(dni);

let telefono = prompt(nombre + " ingrese su n° de telefono");
console.log(telefono);

let fechaDeNacimiento = prompt(nombre + " ingrese su fecha de nacimiento");
console.log(fechaDeNacimiento);

let edad =Number(prompt(nombre + " Ingrese su edad"));

if (edad >= 18 ) {

    alert(nombre + " usted cumple los requisitos iniciales ¿Desea continuar?")
    console.log (edad);

    let salario = Number(prompt(nombre + " ingrese su salario neto"))
    console.log(salario)

    if (salario >= 50001 && salario <= 100000 ) { 
    
        alert(nombre + " usted puede acceder a una finaciacion de $200000")
        
        function interes(n1 , n2 , impuesto ) {
            
            return (n1 / n2) * impuesto;}
            
            let valor1 = 200000;
            let valor2 = Number(prompt("Ingrese cantidad de cuotas entre 1 y 60"));
            let valor3 = 1.35;
            let valor4 = interes(valor1, valor2, valor3);

            console.log (valor2)

            alert("Su cuota será de $" + valor4)
            console.log (valor4);
        

        let eleccionVehiculo = prompt("Elegí la marca del vehículo entre estas opciones:FORD,CHEVROLET,FIAT,PEUGEOT");
        console.log(eleccionVehiculo);
        
        switch (eleccionVehiculo) {
        
            case "FORD" :
                alert("Usted elegió la marca Ford");
                break;            
            case "Ford" :
                alert("Usted elegió la marca Ford");
                break;
            case "ford" :
                alert("Usted elegió la marca Ford");
                break;
        
            case "fiat":
                alert("Usted elegió la marca Fiat");
                break;
        
            case "Fiat":
                alert("Usted elegió la marca Fiat");
                break;
        
            case "FIAT":
                alert("Usted elegió la marca Fiat");
                break;
        
            case "chevrolet":
                alert("Usted elegió la marca Chevrolet");
                break;
        
            case "Chevrolet":
                alert("Usted elegió la marca Chevrolet");
                break;
        
            case "CHEVROLET":
                alert("Usted elegió la marca Chevrolet");
                break;
        
            case "peugeot":
                alert("Usted elegió la marca Peugeot");
                break;
        
            case "Peugeot":
                alert("Usted elegió la marca Peugeot");
                break;
        
            case "PEUGEOT":
                alert("Usted elegió la marca Peugeot");
                break;
        
            default:
                alert("El dato ingresado no corresponde, vuelva a cargar la página")
               break;
        } 
        
    
    }else if (salario >= 100001 && salario <= 150000 ) {
        alert(nombre + " usted puede acceder a una finaciacion de $400000")
        
        function interes(n3 , n4 , impuest ) {
            
            return (n3 / n4) * impuest;}
            
            let valor5 = 400000;
            let valor6 = Number(prompt("Ingrese cantidad de cuotas entre 1 y 60"));
            let valor7 = 1.35;
            let valor8 = interes(valor5, valor6, valor7);

            console.log (valor6)

            alert("Su cuota será de $" + valor8)
            console.log (valor8)


        let eleccionVehiculo = prompt("Elegí la marca del vehículo entre estas opciones:FORD,CHEVROLET,FIAT,PEUGEOT");

        console.log(eleccionVehiculo);
        
        switch (eleccionVehiculo) {
        
            case "FORD" :
                alert("Usted elegió la marca Ford");
                break;
            case "Ford" :
                alert("Usted elegió la marca Ford");
                break;
            case "ford" :
                alert("Usted elegió la marca Ford");
                break;
        
            case "fiat":
                alert("Usted elegió la marca Fiat");
                break;
        
            case "Fiat":
                alert("Usted elegió la marca Fiat");
                break;
        
            case "FIAT":
                alert("Usted elegió la marca Fiat");
                break;
        
            case "chevrolet":
                alert("Usted elegió la marca Chevrolet");
                break;
        
            case "Chevrolet":
                alert("Usted elegió la marca Chevrolet");
                break;
        
            case "CHEVROLET":
                alert("Usted elegió la marca Chevrolet");
                break;
        
            case "peugeot":
                alert("Usted elegió la marca Peugeot");
                break;
        
            case "Peugeot":
                alert("Usted elegió la marca Peugeot");
                break;
        
            case "PEUGEOT":
                alert("Usted elegió la marca Peugeot");
                break;
        
            default:
                alert("El dato ingresado no corresponde, vuelva a cargar la página")
               break;
        } 
        
    }else if (salario >= 150001 && salario <= 200000 ) {
        alert(nombre + " usted puede acceder a una finaciacion de $600000")

        function interes(n5 , n6 , impues ) {
            
            return (n5 / n6) * impues;}
            
            let valor9 = 600000;
            let valor10 = Number(prompt("Ingrese cantidad de cuotas entre 1 y 60"));
            let valor11 = 1.35;
            let valor12 = interes(valor9, valor10, valor11);

            console.log (valor10)

            alert("Su cuota será de $" + valor12)
            console.log (valor12)

        let eleccionVehiculo = prompt("Elegí la marca del vehículo entre estas opciones:FORD,CHEVROLET,FIAT,PEUGEOT");

console.log(eleccionVehiculo);
switch (eleccionVehiculo) {

    case "FORD" :
        alert("Usted elegió la marca Ford");
        break;
    case "Ford" :
        alert("Usted elegió la marca Ford");
        break;
    case "ford" :
        alert("Usted elegió la marca Ford");
        break;

    case "fiat":
        alert("Usted elegió la marca Fiat");
        break;

    case "Fiat":
        alert("Usted elegió la marca Fiat");
        break;

    case "FIAT":
        alert("Usted elegió la marca Fiat");
        break;

    case "chevrolet":
        alert("Usted elegió la marca Chevrolet");
        break;

    case "Chevrolet":
        alert("Usted elegió la marca Chevrolet");
        break;

    case "CHEVROLET":
        alert("Usted elegió la marca Chevrolet");
        break;

    case "peugeot":
        alert("Usted elegió la marca Peugeot");
        break;

    case "Peugeot":
        alert("Usted elegió la marca Peugeot");
        break;

    case "PEUGEOT":
        alert("Usted elegió la marca Peugeot");
        break;

    default:
        alert("El dato ingresado no corresponde, vuelva a cargar la página")
       break;
} 

    }else if (salario >= 200001) {
        alert(nombre + " usted puede acceder a una finaciacion de $1000000")
        function interes(n7 , n8 , imp ) {
            
            return (n7 / n8) * imp;}
            
            let valor13 = 1000000;
            let valor14 = Number(prompt("Ingrese cantidad de cuotas entre 1 y 60"));
            let valor15 = 1.35;
            let valor16 = interes(valor13, valor14, valor15);

            console.log (valor14)

            alert("Su cuota será de $" + valor16)
            console.log (valor16)

        let eleccionVehiculo = prompt("Elegí la marca del vehículo entre estas opciones:FORD,CHEVROLET,FIAT,PEUGEOT");

console.log(eleccionVehiculo);
switch (eleccionVehiculo) {

    case "FORD" :
        alert("Usted elegió la marca Ford");
        break;

    case "Ford" :
        alert("Usted elegió la marca Ford");
        break;

    case "ford" :
        alert("Usted elegió la marca Ford");
        break;

    case "fiat":
        alert("Usted elegió la marca Fiat");
        break;

    case "Fiat":
        alert("Usted elegió la marca Fiat");
        break;

    case "FIAT":
        alert("Usted elegió la marca Fiat");
        break;

    case "chevrolet":
        alert("Usted elegió la marca Chevrolet");
        break;

    case "Chevrolet":
        alert("Usted elegió la marca Chevrolet");
        break;

    case "CHEVROLET":
        alert("Usted elegió la marca Chevrolet");
        break;

    case "peugeot":
        alert("Usted elegió la marca Peugeot");
        break;

    case "Peugeot":
        alert("Usted elegió la marca Peugeot");
        break;

    case "PEUGEOT":
        alert("Usted elegió la marca Peugeot");
        break;

    default:
        alert("El dato ingresado no corresponde, vuelva a cargar la página")
       break;
} 

    } else{
        alert(nombre + "su salario no cumple con el minimo necesario.")}
           
} else{ alert (nombre + " usted no cumple los requisitos necesarios") ;
console.log (edad);}

