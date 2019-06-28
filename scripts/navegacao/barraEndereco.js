import { carregar } from '/scripts/navegacao/carregar.js';
import { criaEndereco } from '/scripts/endereco/criaEndereco.js'
import { CakeEnderecoInvalidoError } from '/scripts/erros/CakeEnderecoInvalidoError.js'


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
        try {
            endereco = new criaEndereco($inputEndereco.value);
        } catch (error) {
            if (error instanceof CakeEnderecoInvalidoError) {
                alert('Endereço inválido: ' + error.message);
            } else {
                throw new Error(error);
            };
        };

        carregar(endereco);
    };
});