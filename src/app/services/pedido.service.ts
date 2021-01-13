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

}