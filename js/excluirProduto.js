async function carregarBotoesExcluir() {
  const botaoExcluir = document.querySelectorAll(".excluir");
  botaoExcluir.forEach((botao) =>
    botao.addEventListener("click", (event) => {
      event.preventDefault();

      const avoBotaoExcluir = event.target.parentNode.parentNode;
      avoBotaoExcluir.remove();
      alert("O item foi excluido com sucesso!");
    })
  );
}
