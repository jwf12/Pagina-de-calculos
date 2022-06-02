// Lista de ingresos, vacia...
const LISTA_INGRESOS = [];
   


//Interacion donde se crea una variable, a la que se le suma
// todos lo ingresos, de la lista vacia.
function sumaIngresos(lista){
let listaIngresosLista = 0;
for (let i = 0; i < lista.length; i++){
    listaIngresosLista += lista[i];
}
return listaIngresosLista;
}
function mostrarObjeto (lista){
    for (let i = 0; i < lista.length; i++){
        return  lista[i];
    }
}



//Funcion que interactua con html.
//se hace push a la variable vacia
function ingresosSuma(){
   
 const INPUT1 = Number(document.getElementById("ingreso").value);
    const INPUT22 = document.getElementById("motivoIngreso").value;
    const INGRESOS_TEXTO2 = document.getElementById("ingresosTexto"); 
    const INGRESOS = document.getElementById("saldoIngreso");
    const TOTAL = document.getElementById("saldo");
    LISTA_INGRESOS.push({monto: INPUT1, motivo: INPUT22});
    
 let LISTA_MONTO1 = LISTA_INGRESOS.map(
    function (dinero){
        return dinero.monto;
    }
);
let LISTA_MONTO2 = LISTA_EGRESOS.map(
    function (dinero){
        return dinero.monto;
    }
);
    INGRESOS_TEXTO2.innerText = "Ingresos: " + JSON.stringify(LISTA_INGRESOS);
    INGRESOS.innerText = "Ingresos: "+ "$" + INPUT1;
    console.log (LISTA_INGRESOS);
    console.log("Total" + " " + sumaIngresos(LISTA_MONTO1));
    TOTAL.innerText =("Tu saldo" + " " + "$" + saldoTotal(sumaIngresos(LISTA_MONTO1),restaIngresos(LISTA_MONTO2))); 
}







//Lista egresos, vacia...
const LISTA_EGRESOS = [];

//Interacion donde se crea una variable, a la que se le suma
// todos lo egresos, de la lista vacia.
function restaIngresos(lista){
    let listaEgresos = 0;
    for (let i = 0; i < lista.length; i++){
        listaEgresos += Number(lista[i]);
    }
    return listaEgresos;
    }

    //Se resta la lista de ingresos con la de egresos.
function saldoTotal(lista1, lista2){
    return lista1 - lista2;
}

//Se retorna el valor de la lista luego de la resta.
 function egresoSuma(){   
     
    





   const INPUT = document.getElementById("egreso").value;
   const INPUT2 = document.getElementById("motivoEgreso").value;
   const INGRESOS_TEXTO = document.getElementById("egresosTexto"); 
   const TOTAL = document.getElementById("saldo");
   const EGRESOS = document.getElementById("saldoEgreso");
   LISTA_EGRESOS.push({monto: INPUT, motivo: INPUT2});
   
   let LISTA_MONTO = LISTA_INGRESOS.map(
    function (dinero){
        return dinero.monto;
    }
);
let LISTA_MONTO2 = LISTA_EGRESOS.map(
    function (dinero){
        return dinero.monto;
    }
);

    INGRESOS_TEXTO.innerText = "Egresos: " + JSON.stringify(LISTA_EGRESOS);
    console.log ("-" + INPUT + " " + INPUT2);
    EGRESOS.innerText = "Egresos: " + "$" + INPUT;
    TOTAL.innerText =("Tu saldo" + " " + "$" + saldoTotal(sumaIngresos(LISTA_MONTO),restaIngresos(LISTA_MONTO2))); 
}
