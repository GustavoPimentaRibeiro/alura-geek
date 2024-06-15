function limpar() {
  formulario.reset();
  localStorage.removeItem("cadastro");
  localStorage.removeItem("imagemSelecionada");
  nomeDaImagemAnexada.innerHTML = "Anexe uma imagem";
  imagemAnexada.value = "";
}
