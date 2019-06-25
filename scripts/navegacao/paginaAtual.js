import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';
import * as storagePaginaAtual from '/scripts/storage/paginaAtual.js';
import { carregar } from '/scripts/navegacao/carregar.js';

const paginaAtual = storagePaginaAtual.paginaAtual;

const paginaParaCarregar = paginaAtual !== null
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaParaCarregar);

carregar(enderecoCompleto);

$janelaPrincipal.addEventListener('load', function atualizaPaginaAtual(){
    let endereco =  $janelaPrincipal.contentWindow.location.href;
    storagePaginaAtual.setPaginaAtual(endereco);
});

