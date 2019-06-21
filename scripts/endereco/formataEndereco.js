export function formataEndereco(enderecoParaFormatar) {
    if (
        enderecoParaFormatar.substring(0,7) !== 'http://' && 
        enderecoParaFormatar.substring(0,8) !== 'https://'
    ) {
        enderecoParaFormatar = `http://${paginaInicialDefault}`;
    }

    return enderecoParaFormatar
};