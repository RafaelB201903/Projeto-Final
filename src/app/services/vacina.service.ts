import { Vacina } from '../model/vacina';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable()

export class VacinaService {
    vacina: Vacina = new Vacina();

    constructor(private firestore: AngularFirestore) {}


    cadastrar(vacina: any): Observable<any> {//função de espera para o servidor
        return from(new Observable(observe => {
       
            this.firestore.collection('vacina').add(vacina).then(response => {
             
                observe.next("Cadastrado com sucesso!");

            }, (err) => {

                observe.error("Erro ao cadastrar!")
            })
        }));
    }
}