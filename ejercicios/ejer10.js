// Definición de la función takeWhile que toma un array y una función de callback como parámetros
function takeWhile(array, callback) {
    const result = []; // Se declara un arreglo vacío para almacenar los elementos que cumplen la condición
    for (let element of array) {// Iteración sobre cada elemento del array
      if (callback(element)) { // Se evalúa si la función callback devuelve true para el elemento actual
        result.push(element); // Si la callback devuelve true, se agrega el elemento al arreglo result
      } else {
    // Si la callback devuelve false para el elemento actual, se interrumpe el bucle
    // porque ya no se cumplirá la condición de "tomar" elementos del array
        break;
      }
    }
    return result; // Se devuelve el arreglo result que contiene los elementos que cumplen la condición
  }