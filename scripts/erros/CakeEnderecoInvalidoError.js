export function CakeEnderecoInvalidoError(endereco) {

    if(this === undefined || (this !== undefined && !(this instanceof CakeEnderecoInvalidoError))){
        return new CakeEnderecoInvalidoError(endereco)
     };

    const erro = new Error('CakeEnderecoInvalidoError');
    this.stack = erro.stack;
    this.message = "Não conseguir entender o endereço: " + endereco;
    this.endereco = endereco;
};

// Muda o tipo do erro customizado para Error também
CakeEnderecoInvalidoError.prototype = Error.prototype