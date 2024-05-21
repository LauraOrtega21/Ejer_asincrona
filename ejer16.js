const promesa1 = new Promise((resolve) => setTimeout(resolve, 1000, 5)); // Crea una promesa que se resuelve con el valor 5 después de 1 segundo
const promesa2 = new Promise((resolve) => setTimeout(resolve, 1000, 3)); // Crea una promesa que se resuelve con el valor 3 después de 1 segundo
const promesa3 = new Promise((resolve) => setTimeout(resolve, 1000, 7)); // Crea una promesa que se resuelve con el valor 7 después de 1 segundo

promesa1 // Maneja la resolución de la primera promesa
  .then((valor1) => {// Imprime el valor resuelto de la primera promesa
    console.log(`Promise 1 resuelta: ${valor1}`); 
    return valor1 + promesa2;  // Intenta devolver la suma de valor1 y promesa2 (este es un error conceptual)
  })
  .then((valorTotal) => {
    console.log(`Promise 2 resuelta: ${valorTotal}`); // Intenta imprimir el resultado de la suma anterior
    return valorTotal + promesa3; // Intenta devolver la suma de valorTotal y promesa 3
  })
  .then((resultadoFinal) => {
    console.log(`Resultado final: ${resultadoFinal}`); 
  }); // Imprime el resultado final esperado de las operaciones anteriores