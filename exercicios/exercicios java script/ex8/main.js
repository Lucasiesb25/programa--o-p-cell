
function manipularObjeto(pessoa) {
  console.log("Objeto original:", pessoa);
  
  pessoa.profissao = "Desenvolvedor";
  console.log("Objeto após adicionar profissão:", pessoa);
  
  delete pessoa.cidade;
  console.log("Objeto após remover cidade:", pessoa);
  
  console.log("Propriedades do objeto:", Object.keys(pessoa));
}

manipularObjeto({ nome: "Carlos", idade: 28, cidade: "São Paulo" });