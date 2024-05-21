function delay(ms) { // define una función llamada delay que toma un parámetro ms, que representa la cantidad de milisegundos a esperar antes de resolver la promesa.
    return new Promise((resolve) => {
        setTimeout(() => {
            // Luego de 'ms' milisegundos, se resuelve la promesa
            resolve();
          }, ms);
        });
    };
delay (3000).then(() => alert("Se ejecuta despues de 3 segundos"));
