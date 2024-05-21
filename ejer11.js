let i = 0; //Se declara una variable i e inicializa su valor en 0.
setTimeout (()=> alert(i), 100); //? //// Se establece un temporizador para ejecutar una función después de 100 milisegundos

//Asumimos que el tiempo para ejecutar esta funcion es > 100 ms 
for (let j = 0; j < 100000000; j++){ // Se ejecuta un bucle for que se repetirá hasta que j alcance 100,000,000 (cien millones)
    i++; // En cada iteración del bucle, se incrementa el valor de i en 1
}