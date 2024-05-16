function find(array, callback) { // Define una función llamada "find" que acepta dos parámetros: un array y un callback.
    for (let i = 0; i < array.length; i++) { // Inicia un bucle que itera sobre cada elemento del array.
      const element = array[i]; // Obtiene el elemento actual del array en cada iteración y lo asigna a la constante "element".
      const result = callback(element); // Llama al callback con el elemento actual y almacena el resultado en la constante "result".
      if (result) { // Verifica si el resultado de la llamada al callback es verdadero.
        return element; // Si el resultado es verdadero, devuelve el elemento actual y termina la ejecución de la función.
      }
    }
  
    return undefined;  // Si el bucle finaliza sin encontrar ningún elemento que cumpla la condición del callback, devuelve "undefined".
}