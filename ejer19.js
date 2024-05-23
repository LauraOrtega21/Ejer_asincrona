let suma = 0;

async function datos() {
  const response = await fetch("ejercicio19json.json");
  const datos = await response.json();
  let datoss = Object.values(datos);
  for (const item of datoss) {
    suma += item;
  }
  console.log(suma)
 
}

datos();