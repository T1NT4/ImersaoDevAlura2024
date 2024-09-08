let sect = document.getElementById("resultados-pesquisa");
let campoPesquisa = document.getElementById("campo_pesquisa");

function pesquisar(){
    let resultados = "";
    let pesqLow = campoPesquisa.value.toLowerCase().trim();
    let pesquisaInvalida = false;
    
    if(pesqLow == "" ||
        pesqLow == "." || 
        pesqLow == "," ||
        pesqLow.length <= 1){
                                                                
        pesquisaInvalida = true;
        resultados = `
            <h2 style="color:#30475E; text-decoration:underline; text-decoration-color:#30475E;">Sua pesquisa é invalida, tente novamente.</h2>
        `;
    }

    for(let dado of dados){
        let tituloLow = dado.titulo.toLowerCase();
        let descricaoLow = dado.descricao.toLowerCase();


        if(
            ((tituloLow.includes(pesqLow) || 
            descricaoLow.includes(pesqLow)) &&
            pesquisaInvalida == false) ||
            pesqLow == "tudinho"
        ){
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
    }
    if(resultados == ""){
        resultados = `
            <h2 style="color:#30475E; text-decoration:underline; text-decoration-color:#30475E;">Nenhum resultado foi encontrado</h2>
        `
    }
    sect.innerHTML = resultados;
}