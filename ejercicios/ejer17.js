// Define una función llamada cargarYMostrarJSON
function cargarYMostrarJSON() {
    fetch('datos17.json') // Realiza una solicitud fetch para obtener el archivo 'datos17.json'
      .then(response => { // Verifica si la respuesta de la solicitud fetch no es exitosa
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Lanza un error si la respuesta no es ok (exitosa)
        }
        return response.json(); // Devuelve la respuesta como un objeto JSON si la solicitud es exitosa
      })
      .then(data => {
        console.log(data); // Imprime en la consola los datos obtenidos del archivo JSON
      })
      .catch(error => { // Captura cualquier error que ocurra durante la solicitud fetch o la conversión a JSON
        console.error('Hubo un problema con la operación de fetch:', error);
      });
  }
  
  cargarYMostrarJSON();  // Llama a la función cargarYMostrarJSON para ejecutarla