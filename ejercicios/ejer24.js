const objetoOriginal = {
    propiedad1: "Valor inicial 1",
    propiedad2: "Valor inicial 2",
    metodo: function() {
      console.log("Método original llamado");
    }
  };
  
  const handler = {
    get: function(target, prop, receiver) {
      console.log(`Accediendo a la propiedad: ${prop}`);
      return Reflect.get(target, prop, receiver);
    },
    set: function(target, prop, value, receiver) {
      console.log(`Modificando la propiedad: ${prop} con el valor: ${value}`);
      return Reflect.set(target, prop, value, receiver);
    },
    getPrototypeOf: function(target) {
      console.log("Obteniendo el prototipo del objeto");
      return Reflect.getPrototypeOf(target);
    },
    apply: function(target, thisArg, argumentsList) {
      console.log("Método original llamado");
      return Reflect.apply(target, thisArg, argumentsList);
    }
  };
  
  const objetoProxy = new Proxy(objetoOriginal, handler);
  
  console.log(objetoProxy.propiedad1); // Accediendo a la propiedad: propiedad1
  objetoProxy.propiedad1 = "Nuevo valor 1"; // Modificando la propiedad: propiedad1 con el valor: Nuevo valor 1
  console.log(objetoProxy.propiedad2); // Accediendo a la propiedad: propiedad2
  objetoProxy.metodo(); // Método original llamado
  
  // Ejemplo de acceso al prototipo
  console.log(Object.getPrototypeOf(objetoProxy)); // Obteniendo el prototipo del objeto