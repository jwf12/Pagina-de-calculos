//Dos variables vacias, un loop que intera en la LIsta
//Sumamos todos los valores de la lista y los agrefamos a la primer varible.
//Y hacemos que la segunda variable se ese resultado / el largo de la LISTA.
function promedio (lista){
    let sumaLista1= 0;
    let prom = 0;
    for (let i = 0; i<lista.length; i++){
        sumaLista1 += Number(lista[i]);
        prom =  sumaLista1 / lista.length;
    }
return(prom);
}  
//Se le agrega el metodo Number() a la interacion de la lista
//para transformar cada numbero en number y no en string

function calculosProm(){
    const INPUT = document.getElementById("promedio").value.split(' ');
    const PROM = promedio(INPUT);    
    const RESULPROM = document.getElementById("resultadoProm");
    RESULPROM.innerText = PROM;
}