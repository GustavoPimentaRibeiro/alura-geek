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

async function montaCard(listaProduto, listaDeProdutos, imagemURL) {
  listaDeProdutos.innerHTML += `
    <div class="produto__card">
      <img
        class="produto__card--imagem"
        src="${imagemURL}"
        alt=""
      />
      <p class="produto__card--descricao" title="${listaProduto.nome}">${
    listaProduto.nome
  }</p>
      <div class="produto__card--preco-excluir">
        <p class="produto__card--preco" title="$ ${listaProduto.valor
          .toString()
          .replace(".", ",")}">$ ${listaProduto.valor
    .toString()
    .replace(".", ",")}</p>
        <img class="excluir" src="assets/images/excluir.svg" alt="" title="Excluir produto" />
      </div>
    </div>
  `;
}

carregarBotoesExcluir();
