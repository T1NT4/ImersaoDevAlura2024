let textInput = document.getElementById("campo_pesquisa");
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    pesquisar()
  }
});