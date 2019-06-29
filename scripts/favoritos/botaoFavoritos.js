import { criaEndereco } from "/scripts/endereco/criaEndereco.js";
import { carregar } from "/scripts/navegacao/carregar.js";

class Favorito extends criaEndereco {
    constructor(nome, endereco){
        super(endereco)
        this.nome = nome || this.urlResumida
        this.descricao = this.urlResumida

        //this.onclick = this.onclick.bind(this)
    }

    onclick(){
        carregar(this.urlCompleta);
    }
}


$botaoFavorito.addEventListener('', function(){
    const nome = prompt('Qual o nome?');
    const favorito = new Favorito(nome,$janelaPrincipal.contentWindow.location.href)
    $Cake.addFavorite(favorito);
})