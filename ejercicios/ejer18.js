function cargarYFiltrarJSON() { // Define una función llamada cargarYFiltrarJSON
    fetch('datos18.json') // Realiza una solicitud fetch para obtener el archivo 'datos18.json'
        .then(response => {
            if (!response.ok) { // Verifica si la respuesta de la solicitud fetch no es exitosa
                throw new Error('Network response was not ok'); // Lanza un error si la respuesta no es ok (exitosa)
            }
            return response.json();// Devuelve la respuesta como un objeto JSON si la solicitud es exitosa
        })
        .then(data => {
          const usuarios = data.usuarios; // Extrae la lista de usuarios del objeto JSON
          const filtrados = usuarios.filter(item => item.nombre.startsWith('A')); // Filtra los usuarios cuyo nombre comienza con la letra 'A'
          const filtrados2 = usuarios.filter(item => item.ciudad.startsWith('M')); // Filtra los usuarios cuya ciudad comienza con la letra 'M'
          console.log(filtrados, filtrados2); // Imprime en la consola los usuarios filtrados
      })
        .catch(error => { // Captura cualquier error que ocurra durante la solicitud fetch o la conversión a JSON
            console.error('Hubo un problema con la operación de fetch:', error);
        });
  }
  
  cargarYFiltrarJSON(); // Llama a la función cargarYFiltrarJSON para ejecutarla