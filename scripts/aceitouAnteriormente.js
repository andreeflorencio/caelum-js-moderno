
const aceitouAnteriormente = localStorage.getItem("aceitouSalvar");

if(!aceitouAnteriormente){
    const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?');
    
    if (!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações');
    };

    localStorage.setItem('aceitouSalvar', aceitouSalvar);
    
}

export default aceitouSalvar