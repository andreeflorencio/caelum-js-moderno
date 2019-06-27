import { carregar } from '/scripts/navegacao/carregar.js';
import { formataEndereco } from '/scripts/endereco/formataEndereco.js';
import { criaEndereco } from '/scripts/endereco/criaEndereco.js'

let endereco;

$janelaPrincipal.addEventListener('load', function(){
    endereco = new criaEndereco($janelaPrincipal.contentWindow.location.href);
});

$inputEndereco.addEventListener('focus', exibeEnderecoCompleto);
$inputEndereco.addEventListener('blur', exibeEnderecoResumido);
$janelaPrincipal.addEventListener('load', exibeEnderecoResumido);

function exibeEnderecoCompleto(){
    $inputEndereco.value = endereco.urlCompleta;
};

function exibeEnderecoResumido() {
    $inputEndereco.value = endereco.urlResumida;
};

$inputEndereco.addEventListener('keyup', function(evento) {
    const apertouEnter = evento.key === 'Enter';
    
    if (apertouEnter) {
        endereco = criaEndereco($inputEndereco.value);
        carregar(endereco);
    };
});