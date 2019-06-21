import * as storage from '/scripts/storage/aceitouSalvar.js'

if(storage.aceitouSalvar === null){
    
    const aceitouSalvar = confirm('Você aceita que a gente salve suas informações?');
    
    if (!aceitouSalvar) {
        alert('Você pode mudar isso na página de configurações');
    };

    const funcaoSalvar = aceitouSalvar === true
    ? storage.setAceitou // true
    : storage.setNaoAceitou; //false

    funcaoSalvar();
    
}