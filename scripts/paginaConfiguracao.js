import paginaInicial from '/scripts/storage/paginaInicial.js'
import aceitouSalvar from '/scripts/storage/aceitouSalvar.js'

$inputPaginaInicial.value = paginaInicial;
$inputPermitiuSalvar.checked = aceitouSalvar;

$botaoSalvar.onclick = salvar;

function salvar() {
    localStorage.setItem("aceitouSalvar", $inputPermitiuSalvar.checked);
    localStorage.setItem("paginaInicial", $inputPaginaInicial.value);
};

