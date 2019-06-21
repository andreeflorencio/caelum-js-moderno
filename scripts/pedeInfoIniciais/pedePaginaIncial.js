import { aceitouSalvar } from '/scripts/storage/aceitouSalvar.js';
import { paginaInicial, setPaginaInicial } from '/scripts/storage/paginaInicial.js';

if(aceitouSalvar === null || aceitouSalvar === true){
    
    let paginaInicialDefault=paginaInicial;

    if(!paginaInicialDefault){
        paginaInicialDefault = prompt("Escolha a página inicial");  
    } 

    if(paginaInicialDefault){
        if (
            paginaInicialDefault.substring(0,7) !== 'http://' && 
            paginaInicialDefault.substring(0,8) !== 'https://'
        ) {
            paginaInicialDefault = `http://${paginaInicialDefault}`;
        }

        $janelaPrincipal.src = paginaInicialDefault;
        $inputEndereco.value = paginaInicialDefault;
        setPaginaInicial(paginaInicialDefault);
    }
}
