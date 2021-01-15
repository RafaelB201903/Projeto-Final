import { Component, OnInit, ViewChild } from '@angular/core';
import { Petshop } from '../model/petshop';
import { NavController } from '@ionic/angular';
import { PetshopService } from '../services/petshop.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-localizar-petshops',
  templateUrl: './localizar-petshops.page.html',
  styleUrls: ['./localizar-petshops.page.scss'],
})
export class LocalizarPetshopsPage implements OnInit {

@ViewChild("nome") nome; 


  lista : Petshop[] = [];
  
  constructor(private petshopService : PetshopService,
    private navCtrl : NavController,
    private auth : AngularFireAuth) {
      
    }

  ngOnInit() {

    this.auth.currentUser.then(response=>{
      console.log(response.uid);
    })

    this.petshopService.listaDePetshops().subscribe(response => {
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

  pesquisar(){
    this.auth.credential.subscribe(resp=>{
      console.log(resp);
    })
    console.log("Busca por: "+this.nome.value)
    this.petshopService.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }

 
  
 visualizar(petshop){
  //navigateFordward => para navegar pra frente, e n retornar
  //quero abrir essa pagina e quero enviar o cliente.id
  this.navCtrl.navigateForward(['/ver-mais-petshop',petshop.id])
  console.log(petshop.id)
}

visualizar2(petshop){
  //navigateFordward => para navegar pra frente, e n retornar
  //quero abrir essa pagina e quero enviar o cliente.id
  this.navCtrl.navigateForward(['/agendar-pedido',petshop.id])
  console.log(petshop.id)
}

}
