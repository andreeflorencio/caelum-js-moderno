import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial;
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar;

$botaoSalvar.addEventListener('click', salvar)

function salvar() {

    const funcaoEscolhida = $inputPermitiuSalvar.checked === true
    ? storageAceitouSalvar.setAceitou // true
    : storageAceitouSalvar.setNaoAceitou; //false

    funcaoEscolhida();

    const enderecoCompleto = formataEndereco($inputPaginaInicial.value)

    storagePaginaInicial.setPaginaInicial(enderecoCompleto);
    
    $inputPaginaInicial.value = enderecoCompleto;

};