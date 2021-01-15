import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import { Observable, from } from 'rxjs';

@Injectable()

export class PedidoService {
    pedido: Pedido = new Pedido();

    constructor(private firestore: AngularFirestore) {}


    cadastrarPedido(pedido: any): Observable<any> {//função de espera para o servidor
        return from(new Observable(observe => {
       
            this.firestore.collection('pedido').add(pedido).then(response => {
             
                observe.next("Cadastrado com sucesso!");

            }, (err) => {

                observe.error("Erro ao cadastrar!")
            })
        }));
    }

    listaDePedido(id): Observable<any> {

        // Observable -> Aguardar resposta do servidor
        return from(new Observable(observe => { // converter para Observable

            // this.firestore.collection('cliente') -> Selecionar a coleção no Firestore
            // .snapshotChanges().subscribe -> Tentar buscar no servidor
            // response -> dados baixados do servidor, os clientes
            this.firestore.collection("pedido",ref => ref.where("idcliente","==",id)).snapshotChanges().subscribe(response => {
                
                let lista: Pedido[] = [];
                response.map(obj => {
                    // será repetido para cada registro, cada registro do Firestore se chama obj
                    let pedido: Pedido = new Pedido();
                    pedido.setData(obj.payload.doc.data()); // obj.payload.doc.data() -> Dados do cliente
                    console.log(obj.payload.doc.data())
                    pedido.id = obj.payload.doc.id; // inserindo ID
                    lista.push(pedido); // adicionando o cliente na lista // push é adicionar
                });
                observe.next(lista);
            })

        }))
    }

}