export function getHistory (){
    return sessionStorage.getItem('history');
};

export function setHistory(newSite) {
    let historicoRepetido = validaSite(newSite);

    if (historicoRepetido === false) {
        let history = getHistory();
        if(history !== null){
            history = `${history} , ${newSite}`
            sessionStorage.setItem("history", history);
        } else {
            sessionStorage.setItem("history", newSite);
        }
    };
};

export function formatHistoryToArray(stringDeSites){
    let sites = [];
    sites = stringDeSites.split(',');
    return sites;
};

function validaSite(site){
    let history = getHistory();

    if(history === null){
        return true;
    };

    let sites = formatHistoryToArray(history);

    if(sites[sites.length-1] !== site){
        return false
    } else {
        return true;
    };
};