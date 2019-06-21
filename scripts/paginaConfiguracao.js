import paginaInicial, { setPaginaInicial } from '/scripts/storage/paginaInicial.js'
import { aceitouSalvar , setAceitouSalvar } from '/scripts/storage/aceitouSalvar.js'

$inputPaginaInicial.value = paginaInicial;
$inputPermitiuSalvar.checked = aceitouSalvar;

$botaoSalvar.onclick = salvar;

function salvar() {

    setAceitouSalvar($inputPermitiuSalvar.checked);
    setPaginaInicial($inputPaginaInicial.value);

};