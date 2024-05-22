const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa 1 resuelta"), 3000);
  });
  
  const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Error en promesa 2")), 2000);
  });
  
  const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa 3 resuelta"), 1000);
  });
  
  Promise.allSettled([promesa1, promesa2, promesa3])
    .then((resultados) => {
      console.log("Resultados de todas las promesas:");
      resultados.forEach((resultado) => {
        if (resultado.status === "fulfilled") {
          console.log("Resuelta:", resultado.value);
        } else if (resultado.status === "rejected") {
          console.log("Rechazada:", resultado.reason);
        }
      });
    });