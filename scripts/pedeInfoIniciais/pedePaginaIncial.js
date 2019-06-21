import { aceitouSalvar } from '/scripts/storage/aceitouSalvar.js';
import { paginaInicial, setPaginaInicial } from '/scripts/storage/paginaInicial.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js'

if(aceitouSalvar === null || aceitouSalvar === true){
    
    let paginaInicialDefault=paginaInicial;

    if(!paginaInicialDefault){
        paginaInicialDefault = prompt("Escolha a página inicial");  
    } 

    if(paginaInicialDefault){

        const enderecoCompleto = formataEndereco(paginaInicialDefault);


        $janelaPrincipal.src = enderecoCompleto;
        $inputEndereco.value = enderecoCompleto;
        setPaginaInicial(enderecoCompleto);
    }
}
