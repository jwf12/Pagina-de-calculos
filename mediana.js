let mediana;

function medianaAritmetica(lista){
   //FUncion que define par e impar. 
    function esPar (numerito){
    if (numerito %2 === 0){
        return true;
    }else{
        return false;
    }
}
//Arreglo la lista de menor a mayor.
    lista.sort(function (a,b){
        return a-b;
    })
//Defino una const con la formula de promedio, redondeando el resultado.
    const medioLista1 = parseInt(lista.length / 2);
//Si es par, que sume los 2 del medio y los divida X2. Si no el elemento del medio.
 if (esPar(lista.length)){
     const elemento1 = Number(lista[medioLista1]);
     const elemento2 = Number(lista[medioLista1 - 1]);
     const medianaAritmetica = (elemento1 + elemento2) / 2; 
//Se le agrega el metodo Number()
//para transformar cada numbero en number y no en string

     mediana = medianaAritmetica;
     return(mediana);
}else{
     mediana = lista[medioLista1]
     return(mediana);
}
}
function calculosMediana(){
    const INPUT = document.getElementById("mediana").value.split(' ');
    medianaAritmetica(INPUT);
    const RESULMEDIANA = document.getElementById("resultadoMediana");
    RESULMEDIANA.innerText = medianaAritmetica(INPUT);
    
}   