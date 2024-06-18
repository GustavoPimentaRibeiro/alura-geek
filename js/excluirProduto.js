import conectaApi from "./conectarApi.js";

async function excluirProduto(id) {
  const produto = await conectaApi.deletaProduto(id);
  console.log(produto);
}
