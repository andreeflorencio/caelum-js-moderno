export function formataEndereco(enderecoParaFormatar) {


    if (enderecoParaFormatar ===  null || enderecoParaFormatar === "" || enderecoParaFormatar === "blank") {
        return 'blank';
    };

    if (
        enderecoParaFormatar.substring(0,7) !== 'http://' && 
        enderecoParaFormatar.substring(0,8) !== 'https://'
    ) {
        enderecoParaFormatar = `http://${enderecoParaFormatar}`;
    }

    return enderecoParaFormatar
};