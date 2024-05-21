
const myPromise = new Promise((resolve, reject) => { // Crea una nueva promesa asignada a la variable myPromise
    setTimeout(() => { // Inicia un temporizador que se ejecutará después de 3000 milisegundos (3 segundos)
      resolve("Promise resuelta"); // Llama a la función resolve para indicar que la promesa se ha cumplido exitosamente
    }, 3000); 
  });
  
  
  myPromise.then((resultado) => { // Define el comportamiento a seguir cuando la promesa se resuelva exitosamente
    console.log(resultado);  // Imprime el resultado de la promesa resuelta en la consola
  }).catch((error) => { // Define el comportamiento a seguir si la promesa es rechazada
    console.error("Error:", error); // Imprime un mensaje de error en la consola junto con el error recibido
  });