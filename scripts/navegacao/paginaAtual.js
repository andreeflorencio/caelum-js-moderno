import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js';
import * as historico from '/scripts/navegacao/historico.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';
import * as storagePaginaAtual from '/scripts/storage/paginaAtual.js';
import { carregar } from '/scripts/navegacao/carregar.js';

const paginaAtual = storagePaginaAtual.paginaAtual;

const paginaParaCarregar = paginaAtual !== null
    ? paginaAtual
    : storagePaginaInicial.paginaInicial

const enderecoCompleto = formataEndereco(paginaParaCarregar);

carregar(enderecoCompleto);

$janelaPrincipal.addEventListener('load', function atualizaPaginaAtual() {
    let endereco = $janelaPrincipal.contentWindow.location.href;
    historico.adiciona(endereco);
});

$botaoVoltar.addEventListener('click', function () {
    const enderecoVolta = historico.volta();
    if(enderecoVolta !== undefined) carregar(enderecoVolta);
});

$botaoAvancar.addEventListener('click', function () {
    const enderecoAvanca = historico.avanca();
    if(enderecoAvanca !== undefined) carregar(enderecoAvanca);
});