export function criaEndereco(endereco){
    
    let enderecoResumido;
    let enderecoCompleto;

    if (!endereco ===  null || endereco === "blank") {
        
        enderecoResumido = 'blank';
        enderecoCompleto = 'blank';

    } else {

        const url = new URL(endereco)

        if(url.hostname === 'localhost'){
            const paginaLocal = url.pathname.replace("/","");
            enderecoCompleto =  paginaLocal;
            enderecoResumido = paginaLocal;
        } else {
            enderecoCompleto = url.href
            enderecoResumido = url.hostname
        };
    }

    this.urlCompleta = enderecoCompleto;
    this.urlResumida = enderecoResumido;

    return;
};