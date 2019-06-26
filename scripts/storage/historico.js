export const listaSites = JSON.parse(sessionStorage.getItem('historico')) || [];

export let posicao = JSON.parse(sessionStorage.getItem('posicaoHistorico')) || -1;

export function setHistorico(sites) {
    sessionStorage.setItem('historico', JSON.stringify(sites));
};

export function setPosicao(posicao) {
    sessionStorage.setItem('posicaoHistorico', posicao);

};