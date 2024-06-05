let array = [2, 4, 6, 54, 322]

const operacion = (x) => {
  return x > 10;
}

let resultado = array.findIndex(operacion); //el findIndex busca la posicion del primer numero que cumpla la condicion

console.log(resultado);