export let paginaAtual = sessionStorage.getItem("paginaAtual");

export function setPaginaAtual(valor) {
    paginaAtual = valor;
    sessionStorage.setItem("paginaAtual", valor);
}