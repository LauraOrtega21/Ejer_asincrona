let array = [1, 3, 56, 2, 5, 32]

function buscador(x) {
  return x === 2;
}

let resultado = array.find(buscador) //solo busca el numero que se pase en la funcion que este en el arreglo
console.log(resultado)