async function procesarElemento(elemento) {
    // Simular una operación asíncrona
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Procesando elemento: ${elemento}`);
  }
  
  async function procesarLista(lista) {
    for (const elemento of lista) {
      await procesarElemento(elemento);
    }
  }
  
  const lista = ["Elemento 1", "Elemento 2", "Elemento 3"];
  
  procesarLista(lista);