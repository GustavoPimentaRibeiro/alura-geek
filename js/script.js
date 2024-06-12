const form = document.querySelector("[data-formulario]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dadosForm = new FormData(form);
  const imagem = dadosForm.get("imagem");
  const nome = dadosForm.get("nome");
  const valor = dadosForm.get("valor");
  console.log(imagem);
  console.log(nome);
  console.log(valor);

  if (imagem) {
    console.log(imagem.name);
    console.log(imagem.type);
  } else {
    console.log("Nenhum arquivo selecionado");
  }
});
