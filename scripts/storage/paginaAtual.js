export let paginaAtual = localStorage.getItem("paginaAtual");

export function setPaginaAtual(valor) {
    paginaAtual = valor;
    localStorage.setItem("paginaAtual", valor);
}