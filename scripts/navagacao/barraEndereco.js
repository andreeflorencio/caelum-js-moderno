//Salvando o histórico
import * as storagePaginaAtual from '/scripts/storage/paginaAtual.js'

$inputEndereco.onfocus = exibeEnderecoCompleto;
$inputEndereco.onblur = exibeEnderecoResumido;

$janelaPrincipal.onload = exibeEnderecoResumido;

//Salvando o histórico
$janelaPrincipal.onload = atualizaPaginaInicial;


function exibeEnderecoCompleto(){
    $inputEndereco.value = $janelaPrincipal.contentWindow.location.href;
};

function exibeEnderecoResumido() {
    const url = new URL($janelaPrincipal.contentWindow.location.href)
    const enderecoResumido = url.hostname
    $inputEndereco.value = enderecoResumido;
};

//Salvando o histórico
function atualizaPaginaInicial(){
    let endereco =  $janelaPrincipal.contentWindow.location.href;
    storagePaginaAtual.setPaginaAtual(endereco)
}