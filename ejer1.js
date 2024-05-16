//------------------------------- SetInterval-------------------------

function imprimirNumerosInterval(desde, hasta) { //La función toma dos parámetros: desde y hasta.
  let contador = desde; //Inicializa una variable contador con el valor de desde.
  let tiempoId = setInterval(function() { 
    console.log(contador); // Dentro del bucle, imprime el valor actual de contador a la consola.
    if (contador == hasta) {
      clearInterval(tiempoId);
    } //Si contador excede el valor de hasta,detiene el set Interval bucle usando clearInterval.
    contador++;
  }, 1000); // Intervalo de 1 segundo
}


imprimirNumerosInterval(5, 10);

//------------------------------------ SetTimeOut----------------------------------------


function imprimirNumerosTimeout() { 
  let contador = desde;

  setTimeout(function ejecutar(){
    console.log(contador) // Imprime el valor actual de 'contador' en la consola.
    if (contador < hasta) { // Comprueba si 'contador' es menor que 'hasta'.
      setTimeout(ejecutar, 1000);
    }
    contador++; // Incrementa el valor de 'contador'.
  },1000);// Configura el primer temporizador para ejecutar la función 'ejecutar' después de 1 segundo.
}


imprimirNumerosTimeout(); // Llama a la función imprimirNumerosTimeout.