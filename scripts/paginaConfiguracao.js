import * as storagePaginaInicial from '/scripts/storage/paginaInicial.js'
import * as storageAceitouSalvar from '/scripts/storage/aceitouSalvar.js'
import { criaEndereco } from '/scripts/endereco/criaEndereco.js';
import { CakeEnderecoInvalidoError } from '/scripts/erros/CakeEnderecoInvalidoError';

//Pega o valor do storage e coloca no valor dos campos no HTML
$inputPaginaInicial.value = storagePaginaInicial.paginaInicial;
$inputPermitiuSalvar.checked = storageAceitouSalvar.aceitouSalvar;

//Quando clicar no botão salvar executa função salvar
$botaoSalvar.addEventListener('click', salvar)

function salvar() {

    //IF ternário para determinar qual função será executada.
    //Variavel recebe o valor de uma função do objeto storageAceitouSalvar
    const funcaoEscolhida = $inputPermitiuSalvar.checked === true
        ? storageAceitouSalvar.setAceitou // true
        : storageAceitouSalvar.setNaoAceitou; //false

    funcaoEscolhida();

    try {

        //Instancia de URL
        const enderecoCompleto = new criaEndereco($inputPaginaInicial.value)
        
        //Salva no Storage a URL
        storagePaginaInicial.setPaginaInicial(enderecoCompleto);

        //Salva no formulário o endereço novo
        $inputPaginaInicial.value = enderecoCompleto;
        
    } catch (error) {

        if(error instanceof CakeEnderecoInvalidoError){
            $inputPaginaInicial.value = ""
            alert("URL Inválida: " + error)
            console.warn(error.message);
            
        } else {
            throw error
        }
        
    }



};

$botaoLimpaTudo.addEventListener('click', function () {
    const chavesPermanente = ['aceitouTermos', 'aceitouSalvar']
    const listaChavesLocalStorage = Object.keys(localStorage);

    listaChavesLocalStorage.forEach((chave) => {
        const isChavePermanete = chavesPermanente.includes(chave)
        if (!isChavePermanete) localStorage.removeItem(chave);
    });

    const listaChavesSessionStorage = Object.keys(sessionStorage);
    listaChavesSessionStorage.forEach((chave) => {
        sessionStorage.removeItem(chave);
    });

    window.location.reload();
});