
//Funcion para el descuento
function calculadoraPorcentajes(precio, porcentaje){
    return (precio * (100-porcentaje)) /100;
}
//Funcion para cupon:
const cupones = [
    "Julo%10",
    "K%20",
    "JK%30"
];
function cuponesDescuentos(calculo, cupon){
    switch(cupon){
        case cupones[0]:
        return (calculo * (100-11.11)) /100;
        break;
        case cupones[1]:
        return (calculo * (100-22.22)) /100;
        break;
        case cupones [2]:
        return  (calculo * (100-33.33)) /100;
        break;
    }
   
}

// Codigo para HTMl:
function descuentoProducto(){
    const precio = document.getElementById("precioProducto").value;
    const descuento = document.getElementById("descuentoPro").value;
    const calculo = calculadoraPorcentajes(precio, descuento);
    console.log(calculo);
    const resulDes = document.getElementById("resultadoDescuento");
    resulDes.innerText =  calculo + "$";
}
function descuentoCupon() {
    const precio = document.getElementById("precioProducto").value;
    const descuento = document.getElementById("descuentoPro").value;
    const calculo = calculadoraPorcentajes(precio, descuento);
    const cupon = document.getElementById("cuponDescuento").value;
    const menosCupon= cuponesDescuentos(calculo, cupon);
    console.log(menosCupon);
    const resulCupon = document.getElementById("resultadoCupon");
    resulCupon.innerText = menosCupon + "$";
}