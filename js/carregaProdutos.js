import conectaApi from "./conectarApi.js";

async function carregaProdutos() {
  const divListaDeProdutos = document.querySelector("[data-lista-produtos]");
  const listaDeProdutos = await conectaApi.listaProdutos();

  listaDeProdutos.map((produto) => {
    montaCard(produto, divListaDeProdutos);
  });
}

async function montaCard(produto, divListaDeProdutos) {
  try {
    produto.preco =
      produto.preco != Number ? parseFloat(produto.preco) : produto.preco;

    divListaDeProdutos.innerHTML += `
      <div class="produto__card">
          <img
              class="produto__card--imagem"
              src="${produto.imagem}"
              alt=""
          />
          <p class="produto__card--descricao" title="${produto.nome}">
          ${produto.nome}</p>
          <div class="produto__card--preco-excluir">
              <p class="produto__card--preco" title="$ ${produto.preco
                .toFixed(2)
                .toString()
                .replace(".", ",")}">
                  $ ${produto.preco.toFixed(2).toString().replace(".", ",")}</p>
              <img class="excluir" data-id="${
                produto.id
              }" src="assets/images/excluir.svg" alt="Ícone de lixeira" title="Excluir produto" onclick="excluirProduto(this.dataset.id)" />
          </div>
      </div>
    `;
  } catch (erro) {
    throw new Error("Não foi possível montar o card do produto");
  }
}

export default { carregaProdutos, montaCard };
