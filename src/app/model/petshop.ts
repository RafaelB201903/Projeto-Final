export class Petshop {

    id:string;
    nome:string;
    cpf:string;
    telefone:string;
    cidade:string;
    bairro:string;
    endereco:string;
    ncomercio:string;
    complemento:string;
    cnpj:string;
    servico1:string;
    preco1:string;

    servico2:string;
    preco2:string;

    servico3:string;
    preco3:string;
    imagem: string;


    setData(objFirebase : any){
        this.nome = objFirebase.nome;
        this.cpf = objFirebase.cpf;
        this.telefone = objFirebase.telefone;
        this.cidade = objFirebase.cidade;
        this.bairro = objFirebase.bairro;
        this.endereco = objFirebase.endereco;
        this.ncomercio = objFirebase.ncomercio;
        this.cnpj = objFirebase.cnpj;
        this.servico1 = objFirebase.servico1;
        this.servico2 = objFirebase.servico2;
        this.servico3 = objFirebase.servico3;
        this.preco1 = objFirebase.preco1;
        this.preco2 = objFirebase.preco2;
        this.preco3 = objFirebase.preco3;
        this.complemento = objFirebase.complemento;
    }

}