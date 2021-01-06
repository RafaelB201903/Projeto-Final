import { Pet } from './../model/pet';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()

export class PetService {
    pet: Pet = new Pet();

    constructor(private firestore: AngularFirestore) {}


    listaDePets(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection('pet').snapshotChanges().subscribe(response => {// transformar response em array de clientes
                let lista: Pet[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let pet: Pet = new Pet();
                    pet.setData(obj.payload.doc.data()); // obj.payload.doc.data() -> Dados do cliente
                    console.log(obj.payload.doc.data())
                    pet.id = obj.payload.doc.id; // inserindo ID
                    lista.push(pet); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }

    cadastrar(pet: any): Observable<any> {//função de espera para o servidor
        return from(new Observable(observe => {
       
            this.firestore.collection('pet').add(pet).then(response => {
             
                observe.next("Cadastrado com sucesso!");

            }, (err) => {

                observe.error("Erro ao cadastrar!")
            })
        }));
    }


     
     buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
      
            this.firestore.collection('pet').doc(id).snapshotChanges().subscribe(response => {
              

                console.log(response);

                let pet: Pet = new Pet();
                pet.id = response.payload.id;
              

                pet.setData(response.payload.data());
                observe.next(pet);

               
            }, (err) => {

                observe.error("Erro ao buscar o ID!");
            })



        }));

    }

    atualizar(pet: any): Observable<any> {
        return from(new Observable(observe => {
           

     
            this.firestore.collection('pet').doc(pet.id).set(pet).then(response => {
            
                observe.next("Atualizado com sucesso!");

            }, (err) => {

                observe.error("Erro ao atualizar!")
            })
        }));
    }


    excluir(pet : any) : Observable<any>{

        return from(new Observable(observe => {
           

     
            this.firestore.collection('pet').doc(pet.id).delete().then(response => {
            
                observe.next("Excluido com sucesso!");

            }, (err) => {

                observe.error("Erro ao excluir!")
            })
        }));
    }
}
