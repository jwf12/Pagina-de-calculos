// Codigo para los cuadrados:


function perimetroCuadrado (lado){
    return lado * 4;
} 
function areaCuadrado (lado){
    return lado * lado;
}



//Codigo para triangulos:

function perimetroTriangulo (lado, base){
    return parseFloat(lado * 2) + parseFloat(base);
}
function areaTriangulo (base, altura){
    return (base * altura) / 2;
}


//Codigo para circulo:

function diametroCirculo (radio){
    return radio * 2;
}
function perimetroCirculo (radio){
    const diametro = diametroCirculo (radio);
    return diametro * 3.1415;
}
function areaCirculo (radio){
    return (radio * radio) * 3.1415;
}





// Interaccion con html






// Codigo del cuadrado para html.
function calcularPerimetroCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro + "cm");
}
function calcularAreaCuadrado(){
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const area = areaCuadrado (value);
    alert (area + "cm2");
}

// Codigo del triangulo para html.
function perTriangulo(){
    const input1 = document.getElementById("ladoTriangulo").value;
    const input3 = document.getElementById("baseTriangulo").value; 
 

    const perimetro = perimetroTriangulo (input1, input3);
    alert(perimetro + "cm");
}

function arTriangulo(){
    const input2 = document.getElementById("alturaTriangulo").value;
    const input3 = document.getElementById("baseTriangulo").value; 

    const area = areaTriangulo (input3, input2);
    alert(area + "cm2");
}


// Codigo del circulo para html.
function diaCirculo(){
    const input1 = document.getElementById("radio").value;

    const diametro = diametroCirculo (input1);
    alert(diametro + "cm");
}

function perCirculo (){
    const input1 =  document.getElementById("radio").value;

    const perimetro = perimetroCirculo (input1);
    alert(perimetro + "cm");
}

function arCirculo(){
    const input1 =  document.getElementById("radio").value;

    const area = areaCirculo(input1);
    alert(area + "cm2");
}
