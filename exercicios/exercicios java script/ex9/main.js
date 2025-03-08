
function manipularObjetoLivro(livro) {
  console.log("Objeto livro:", livro);
  
  const { titulo, autor } = livro;
  console.log("Título desestruturado:", titulo);
  console.log("Autor desestruturado:", autor);
  
  function formatarLivro(livro) {
    return `"${livro.titulo}" por ${livro.autor}`;
  }
  
  console.log("Formatação:", formatarLivro(livro));
}

manipularObjetoLivro({ titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 });