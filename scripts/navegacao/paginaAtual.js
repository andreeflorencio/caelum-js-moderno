import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';
import * as storagePaginaAtual from '/scripts/storage/paginaAtual.js';
import { carregar } from '/scripts/navegacao/carregar.js';
//import * as storageHistory from '/scripts/storage/history.js'

const paginaAtual = storagePaginaAtual.paginaAtual;

const paginaParaCarregar = paginaAtual !== null
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaParaCarregar);

carregar(enderecoCompleto);

$janelaPrincipal.addEventListener('load', function atualizaPaginaAtual(){
    let endereco =  $janelaPrincipal.contentWindow.location.href;
    storagePaginaAtual.setPaginaAtual(endereco);

    if(endereco !== listaSites[posicao]){
        listaSites.push(endereco);
        posicao++;
    }

});


let listaSites = [];

let posicao = -1;

$botaoVoltar.addEventListener('click', function(){
    const isPrimeiraPosicao = posicao === 0
    
    if(listaSites.length !== 1 && !isPrimeiraPosicao){
        posicao--;
        carregar(listaSites[posicao]);
    };
});

$botaoAvancar.addEventListener('click', function(){
    
    const ehUltimaPosicao = posicao === listaSites.length -1
    
    if(listaSites.length !== 1 && !ehUltimaPosicao){
        posicao++;
        carregar(listaSites[posicao]);
    };
});