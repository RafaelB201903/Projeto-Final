import { Vacina } from '../model/vacina';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable()

export class VacinaService {
    vacina: Vacina = new Vacina();

    constructor(private firestore: AngularFirestore,
        
        ) {}

    listaDeVacinas(id): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("vacina",ref => ref.where("idpet","==",id)).snapshotChanges().subscribe(response => {
                // transformar response em array de clientes
                let lista: Vacina[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let vacina: Vacina = new Vacina();
                    vacina.setData(obj.payload.doc.data());// obj.payload.doc.data() -> Dados do cliente
                    vacina.id = obj.payload.doc.id; // inserindo ID
                    lista.push(vacina); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }

    cadastrarVacina(vacina: any): Observable<any> {//função de espera para o servidor
        return from(new Observable(observe => {
       
            this.firestore.collection('vacina').add(vacina).then(response => {
             
                observe.next("Cadastrado com sucesso!");

            }, (err) => {

                observe.error("Erro ao cadastrar!")
            })
        }));
    }

    atualizarVacina(id: any,vacina: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('vacina').doc(id).set(vacina).then(response => {
                observe.next("Atualizado com sucesso!");
            }, (err) => {
                observe.error("Erro ao atualizar!");
            })

        }));
    }

    buscaPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
            // .doc(id).snapshotChanges() -> Busca pelo id do documento
            this.firestore.collection('vacina').doc(id).snapshotChanges().subscribe(response => {
                console.log(response);
                let vacina: Vacina = new Vacina();
                vacina.id = response.payload.id;
                vacina.setData(response.payload.data());
                observe.next(vacina);

            }, (err) => {
                observe.error("Erro ao buscar o ID!");
            })

        }));
    }

    excluirVacina(vacina: any): Observable<any> {
        return from(new Observable(observe => {

            this.firestore.collection('vacina').doc(vacina.id).delete().then(response => {
                observe.next("Excluído com sucesso!");
            }, (err) => {
                observe.error("Erro ao excluir!");
            })

        }));
    }
}