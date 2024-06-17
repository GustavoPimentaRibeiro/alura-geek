import conectaApi from "./conectarApi.js";

async function carregaProdutos() {
  const divListaDeProdutos = document.querySelector("[data-lista-produtos]");
  const listaDeProdutos = await conectaApi.listaProdutos();

  listaDeProdutos.map((produto) => {
    montaCard(produto, divListaDeProdutos);
  });
}

function montaCard(produto, divListaDeProdutos) {
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
            <img class="excluir" src="assets/images/excluir.svg" alt="" title="Excluir produto" />
        </div>
    </div>
  `;
}

export default { carregaProdutos };
