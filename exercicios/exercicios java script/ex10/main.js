
function processarNumeros(numeros) {
  console.log("Array original:", numeros);
  
  const pares = numeros.filter(num => num % 2 === 0);
  console.log("Números pares:", pares);
  
  const dobrados = pares.map(num => num * 2);
  console.log("Números pares dobrados:", dobrados);
  
  const soma = dobrados.reduce((acc, num) => acc + num, 0);
  console.log("Soma dos números dobrados:", soma);
}

processarNumeros([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);