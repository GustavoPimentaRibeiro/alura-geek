const formulario = document.querySelector("[data-formulario]");

function limparCampos() {
  formulario.reset();
  localStorage.removeItem("cadastro");
  localStorage.removeItem("imagemSelecionada");
  nomeDaImagemAnexada.innerHTML = "Anexe uma imagem";
  imagemAnexada.value = "";
}
