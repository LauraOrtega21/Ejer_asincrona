const myPromise = new Promise((resolve, reject) => { // Crea una nueva promesa asignada a la variable myPromise
    setTimeout(() => { // Inicia un temporizador que se ejecutará después de 2000 milisegundos 
      reject(new Error("Promise rechazada")); // Llama a la función reject para indicar que la promesa ha sido rechazada con un mensaje de error
    }, 2000); 
  });
  
  myPromise.catch((error) => { // Define el comportamiento a seguir cuando la promesa es rechazada
    console.error("Error:", error.message);  // Imprime un mensaje de error en la consola junto con el mensaje de error recibido
  });