async function cargarDatos() {
    try {
      const response = await fetch("ruta/al/archivo.json");
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      const datos = await response.json();
      // Aquí puedes manipular los datos como desees
      console.log("Datos cargados:", datos);
    } catch (error) {
      console.error("Error al cargar el archivo:", error.message);
    }
  }
  
  cargarDatos();