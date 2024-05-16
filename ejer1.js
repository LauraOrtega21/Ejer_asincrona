//------------------------------- SetInterval-------------------------
do {
  desde = parseInt(prompt("Ingrese el número el que desea comenzar: ")); //Le pregunta al usuario desde donde quiere empezar
  hasta = parseInt(prompt("Ingrese el número hasta en el cual desea terminar: ")); //Pide ingresar hasta donde desea
} while (isNaN(desde) || isNaN(hasta) || desde >= hasta);//

function imprimirNumerosInterval(desde, hasta) { //La función toma dos parámetros: desdeyhasta.
  let contador = desde; //Inicializa una variable.contadorcon el valor dedesde.
  const intervalo = setInterval(() => { //Comienza un setInterval bucle que se ejecuta cada 1 segundo.
    console.log(contador); //Dentro del bucle,imprime el valor actual decontadora la consola.
    contador++; //Se incrementa contador en 1.
    if (contador > hasta) {
      clearInterval(intervalo);
    } //Si contador excede el valor de hasta,detiene el set Interval bucle usando clearInterval.
  }, 1000); // 1 second interval
}


imprimirNumerosInterval(desde, hasta);

//------------------------------------ SetTimeOut----------------------------------------


function imprimirNumerosTimeout() { // función primero solicita al usuario los números inicial y final, asegurando una entrada válida.
  do {
    desde = parseInt(prompt("Ingrese el número desde el que desea comenzar: "));
    hasta = parseInt(prompt("Ingrese el número hasta el que desea terminar: "));
  } while (isNaN(desde) || isNaN(hasta) || desde >= hasta);

  // 
  function imprimirSiguiente(numero) {
    console.log(numero);
    if (numero > hasta) {
      return;
    }
    setTimeout(() => imprimirSiguiente(numero + 1), 1000); // 1 segundo despues
  }

  // 
  imprimirSiguiente(desde);
}

// 
imprimirNumerosTimeout();