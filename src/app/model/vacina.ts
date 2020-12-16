export class Vacina{
    
    id:string;
    medicamento: string;
    proximadose:string;
    data:string;

    setData(objFirebase : any){

        this.medicamento = objFirebase.medicamento;
        this.proximadose = objFirebase.proximadose;
        this.data = objFirebase.data;


    }











}