function filter(array, callback) { // Define una función llamada "filter" que toma dos parámetros: un array y un callback.
    const filteredArray = []; // Declara una constante "filteredArray" que almacenará los elementos que pasen el filtro.
  
    for (let i = 0; i < array.length; i++) { // Itera sobre cada elemento del array.
      const element = array[i]; // Obtiene el elemento actual del array en cada iteración y lo asigna a la constante "element".
      const shouldInclude = callback(element); // Llama al callback con el elemento actual y almacena el resultado en "shouldInclude", indicando si debe incluirse en el nuevo array.
      if (shouldInclude) {// Comprueba si el resultado de la llamada al callback es verdadero.
        filteredArray.push(element); 
      } // Si es verdadero, agrega el elemento actual al array "filteredArray".
    }
  
    return filteredArray; // Devuelve el array que contiene los elementos que pasaron el filtro.
}