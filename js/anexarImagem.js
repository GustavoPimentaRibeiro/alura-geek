const imagemAnexada = document.querySelector("#imagem");
const nomeDaImagemAnexada = document.querySelector(".nome-imagem");

imagemAnexada.addEventListener("change", (event) => {
  const imagem = event.target.files[0];

  if (imagem) {
    const reader = new FileReader();
    reader.onload = function () {
      const imageUrl = reader.result;
      localStorage.setItem("imagemSelecionada", imageUrl);
    };
    reader.readAsDataURL(imagem);
  }

  const nomeArquivo = event.target.files[0]
    ? event.target.files[0].name
    : "Anexe uma imagem";
  nomeDaImagemAnexada.textContent = nomeArquivo;
});
