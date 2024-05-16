function some(array, callback) { // Define una función llamada "some" que acepta dos parámetros: un array y un callback.
    for (let i = 0; i < array.length; i++) { // Inicia un bucle que itera sobre cada elemento del array.
      const element = array[i];  // Obtiene el elemento actual del array en cada iteración y lo asigna a la constante "element".
      const result = callback(element); // Llama al callback con el elemento actual y almacena el resultado en la constante "result".
      if (result) { // Verifica si el resultado de la llamada al callback es verdadero.
        return true;  // Si el resultado es verdadero, significa que al menos uno de los elementos del array cumple la condición establecida por el callback. La función devuelve true y termina la ejecución.
      }
    }
  
    return false; // Si el bucle finaliza sin encontrar ningún elemento que devuelva verdadero al aplicar el callback, la función devuelve false.
  }