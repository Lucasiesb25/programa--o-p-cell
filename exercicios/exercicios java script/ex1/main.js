
function manipularString(texto) {
  console.log("String original:", texto);
  console.log("Maiúsculas:", texto.toUpperCase());
  console.log("Minúsculas:", texto.toLowerCase());
  console.log("Invertida:", texto.split("").reverse().join(""));
  console.log("Substituição:", texto.replace(/a/g, "x")); 
}

manipularString("JavaScript é uma linguagem de programação");