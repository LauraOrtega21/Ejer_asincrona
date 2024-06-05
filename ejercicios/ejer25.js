const handler = {
    set: function(target, prop, value, receiver) {
      // Validación del tipo de dato
      switch (prop) {
        case "numerico":
          if (isNaN(value)) {
            console.error(`Error: El valor de la propiedad "${prop}" debe ser numérico.`);
            return false;
          }
          break;
        case "alfanumerico":
          if (/^[a-zA-Z0-9]+$/.test(value)) {
            break;
          } else {
            console.error(`Error: El valor de la propiedad "${prop}" debe ser alfanumérico.`);
            return false;
          }
        case "email":
          if (/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            break;
          } else {
            console.error(`Error: El valor de la propiedad "${prop}" debe ser un correo electrónico válido.`);
            return false;
          }
        case "fecha":
          if (new Date(value) instanceof Date) {
            break;
          } else {
            console.error(`Error: El valor de la propiedad "${prop}" debe ser una fecha válida.`);
            return false;
          }
        default:
          // Validación general para todos los atributos
          if (value.trim() !== value) {
            console.error(`Error: No se permiten espacios en blanco al inicio o final de la propiedad "${prop}".`);
            return false;
          }
      }
  
      // Si la validación es correcta, se asigna el valor
      Reflect.set(target, prop, value, receiver);
      return true;
    }
  };
  
  const objetoProxy = new Proxy({}, handler);
  
  // Ejemplos de uso
  objetoProxy.numerico = 10; // Correcto
  objetoProxy.numerico = "Hola"; // Error
  objetoProxy.alfanumerico = "nombreApellido123"; // Correcto
  objetoProxy.alfanumerico = "12345"; // Error
  objetoProxy.email = "correo@ejemplo.com"; // Correcto
  objetoProxy.email = "correoinvalido"; // Error
  objetoProxy.fecha = new Date(); // Correcto
  objetoProxy.fecha = "2023-12-31"; // Error (formato de fecha incorrecto)
  objetoProxy.otroAtributo = "   valor con espacios   "; // Error (espacios en blanco)
  objetoProxy.otroAtributo = "valorSinEspacios"; // Correcto