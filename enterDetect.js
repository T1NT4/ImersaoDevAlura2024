let textInput = document.getElementById("campo_pesquisa");
textInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    pesquisar()
    document.getElementsByTagName("button")[0].classList.add('activated');
    setTimeout(function(){
        document.getElementsByTagName("button")[0].classList.remove('activated');
    }, 250);
  }
});