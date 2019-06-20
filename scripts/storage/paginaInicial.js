export default localStorage.getItem('paginaInicial');

export function setPaginaInicial(paginaInicial) {
    localStorage.setItem("paginaInicial", paginaInicial);
}