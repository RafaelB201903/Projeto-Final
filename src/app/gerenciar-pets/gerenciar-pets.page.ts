import { PetService } from 'src/app/services/pet.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-gerenciar-pets',
  templateUrl: './gerenciar-pets.page.html',
  styleUrls: ['./gerenciar-pets.page.scss'],
})
export class GerenciarPetsPage implements OnInit {

  lista : Pet[] = [];
  id : string = "";

  constructor(private petService : PetService,
    private navCtrl : NavController,
    private auth : AngularFireAuth) {

       this.auth.currentUser.then(response=>{ // auth.currentUser -> Obten dados do usuario  
        this.id = response.uid;
        this.petService.listaDePets(this.id).subscribe(response => {
          //this.clienteServ.listaDeClientes() -> chamei a lista de clientes 
          //o ListaDeClientes é um OBSERVABLE dessa forma retorna um subscribe
          //Esse é o comando que irá aguardar a resposta do servidor
    
          //se o servidor responder ele fazer isso aqui
          console.log(response);//isso serve para ver se o problema é aqui, se houver algum erro aparecera aq
          //solicitando uma resposta do servidor
          this.lista = response;
          console.log(this.lista);
    
          
        }, err=> {
        //o lista de cliente retorna observable 
        })
      })

    }
    
  ngOnInit() {// os cliente precisam estar aqui antes da pagina carregar 
    
  }

  //metodo para poder enviar o id do cliente pela url
  visualizar(pet){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/info-pet',pet.id])
    console.log(pet.id)
  }
  

}
