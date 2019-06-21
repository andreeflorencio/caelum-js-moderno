import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'

$inputPaginaInicial.value = storagePaginaInicial.paginaInicial;
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar;

$botaoSalvar.onclick = salvar;

function salvar() {

    const funcaoEscolhida = $inputPermitiuSalvar.checked === true
    ? storageAceitouSalvar.setAceitou // true
    : storageAceitouSalvar.setNaoAceitou; //false

    funcaoEscolhida();

    storagePaginaInicial.setPaginaInicial($inputPaginaInicial.value);

};