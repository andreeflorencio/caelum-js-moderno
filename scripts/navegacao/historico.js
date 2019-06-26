import * as storageHistorico from '/scripts/storage/historico.js'

const listaSites = storageHistorico.listaSites;

let posicao = storageHistorico.posicao

export function adiciona(endereco) {
    if (endereco !== listaSites[posicao]) {
        listaSites.splice(posicao + 1); //Remove elementos futuros da lista
        listaSites.push(endereco); //Inclui elementos na lista
        
        storageHistorico.setHistorico(listaSites);
        storageHistorico.setPosicao(posicao);

        posicao++;
    };
};

export function volta() {
    const isPrimeiraPosicao = posicao === 0

    if (listaSites.length !== 1 && !isPrimeiraPosicao) {
        posicao--;
        return listaSites[posicao];
    };
};

export function avanca() {
    const ehUltimaPosicao = posicao === listaSites.length - 1

    if (listaSites.length !== 1 && !ehUltimaPosicao) {
        posicao++;
        return listaSites[posicao];
    };
};