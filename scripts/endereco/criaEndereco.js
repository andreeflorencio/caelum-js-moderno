export function criaEndereco(endereco){

    //Evita que o objeto seja instanciado sem o new
    //if(this === undefined) throw new Error('Você precisa instanciar o objeto utilizando new');
    
    //Se o objeto for chamado sem o new força que o mesmo seja chamado com new... Objeto new Error funciona assim
    //if(this === undefined) return new criaEndereco(endereco);

    if(this === undefined || (this !== undefined && !(this instanceof criaEndereco))){
       return new criaEndereco(endereco)
    };

    let enderecoResumido;
    let enderecoCompleto;

    if (!endereco ===  null || endereco === "blank") {
        
        enderecoResumido = 'blank';
        enderecoCompleto = 'blank';

    } else {

        //cria objeto url do endereço 
        const url = new URL(endereco)

        if(url.hostname === 'localhost'){
            const paginaLocal = url.pathname.replace("/","");
            enderecoCompleto =  paginaLocal;
            enderecoResumido = paginaLocal;
        } else {
            enderecoCompleto = url.href
            enderecoResumido = url.hostname
        };
    }

    //Este é o retorno do objeto criado. 
    //Cria dois atribuitos urlCompleta e urlResumida.
    //Atribui valor para os atributos criados
    //Não precisa de return por a função foi instanciada com new

    this.urlCompleta = enderecoCompleto;
    this.urlResumida = enderecoResumido;

};