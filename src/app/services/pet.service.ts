import { Pet } from './../model/pet';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()

export class PetService {
    pet: Pet = new Pet();

    constructor(private firestore: AngularFirestore) {}

    cadastrar(pet: any): Observable<any> {//função de espera para o servidor
        return from(new Observable(observe => {
            //cliente foi enviado no parametro e foi adicionado aqui em baixo

            //coleção cliente  //.add = vai cadastrar o cliente
            //mas para eu colocar o obj cliente aqui 
            //toda vez que eu usar a funçao esse clinete tem que ser
            //passado no parametro (lá em cima), ou seja o cliente que foi enviado
            //no parametro ele vai ser passado aqui dentr da funçao
            //e agora vou tentar adicionar (then)

            //add cria um novo documento
            this.firestore.collection('pet').add(pet).then(response => {
                //vai acessar a coleção cliente e vai tentar addd um cliente
                //resposta do servidor response

                //se for cadastrado com sucesso eu quero que a minha função do
                //observable me retorne cadastrado com sucesso
                observe.next("Cadastrado com sucesso!");

            }, (err) => {

                observe.error("Erro ao cadastrar!")
            })
        }));
    }


}

