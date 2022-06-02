const lista_Salarios = colombia.map(
    function (personitas){
        return personitas.salary;
    }
);

const lista_Salarios_Sorted = lista_Salarios.sort(
    function (a , b){
        return a - b;
    }
);

function esPar (numero){
    return (numero %2 === 0);
}

function medianaLista (lista){
   const MITAD = parseInt(lista.length/2);

    if(esPar(lista.length)){
        const mitad_Lista_1 = lista[MITAD - 1];
        const mitad_Lista = lista[MITAD];
        const prom_Lista = (mitad_Lista_1 + mitad_Lista) / 2;
        return prom_Lista;
    }else{
        return lista[MITAD];
    }
}

const count_Start = (lista_Salarios_Sorted.length * 90) / 100;
const count_End = lista_Salarios_Sorted.length - count_Start;

const top_10_salarios = lista_Salarios_Sorted.splice(
    count_Start, count_End
);



 console.log(
    medianaLista (lista_Salarios_Sorted),
    medianaLista (top_10_salarios)
 );