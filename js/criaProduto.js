import conectarApi from "./conectarApi.js";
import carregaProdutos from "./carregaProdutos.js";

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const imagemURL = localStorage.getItem("imagemSelecionada");
  const listaProduto = {
    nome: e.target.elements["nome"].value,
    preco: parseFloat(e.target.elements["preco"].value).toFixed(2),
    imagem: imagemURL,
  };
  localStorage.setItem("cadastro", JSON.stringify(listaProduto));

  await conectarApi.criaProduto(
    listaProduto.nome,
    listaProduto.preco,
    listaProduto.imagem
  );

  await carregaProdutos.carregaProdutos();

  alert("O item foi adicionado com sucesso!");
});
