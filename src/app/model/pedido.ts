export class Pedido{
    id: string;
    servico: string;
    pet: string;
    data: string;
    horario: string;
    

    setData(objFirebase : any){

        this.servico = objFirebase.servico;
        this.pet = objFirebase.pet;
        this.data = objFirebase.data;
        this.horario = objFirebase.horario;
       

    }
}
