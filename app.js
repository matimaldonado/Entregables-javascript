 let productosSuper = prompt("Ingrese el producto que desea comprar o fin para terminar")
 
 while (productosSuper != "fin") {

    alert("Usted ingreso " + productosSuper)
    console.log (productosSuper)
    
    let cantidad = Number(prompt("Ingrese cantidad de ese producto de 1 a 100"))
    
    if (cantidad > 0 && cantidad <=100) {
     
    alert ("Usted ingreso " + cantidad)
    console.log (cantidad)   
    
    }else{
        alert("Dato ingresado incorrecto")
        cantidad = Number(prompt("Ingrese datos del 1 a 100"))
        
        if (cantidad > 0 && cantidad <=100) {
        alert ("Usted ingreso " + cantidad)   
        console.log(cantidad)} else{
            alert("Dato ingresado incorrecto, compra cancelada")
            break
        }
           
    }

    productosSuper = prompt("Ingrese el producto que desea comprar o fin para terminar")    
 }
