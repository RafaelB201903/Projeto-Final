export class Pedido{
    id: string;
    servico: string;
    pet: string;
    data_sugerido: string;
    horario_sugerido: string;
    nome_pet: string;
    status: string;
    idpetshop: string;
    endereco: string;
    nome_cliente:string;
    descricao: string;

    setData(objFirebase : any){

        this.servico = objFirebase.servico;
        this.pet = objFirebase.pet;
        this.data_sugerido = objFirebase.data_sugerido;
        this.horario_sugerido = objFirebase.horario_sugerido;
        this.nome_pet = objFirebase.nome_pet;
        this.status = objFirebase.status;
        this.idpetshop = objFirebase.idpetshop;
        this.endereco = objFirebase.endereco;
        this.nome_cliente = objFirebase.nome_cliente;
        this.descricao = objFirebase.descricao;
    }
}
