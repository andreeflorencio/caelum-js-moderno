import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'
//Salvando o histórico
import * as storagePaginaAtual from '/scripts/storage/paginaAtual.js'

const paginaAtual = storagePaginaAtual.paginaAtual

const paginaParaCarregar = paginaAtual !== null
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaParaCarregar);

$janelaPrincipal.src = enderecoCompleto;
$inputEndereco.value = enderecoCompleto;

$janelaPrincipal.addEventListener('load', atualizaPaginaAtual);

//Salvando o histórico
function atualizaPaginaAtual(){
    let endereco =  $janelaPrincipal.contentWindow.location.href;
    storagePaginaAtual.setPaginaAtual(endereco);
}