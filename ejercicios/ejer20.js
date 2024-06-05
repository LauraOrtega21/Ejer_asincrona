const promesa1 = new Promise((resolve, reject) => { // Crea una nueva promesa llamada promesa1 que se resolverá después de 3000 milisegundos 
    setTimeout(() => resolve("Promesa 1 resuelta"), 3000);
  });
  
  const promesa2 = new Promise((resolve, reject) => { // Crea una nueva promesa llamada promesa2 que se resolverá después de 2000 milisegundos 
    setTimeout(() => resolve("Promesa 2 resuelta"), 2000);
  });
  
  const promesa3 = new Promise((resolve, reject) => { // Crea una nueva promesa llamada promesa3 que se resolverá después de 1000 milisegundos 
    setTimeout(() => resolve("Promesa 3 resuelta"), 1000);
  });
  
  Promise.all([promesa1, promesa2, promesa3]) // Utiliza Promise.all() para esperar a que todas las promesas se resuelvan
    .then((valores) => { // Se ejecuta cuando todas las promesas se resuelven exitosamente
      console.log("Todas las promesas se han resuelto:");
      valores.forEach((valor) => console.log(valor));  // Itera sobre los valores resueltos e imprímelos en la consola
    })
    .catch((error) => console.error("Error:", error));   // Se ejecuta si alguna de las promesas falla