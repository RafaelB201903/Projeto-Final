import { Petshop } from '../model/petshop';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

@Injectable()

export class PetshopService {
    petshop: Petshop = new Petshop();

    constructor(private firestore: AngularFirestore) {

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
                    lista.push(petshop); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }
}