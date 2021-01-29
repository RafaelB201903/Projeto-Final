export class Pedido{
    id: string;
    servico: string;
    pet: string;
    data_sugerido: string;
    horario_sugerido: string;
    nome_pet: string;
   
    

    setData(objFirebase : any){

        this.servico = objFirebase.servico;
        this.pet = objFirebase.pet;
        this.data_sugerido = objFirebase.data_sugerido;
        this.horario_sugerido = objFirebase.horario_sugerido;
        this.nome_pet = objFirebase.nome_pet;
        
        

    }
}
