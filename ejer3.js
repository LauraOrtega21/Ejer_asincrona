function map(array, callback) { // Definición de la función map que acepta un array y un callback como argumentos.
    let newArray = []; // Inicialización de un nuevo array vacío para almacenar los resultados.
  
    for (let i = 0; i < array.length; i++) { // Iteración sobre cada elemento del array.
      let result = callback(array[i]); // Llamada al callback con el elemento actual del array y almacenamiento del resultado.
      newArray.push(result); // Agregar el resultado al nuevo array.
    }
  
    return newArray; // Devolver el nuevo array con los resultados de las llamadas al callback.
  }