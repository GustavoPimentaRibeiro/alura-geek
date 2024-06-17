async function listaProdutos() {
  const conexao = await fetch("http://localhost:3000/produtos");
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem) {
  const conexao = await fetch("http://localhost:3000/produtos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      nome: nome,
      preco: `$ ${preco}`,
      imagem: imagem,
    }),
  });

  if (!conexao.ok) {
    throw new Error("nao foi possivel adicionar o produto");
  }

  const produtoCriado = conexao.json();
  return produtoCriado;
}

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

export default { listaProdutos, criaProduto, deletaProduto };
