
function manipularArrayStrings(arrayStrings) {
  console.log("Array original:", arrayStrings);
  
  const maiusculas = arrayStrings.map(str => str.toUpperCase());
  console.log("Strings em maiúsculas:", maiusculas);
  
  const comecamComA = arrayStrings.filter(str => str.startsWith("A"));
  console.log("Strings que começam com A:", comecamComA);
  
  const comprimentos = arrayStrings.map(str => str.length);
  console.log("Comprimento de cada string:", comprimentos);
}

manipularArrayStrings(["Maçã", "Banana", "Abacaxi", "Laranja"]);