import { criaEndereco } from "/script/endereco/criaEndereco.js";

export function carregar(valor) {

    let endereco

    if (typeof (valor) === 'string') {
        
        endereco = criaEndereco(valor)

    } else if (valor instanceof criaEndereco) {
        
        endereco = valor;

    } else {

        throw new Error(`
            Não foi possivel carregar o seguinte endereço
                Valor: ${JSON.stringify(valor)}
                Tipo: ${typeof(valor)}
        `);
    }

    $janelaPrincipal.src = endereco.urlCompleta;
    $inputEndereco.value = endereco.urlCompleta;
};
