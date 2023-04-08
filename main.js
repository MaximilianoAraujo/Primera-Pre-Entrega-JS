let precioTotal = 0;
let preciosProductos = 0;
let cuotas = 0;
let cantidadProductos = 0;

cantidadProductos = parseInt(prompt("Indique cuantos productos desea incluir:"));

while (cantidadProductos <= 0){
    cantidadProductos = parseInt(prompt("Error! Ingrese un numero válido!:"));
}

for (let i = 1; i <= cantidadProductos; i++){
    if(cantidadProductos === 1){
        preciosProductos = parseFloat(prompt("Ingrese el precio del producto:"));
    }
    else{
        preciosProductos = parseFloat(prompt("Ingrese el precio del producto n° " + i + ":"));
    }

    while (preciosProductos <= 0){
        preciosProductos = parseFloat(prompt("Error! Ingrese un numero válido!:"));
    }
}

cuotas = parseInt(prompt("El precio total de los productos ingresados es de " + precioTotal + "\n" + "Indique en cuantas cuotas desea abonarlo (hasta 12 cuotas)"));

