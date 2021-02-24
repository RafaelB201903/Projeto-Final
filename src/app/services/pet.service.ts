import { Pet } from './../model/pet';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()

export class PetService {
    pet: Pet = new Pet();

    constructor(private firestore: AngularFirestore,
        public storage: AngularFireStorage) {}


    listaDePets(id): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("pet",ref => ref.where("idcliente","==",id)).snapshotChanges().subscribe(response => {
                
                let lista: Pet[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let pet: Pet = new Pet();
                    pet.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    pet.id = obj.payload.doc.id; // inserindo ID
                    this.storage.storage.ref().child(`pet/${obj.payload.doc.id}.jpg`).getDownloadURL().then(response=>{
                        pet.imagem = response;
                        
                        lista.push(pet); // adicionando o cliente na lista // push é adicionar
                      }).catch(response=>{
                        this.storage.storage.ref().child(`pet/dog.png`).getDownloadURL().then(response=>{
                            pet.imagem = response;
                          
                          lista.push(pet); // adicionando o cliente na lista // push é adicionar
                        })
                      })
                    
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

    listaPorIdCliente(id: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('pet').ref.where("idcliente","==",id)
                .get().then(response => {
                    let lista: Pet[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let pet: Pet = new Pet();
                        pet.setData(obj.data());// obj.payload.doc.data() -> Dados do cliente
                        pet.id = obj.id; // inserindo ID
                        lista.push(pet); // adicionando o cliente na lista // push é adicionar
                    });
                    console.log(lista);
                    observe.next(lista);
                })

        }))
    }

   //criei para listar informações no ver-mais-pedido
   petPorIdVerMaisPedido(idpet): Observable<any> {

    // Observable -> Aguardar resposta do servidor
    return from(new Observable(observe => { // converter para Observable

        // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
        // .snapshotChanges().subscribe -> Tentar buscar no servidor
        // response -> dados baixados do servidor, os clientes
        this.firestore.collection('pet').doc(idpet).snapshotChanges().subscribe(response => {
            // transformar response em array de clientes
            let pet: Pet = new Pet();
            pet.setData(response.payload.data())
            console.log("id" +idpet);
            console.log(response.payload.data());
            observe.next(pet);
        })

    }))
}
}
