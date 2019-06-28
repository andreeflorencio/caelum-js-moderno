export function CakeEnderecoInvalidoError(endereco) {
    this.message = "Não conseguir entender o endereço: " + endereco;
    this.endereco = endereco;
}