const imagemAnexada = document.querySelector("#imagem");
const nomeDaImagemAnexada = document.querySelector(".nome-imagem");

imagemAnexada.addEventListener("change", (event) => {
  const nomeArquivo = event.target.files[0]
    ? event.target.files[0].name
    : "Anexe uma imagem";
  nomeDaImagemAnexada.textContent = nomeArquivo;
});
