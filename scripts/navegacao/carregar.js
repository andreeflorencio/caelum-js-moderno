import { criaEndereco } from "/scripts/endereco/criaEndereco.js";

export function carregar(valor) {

    let endereco

    if (typeof (valor) === 'string') {
        
        endereco = new criaEndereco(valor)

    } else if (valor instanceof criaEndereco) {
        
        endereco = valor;

    } else {

        throw new Error(`
            Você passou um endereço que não é do tipo string e nem do tipo endereço
                Valor: ${JSON.stringify(valor)}
                Tipo: ${typeof(valor)}
        `);
    }

    $janelaPrincipal.src = endereco.urlCompleta;
    $inputEndereco.value = endereco.urlCompleta;
};
