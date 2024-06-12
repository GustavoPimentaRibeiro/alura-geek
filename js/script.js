document
  .querySelector("[data-formulario]")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulário enviado!");
  });
