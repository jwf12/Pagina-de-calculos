//Moda:

function formulaModa(lista){
//Const vacia, donde se arma el objeto con los numeros acumulados
const listaAgrupada = {};
//.map con la funcion que acumula los elementos en la const 
lista.map( function (elemento){
        if (listaAgrupada[elemento]){
            listaAgrupada[elemento] += 1;
        }else{
            listaAgrupada[elemento] = 1;
        }
    });
//transformamos el obj en array para usar .sort dentro de los elementos
const listaAgrupadaArray = Object.entries(listaAgrupada).sort(
    function (a,b){
        return a[1]-b[1];
    }
 );
//hacemos que moda sea igual al ultimo ELEMENTO dentro de la listAgrupArray.
 const moda = listaAgrupadaArray[listaAgrupadaArray.length - 1];
 return (moda);
}


function calculosModa(){
    const input = document.getElementById("moda").value.split(' ');
    const MODA = formulaModa(input);  
    const RESULTMODA = document.getElementById("resultadoModa");
    RESULTMODA.innerText = MODA;
}