import { carregar } from "/scripts/navegacao/carregar.js";
import { paginaInicial } from '/scripts/storage/paginaInicial.js';

$botaoHome.addEventListener('click', function vaiParaHome(){
    carregar(paginaInicial);
});