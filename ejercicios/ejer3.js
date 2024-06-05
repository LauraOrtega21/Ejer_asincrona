const funtionMap = () => {
  let pushArray = [];

  for (let i = 0; i < Array.length; i++){
    let resultado = callback(array[i]);
    newArray.push(resultado);
  }
}

let array = [1, 2, 3, 4, 5, 6]

// ------------------------------------------------------------


console.clear

let arreglo = [2, 3, 4, 5, 6];

const operacion = (x) => {
  return x * 2;
};

let resultado = arreglo.map(operacion);
console.table(resultado);
