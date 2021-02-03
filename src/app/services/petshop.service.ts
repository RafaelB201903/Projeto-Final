import { Petshop } from '../model/petshop';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()

export class PetshopService {
    petshop: Petshop = new Petshop();

    constructor(private firestore: AngularFirestore,
        public storage: AngularFireStorage) {

    }

    listaDePetshops(): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection('perfil-petshop').snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let lista: Petshop[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let petshop: Petshop = new Petshop();
                    petshop.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    petshop.id = obj.payload.doc.id; // inserindo ID
                    this.storage.storage.ref().child(`addimagem/${obj.payload.doc.id}.jpg`).getDownloadURL().then(response=>{
                        petshop.imagem = response;
                        
                        lista.push(petshop); // adicionando o cliente na lista // push é adicionar
                      }).catch(response=>{
                        this.storage.storage.ref().child(`addimagem/perfil2.jpg`).getDownloadURL().then(response=>{
                          petshop.imagem = response;
                          
                          lista.push(petshop); // adicionando o cliente na lista // push é adicionar
                        })
                      })
                    
                });
                observe.next(lista);
            })

        }))
    }

    petshopsPorId(id): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection('perfil-petshop').doc(id).snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let petshop: Petshop = new Petshop();
                petshop.setData(response.payload.data())
                console.log("id" +id);
                console.log(response.payload.data());
                observe.next(petshop);
            })

        }))
    }

    buscaPorNome(nome: string): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable
            this.firestore.collection('perfil-petshop').ref.orderBy("nome")
                .startAt(nome).endAt(nome + "\uf8ff").get().then(response => {
                    let lista: Petshop[] = [];
                    response.docs.map(obj => {
                        // será repetido para cada registro, cada registro do Firestore se chama obj
                        let petshop: Petshop = new Petshop();
                        petshop.setData(obj.data());// obj.payload.doc.data() -> Dados do cliente
                        petshop.id = obj.id; // inserindo ID
                        lista.push(petshop); // adicionando o cliente na lista // push é adicionar
                    });
                    observe.next(lista);
                })

        }))
    }

    //criei para listar informações no ver-mais-pedido
    petshopsPorIdVerMaisPedido(idpetshop): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection('perfil-petshop').doc(idpetshop).snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let petshop: Petshop = new Petshop();
                petshop.setData(response.payload.data())
                console.log("id" +idpetshop);
                console.log(response.payload.data());
                observe.next(petshop);
            })

        }))
    }

   
}