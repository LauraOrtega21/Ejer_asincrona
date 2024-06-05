// se creo el arreglo 
let arreglo = [1, 2, 3, 4, 5, 6,7];
// se realiza la funcion 
let proceso = (num) => {
  return num % 2 === 0
} 
// se le asigna el arreglo a la variable y luego se le indica que va a realizar 
let impimir = arreglo.every(proceso)  //el every revisa y con un false todo es falso
console.log(impimir)  //false