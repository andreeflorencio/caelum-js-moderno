export function criaEndereco(endereco){
    
    const url = new URL(endereco)

    let enderecoCompleto;
    if(url.hostname === 'localhost'){
        enderecoCompleto = url.pathname.replace("/","");
    } else {
        enderecoCompleto = url.href
    };

    let enderecoResumido;
    if(url.hostname === 'localhost'){
        enderecoResumido = url.pathname.replace("/","");
    } else {
        enderecoResumido = url.hostname
    };

    return {
        urlCompleta: enderecoCompleto,
        urlResumida: enderecoResumido
    };
};