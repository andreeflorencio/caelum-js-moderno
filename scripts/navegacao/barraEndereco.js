import { carregar } from '/scripts/navegacao/carregar.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';

$inputEndereco.addEventListener('focus', exibeEnderecoCompleto);

$inputEndereco.addEventListener('blur', exibeEnderecoResumido);

$janelaPrincipal.addEventListener('load', exibeEnderecoResumido);


function exibeEnderecoCompleto(){
    const url = new URL($janelaPrincipal.contentWindow.location.href)
   
    let enderecoCompleto;
    if(url.hostname === 'localhost'){
        enderecoCompleto = url.pathname.replace("/","");
    } else {
        enderecoCompleto = url.href
    };

    $inputEndereco.value = enderecoCompleto;
};

function exibeEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href)
    
    let enderecoResumido;    
    if(url.hostname === 'localhost'){
        enderecoResumido = url.pathname.replace("/","");
    } else {
        enderecoResumido = url.hostname
    };

    $inputEndereco.value = enderecoResumido;
};

$inputEndereco.addEventListener('keyup', function(evento) {
    const apertouEnter = evento.key === 'Enter';
    
    if (apertouEnter) {
        const enderecoCompleto = formataEndereco($inputEndereco.value)
        carregar(enderecoCompleto);
    };
});