function dropWhile(array, callback) { // Define una función llamada "dropWhile" que acepta dos parámetros: un array y un callback.
    let droppedCount = 0; // Inicializa una variable "droppedCount" para contar cuántos elementos se van a eliminar.
  
    for (let i = 0; i < array.length; i++) { // Inicia un bucle que itera sobre cada elemento del array.
      const element = array[i];  // Obtiene el elemento actual del array en cada iteración y lo asigna a la constante "element".
      const shouldDrop = callback(element); // Llama al callback con el elemento actual y almacena el resultado en "shouldDrop", indicando si el elemento debe ser eliminado.
  
      if (shouldDrop) { // Verifica si el resultado de la llamada al callback indica que el elemento debe ser eliminado.
        droppedCount++; // Incrementa el contador de elementos eliminados.
      } else {
       // Si el elemento no debe ser eliminado...
        break;
      }// ...sale del bucle, ya que encontró el primer elemento que no cumple la condición y no necesita ser eliminado.
    }
   
    const remainingArray = array.slice(droppedCount); // Crea un nuevo array que contiene los elementos restantes del array original después de eliminar los elementos iniciales que cumplen la condición.
    
    return remainingArray; // Devuelve el nuevo array que contiene los elementos restantes después de eliminar los elementos iniciales que cumplen la condición.
  }