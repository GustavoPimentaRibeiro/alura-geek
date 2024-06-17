import conectaApi from "./conectarApi.js";
import carregaProdutos from "./carregaProdutos.js";

const formulario = document.querySelector("[data-formulario]");
const listaDeProdutos = document.querySelector("[data-lista-produtos]");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const listaProduto = {
    nome: e.target.elements["nome"].value,
    valor: parseFloat(e.target.elements["valor"].value).toFixed(2),
  };
  localStorage.setItem("cadastro", JSON.stringify(listaProduto));
  const imagemURL = localStorage.getItem("imagemSelecionada");

  await montaCard(listaProduto, listaDeProdutos, imagemURL);
  await carregarBotoesExcluir();

  alert("O item foi adicionado com sucesso!");
});

async function produtosListados() {
  const produtos = await conectaApi.listaProdutos();
  console.log(produtos);
  return produtos;
}

carregaProdutos.carregaProdutos();
carregarBotoesExcluir();
