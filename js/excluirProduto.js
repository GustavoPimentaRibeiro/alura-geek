async function deletaProduto(idProduto) {
  const conexao = await fetch(`http://localhost:3000/produtos/${idProduto}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!conexao.ok) {
    throw new Error("nao foi possivel deletar o produto");
  }

  const produtoDeletado = conexao.json();
  return produtoDeletado;
}

async function excluirProduto(id) {
  const produto = await deletaProduto(id);
  console.log(produto);
}
