$janelaPrincipal.onload = exibeEnderecoNaBarra;

function exibeEnderecoNaBarra(){
    $janelaPrincipal.src = $janelaPrincipal.contentWindow.location.href;
};