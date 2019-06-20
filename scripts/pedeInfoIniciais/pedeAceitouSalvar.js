import aceitouSalvar, { setAceitouSalvar } from '/scripts/storage/aceitouSalvar.js'

if(aceitouSalvar === null){
    const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?');
    
    if (!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações');
    };

    setAceitouSalvar(aceitouSalvar);
    
}