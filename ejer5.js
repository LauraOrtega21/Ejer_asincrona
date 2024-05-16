function every(array, callback) { // Define una función llamada "every" que toma dos parámetros: un array y un callback.
    for (let i = 0; i < array.length; i++) { // Inicia un bucle que itera sobre cada elemento del array.
      const element = array[i]; // Obtiene el elemento actual del array en cada iteración y lo asigna a la constante "element".
      const result = callback(element);  // Llama al callback con el elemento actual y almacena el resultado en la constante "result".
      if (!result) {// Verifica si el resultado de la llamada al callback es falso.
        return false; // Si el resultado es falso, significa que al menos un elemento no pasa la prueba, por lo que la función devuelve false y termina la ejecución.
      }
    }
  
    return true; // Si la ejecución del bucle finaliza sin encontrar ningún elemento que no pase la prueba, significa que todos los elementos pasan la prueba, por lo que la función devuelve true.
  }