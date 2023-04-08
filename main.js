let precioTotal = 0;
let preciosProductos = 0;
let cuotas = 0;
let cantidadProductos = 0;

cantidadProductos = parseInt(prompt("Indique la cantidad de productos que desea incluir:"));

while (cantidadProductos <= 0){
    cantidadProductos = parseInt(prompt("Error! Ingrese una cantidad válida!:"));
}

for (let i = 1; i <= cantidadProductos; i++){
    if(cantidadProductos === 1){
        preciosProductos = parseFloat(prompt("Ingrese el precio del producto:"));
    }
    else{
        preciosProductos = parseFloat(prompt("Ingrese el precio del producto n° " + i + ":"));
    }

    while (preciosProductos <= 0){
        preciosProductos = parseFloat(prompt("Error! Ingrese un precio válido!:"));
    }

    precioTotal += preciosProductos;
}

cuotas = parseInt(prompt("El precio total de los productos ingresados es de " + precioTotal + "$\n" + "Indique en cuantas cuotas desea abonarlo (hasta 12 cuotas)\n\n" + "1 Cuota - No hay intereses.\n" + "2 y 3 Cuotas - Interes del 10%.\n" + "4 a 6 Cuotas - Interes del 20%.\n" + "7 a 9 Cuotas - Interes del 30%.\n" + "10 a 12 Cuotas - Interes del 40%."));

while (cuotas < 1 || cuotas > 12){
    cuotas = parseInt(prompt("Error! Ingrese una cantidad de cuotas válida! (Hasta 12 cuotas):"));
}

if (cuotas === 1){
    precioTotal;
}
else if (cuotas === 2 || cuotas === 3){
    precioTotal = precioTotal * 1.10
} 
else if (cuotas >= 4 && cuotas <=6){
    precioTotal = precioTotal * 1.20
}
else if (cuotas >= 7 && cuotas <= 9){
    precioTotal = precioTotal * 1.30
}
else{
    precioTotal = precioTotal * 1.40
}

function precioAPagar (precioTotal,cuotas) {
    let precioFinal = precioTotal / cuotas;
    return precioFinal;
}

precioFinal = precioAPagar (precioTotal,cuotas)

if (cuotas === 1){
    alert ("Usted deberá pagar 1 cuota de " + precioFinal.toFixed(2) + "$");
} else{
    alert ("Usted deberá pagar " + cuotas + " cuotas de " + precioFinal.toFixed(2) + "$ cada una");
}
