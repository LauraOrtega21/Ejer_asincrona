console.clear

let numeros = [1, 3, 6, 8, 10, 11]

const operacion = (num) => {
  // si usamos llaves, entonces necesitamos un return explícito
  return num > 5;
}

let mostrar = numeros.filter(operacion)
console.table(mostrar)

