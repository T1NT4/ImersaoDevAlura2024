let sect = document.getElementById("resultados-pesquisa");
let barra_pesquisa = document.getElementById("barra_pesquisa");

function pesquisar(){
    let resultados = "";
    for(let dado of dados){
        resultados += `
            <div class="item-resultado">
                <div>
                <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                </p>
                <a href="${dado.link}" target="_blank">Comprar Jogo</a>
                </div>
                <figure>
                    <a target="_blank" href="${dado.link}">
                        <img src="${dado.img}" alt="">
                    </a>
                </figure>
            </div>
        `;
    }
    sect.innerHTML = resultados;
}