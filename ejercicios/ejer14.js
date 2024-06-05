async function operacionAsincrona() { // Define una función asincrónica llamada operacionAsincrona
    await new Promise((resolve) => setTimeout(resolve, 1000));
// Espera (await) a que se complete una nueva promesa que se resuelve después de 1000 milisegundos (1 segundo)
    return "Operación completada";
  }// Devuelve el valor "Operación completada" una vez que la promesa se ha resuelto

  (async () => { // Inmediatamente invoca una función asincrónica autoejecutable
    const resultado = await operacionAsincrona(); // Espera (await) a que se complete la función asincrónica operacionAsincrona y almacena el resultado en la variable resultado
    console.log(resultado); // Imprime el resultado de la función asincrónica en la consola
  })();