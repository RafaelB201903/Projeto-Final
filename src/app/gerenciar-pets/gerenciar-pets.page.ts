import { PetService } from 'src/app/services/pet.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from '../model/pet';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gerenciar-pets',
  templateUrl: './gerenciar-pets.page.html',
  styleUrls: ['./gerenciar-pets.page.scss'],
})
export class GerenciarPetsPage implements OnInit {

  lista : Pet[] = [];

  constructor(private petService : PetService,
    private navCtrl : NavController) { }

  ngOnInit() {// os cliente precisam estar aqui antes da pagina carregar 
    this.petService.listaDePets().subscribe(response => {
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
  }

  //metodo para poder enviar o id do cliente pela url
  visualizar(pet){
    //navigateFordward => para navegar pra frente, e n retornar
    //quero abrir essa pagina e quero enviar o cliente.id
    this.navCtrl.navigateForward(['/tabs/info-pet',pet.id])
    console.log(pet.id)
  }
  

}
