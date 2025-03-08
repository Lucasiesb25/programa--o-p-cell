
function verificarIdade(idade) {
  console.log("Idade:", idade);
  
  if (idade < 18) {
    console.log("Menor de idade");
  } else if (idade >= 65) {
    console.log("Idoso");
  } else {
    console.log("Maior de idade");
  }
}

verificarIdade(70);